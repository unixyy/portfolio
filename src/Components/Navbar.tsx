import r from "../assets/logos/R_Black.svg";

export default function Navbar() {
    return (
        <div className="navbar fixed z-10 xl:py-6 xl:px-16 bg-base-100 lg:bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a>Accueil</a>
                        </li>
                        <li>
                            <a>Compétences</a>
                        </li>
                        <li>
                            <a>Expériences</a>
                        </li>
                        <li>
                            <a>Formation</a>
                        </li>
                        <li>
                            <a>Projets</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
                <a className="py-2 px-4 w-20 rounded-full backdrop-blur-xl cubano hidden lg:flex text-2xl">
                    <svg
                        viewBox="0 0 284 364"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                    >
                        <path
                            className="stroke-primary"
                            d="M113.929 331.194C113.929 331.194 14.0444 163.552 34.8516 96.6957C55.6588 29.8389 179.498 -5.70271 227.568 93.5125C288.681 219.652 100.037 207.641 160.264 233.238C220.492 258.835 251.106 271.296 251.106 271.296"
                            stroke="white"
                            stroke-width="64"
                            stroke-linecap="round"
                        />
                    </svg>
                </a>
            </div>
            <div className="rounded-full navbar-center hidden md:flex">
                <div className=" flex flex-row  border-2 border-primary tabs font-semibold place-items-center  rounded-full backdrop-blur-xl bg-base-100/30 tabs-boxed">
                    <a className="rounded-l-full bg-primary text-white px-4 py-2">
                        Accueil
                    </a>
                    <a className=" bg-primary text-white px-4 py-2">
                        Compétences
                    </a>
                    <a className=" bg-primary text-white px-4 py-2">
                        Expériences
                    </a>
                    <a className=" bg-primary text-white px-4 py-2">
                        Formation
                    </a>
                    <a className=" bg-primary text-white px-4 py-2">Projets</a>
                    <a className="rounded-r-full bg-primary text-white px-4 py-2">
                        Contact
                    </a>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary">Mon CV</a>
            </div>
        </div>
    );
}
