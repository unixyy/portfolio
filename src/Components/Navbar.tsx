// export default function Navbar() {
//   return (
//     <div className="fixed z-10 py-4 xl:py-6 xl:px-32 navbar bg-white dark:bg-zinc-800">
//       <div className="flex-1">
//         <a className="text-xl cubano">Richard Martin</a>
//       </div>
//       <div className="flex-none gap-2">
//         <button className="btn btn-purple">
//           Mon CV
//         </button>
//       </div>
//     </div>
//   )
// }

export default function Navbar() {
  return (
    <div className="navbar fixed z-10 xl:py-6 xl:px-16 bg-base-100 lg:bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Accueil</a></li>
            <li><a>Compétences</a></li>
            <li><a>Expériences</a></li>
            <li><a>Formation</a></li>
            <li><a>Projets</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-primary cubano hidden lg:flex text-xl">Richard MARTIN</a>
      </div>
      <div className="navbar-center hidden md:flex">
        <div role="tablist" className="tabs font-normal bg-base-100 tabs-boxed">
          <a role="tab" className="tab tab-active">Accueil</a>
          <a role="tab" className="tab">Compétences</a>
          <a role="tab" className="tab">Expériences</a>
          <a role="tab" className="tab">Formation</a>
          <a role="tab" className="tab">Projets</a>
          <a role="tab" className="tab">Contact</a>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Mon CV</a>
      </div>
    </div>
  )
}
