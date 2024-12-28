import { Lucia } from 'lucia';
import { d as db, b as Session, U as User } from './_astro_db_O5c1qmJs.mjs';
import { eq, lte } from '@astrojs/db/dist/runtime/virtual.js';
import { Google } from 'arctic';

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

export { google as g, lucia as l };
