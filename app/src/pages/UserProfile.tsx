export default function UserProfile() {
  return (
    <div className="bg-surface rounded-xl shadow-sm border border-slate-200 p-6 max-w-2xl">
      <h2 className="font-semibold mb-4">My profile</h2>
      <div className="flex items-center gap-4 mb-6">
        <img src="/brand/app-icon.svg" alt="VecroMS" className="w-20 h-20 object-contain rounded-xl p-1" />
        <div>
          <h3 className="text-lg font-semibold">Ada Okafor</h3>
          <p className="text-ink-secondary text-sm">IT Manager · VecroMS HQ</p>
        </div>
      </div>
      <p className="text-ink-secondary text-sm">Profile editing and leave/loan requests — pending API.</p>
    </div>
  )
}
