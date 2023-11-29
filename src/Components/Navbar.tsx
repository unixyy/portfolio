export default function Navbar() {
  return (
    <div className="fixed z-10 py-4 xl:px-8 navbar bg-white dark:bg-zinc-800">
      <div className="flex-1">
        <a className="text-xl cubano">Richard Martin</a>
      </div>
      <div className="flex-none gap-2">
        <button className="btn btn-purple">
          Mon CV
        </button>
      </div>
    </div>
  )
}
