import { useEffect } from "react";
import r from "../assets/logos/R_Black.svg";

export default function Navbar() {
    
    useEffect(() => {

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = ["navbar", "skills", "experiences", "education", "projects", "contact"];

            sections.forEach((section, index) => {
            const nav = document.getElementById(`nav${index}`);
            if (nav) {
                if (scrollPosition >= document.getElementById(section)?.offsetTop!-100 && scrollPosition < document.getElementById(section)?.offsetTop! + document.getElementById(section)?.offsetHeight!-100) {
                nav.classList.add("btn-ghost"); // Remove the "btn-ghost" class if scroll position is within the section
                } else {
                nav.classList.remove("btn-ghost"); // Add the "btn-ghost" class if scroll position is outside the section
                }
            }
            });
        };

        window.addEventListener("scroll", handleScroll);

    })

    const ScrollToDiv = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }


    return (
        <div id="navbar" className="navbar fixed z-10 lg:px-8 lg:py-6 xl:px-16 bg-base-100 lg:bg-transparent">
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
                <a className="btn btn-outline bg-base-100 btn-primary rounded-full cubano hidden lg:flex text-2xl">
                    Richard
                </a>
            </div>
            <div className="rounded-full navbar-center hidden md:flex">
                <div className=" flex flex-row  border-2 border-primary tabs font-semibold place-items-center  rounded-full backdrop-blur-xl bg-base-100/30 tabs-boxed">
                    <a id="nav0" onClick={() => {ScrollToDiv("hero")}} className="rounded-l-full btn btn-primary text-white px-4 py-2">
                        Accueil
                    </a>
                    <a id="nav1" onClick={() => {ScrollToDiv("skills")}} className=" btn btn-primary toggle-primary rounded-none text-white px-4 py-2">
                        Compétences
                    </a>
                    <a id="nav2" onClick={() => {ScrollToDiv("experiences")}} className="btn btn-primary rounded-none text-white px-4 py-2">
                        Expériences
                    </a>
                    <a id="nav3" onClick={() => {ScrollToDiv("education")}} className=" btn btn-primary rounded-none text-white px-4 py-2">
                        Formation
                    </a>
                    <a id="nav4" onClick={() => {ScrollToDiv("projects")}} className=" btn btn-primary rounded-none text-white px-4 py-2">Projets</a>
                    <a id="nav5" onClick={() => {ScrollToDiv("contact")}} className="rounded-r-full btn btn-primary text-white px-4 py-2">
                        Contact
                    </a>
                </div>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline bg-base-100 btn-secondary cubano rounded-full text-2xl">Mon CV</a>
            </div>
        </div>
    );
}
