export default function Member({ user, is_admin }) {
  return (
    <div
      key={user.id}
      className="relative flex items-center space-x-3 rounded-lg shadow border border-gray-300 px-6 py-5 focus-within:ring-2 focus-within:ring-fuchsia-500 focus-within:ring-offset-2 hover:border-fuchsia-500"
    >
      <div className="shrink-0">
        <span
          className={
            'inline-flex size-10 items-center justify-center rounded-full ' +
            (is_admin ? 'bg-blue-300' : 'bg-gray-500')
          }
        >
          <span className="text-lg font-medium text-white">{user['short_name']}</span>
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <a href={'/members/' + user.id} className="focus:outline-none">
          <span aria-hidden="true" className="absolute inset-0" />
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
        </a>
      </div>
    </div>
  )
}
