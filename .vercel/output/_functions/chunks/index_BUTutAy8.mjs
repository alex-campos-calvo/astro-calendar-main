import { Lucia } from 'lucia';
import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { eq, lte } from '@astrojs/db/dist/runtime/virtual.js';
import { Google } from 'arctic';

const db = await createRemoteDatabaseClient({
  dbType: "libsql",
  remoteUrl: "libsql://motion-leon-alex-campos-calvo.turso.io",
  appToken: process.env.ASTRO_DB_APP_TOKEN
});
const User = asDrizzleTable("User", { "columns": { "id": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true, "optional": false } }, "google_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "google_id", "collection": "User", "primaryKey": false, "optional": true } }, "email": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "email", "collection": "User", "primaryKey": false, "optional": false } }, "name": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "name", "collection": "User", "primaryKey": false, "optional": false } }, "is_admin": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "is_admin", "collection": "User" } } }, "deprecated": false, "indexes": {} }, false);
asDrizzleTable("Slot", { "columns": { "id": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "Slot", "primaryKey": true, "optional": false } }, "start_date": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "start_date", "collection": "Slot" } }, "end_date": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "end_date", "collection": "Slot" } } }, "deprecated": false, "indexes": {} }, false);
asDrizzleTable("User_Slot", { "columns": { "id": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "User_Slot", "primaryKey": true, "optional": false } }, "user_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "user_id", "collection": "User_Slot", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true, "optional": false } } } }, "slot_id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "slot_id", "collection": "User_Slot", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "Slot", "primaryKey": true, "optional": false } } } }, "default": { "type": "boolean", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "default", "collection": "User_Slot", "default": false } } }, "deprecated": false, "indexes": {} }, false);
const Session = asDrizzleTable("Session", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Session", "primaryKey": true } }, "expiresAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "expiresAt", "collection": "Session" } }, "userId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userId", "collection": "Session", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": true, "deprecated": false, "name": "id", "collection": "User", "primaryKey": true, "optional": false } } } } }, "deprecated": false, "indexes": {} }, false);

/// <reference types="@astrojs/db" />
class AstroDBAdapter {
    db;
    sessionTable;
    userTable;
    constructor(db, sessionTable, userTable) {
        this.db = db;
        this.sessionTable = sessionTable;
        this.userTable = userTable;
    }
    async deleteSession(sessionId) {
        await this.db.delete(this.sessionTable).where(eq(this.sessionTable.id, sessionId));
    }
    async deleteUserSessions(userId) {
        await this.db.delete(this.sessionTable).where(eq(this.sessionTable.userId, userId));
    }
    async getSessionAndUser(sessionId) {
        const result = await this.db
            .select({
            user: this.userTable,
            session: this.sessionTable
        })
            .from(this.sessionTable)
            .innerJoin(this.userTable, eq(this.sessionTable.userId, this.userTable.id))
            .where(eq(this.sessionTable.id, sessionId))
            .get();
        if (!result)
            return [null, null];
        return [transformIntoDatabaseSession(result.session), transformIntoDatabaseUser(result.user)];
    }
    async getUserSessions(userId) {
        const result = await this.db
            .select()
            .from(this.sessionTable)
            .where(eq(this.sessionTable.userId, userId))
            .all();
        return result.map((val) => {
            return transformIntoDatabaseSession(val);
        });
    }
    async setSession(session) {
        await this.db
            .insert(this.sessionTable)
            .values({
            id: session.id,
            userId: session.userId,
            expiresAt: session.expiresAt,
            ...session.attributes
        })
            .run();
    }
    async updateSessionExpiration(sessionId, expiresAt) {
        await this.db
            .update(this.sessionTable)
            .set({
            expiresAt: expiresAt
        })
            .where(eq(this.sessionTable.id, sessionId))
            .run();
    }
    async deleteExpiredSessions() {
        await this.db.delete(this.sessionTable).where(lte(this.sessionTable.expiresAt, new Date()));
    }
}
function transformIntoDatabaseSession(raw) {
    const { id, userId, expiresAt, ...attributes } = raw;
    return {
        userId,
        id,
        expiresAt,
        attributes
    };
}
function transformIntoDatabaseUser(raw) {
    const { id, ...attributes } = raw;
    return {
        id,
        attributes
    };
}

const adapter = new AstroDBAdapter(db, Session, User);
const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: true
    }
  },
  getUserAttributes: (attributes) => {
    return {
      email: attributes.email,
      google_id: attributes.google_id,
      is_admin: attributes.is_admin
    };
  }
});
const google = new Google(
  "17045618575-c9jqmp53gd517vbfp6pgamqd8uq8ldht.apps.googleusercontent.com",
  "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",
  "http://localhost:3000/auth/google/callback"
);

export { User as U, db as d, google as g, lucia as l };
