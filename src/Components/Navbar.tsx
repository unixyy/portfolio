import { useEffect } from "react";
import r from "../assets/logos/R_Black.svg";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = [
        "hero",
        "skills",
        "experiences",
        "education",
        "projects",
        "contact",
      ];

      sections.forEach((section, index) => {
        const nav = document.getElementById(`nav${index}`);
        if (nav) {
          const thirdScreenHeight = window.innerHeight / 3;
          if (
            scrollPosition >=
              document.getElementById(section)?.offsetTop! -
                thirdScreenHeight &&
            scrollPosition <
              document.getElementById(section)?.offsetTop! +
                document.getElementById(section)?.offsetHeight! -
                thirdScreenHeight
          ) {
            nav.classList.add("btn-secondary"); // Add the "btn-secondary" class if scroll position is within the section
          } else {
            nav.classList.remove("btn-secondary"); // Remove the "btn-secondary" class if scroll position is outside the section
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
  });

  const ScrollToDiv = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  interface NavElement {
    name: string;
    reference: string;
  }
  const navElements: NavElement[] = [
    { name: "Accueil", reference: "hero" },
    { name: "Compétences", reference: "skills" },
    { name: "Expériences", reference: "experiences" },
    { name: "Formation", reference: "education" },
    { name: "Projets", reference: "projects" },
    { name: "Contact", reference: "contact" },
  ];

  return (
    <div
      id="navbar"
      className="navbar fixed z-10 lg:px-8 lg:py-6 xl:px-16 bg-base-100 lg:bg-transparent"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
      </div>
      <div className="rounded-full navbar-center hidden md:flex md:flex-col md:gap-y-4">
        <div className=" flex flex-row tabs font-semibold place-items-center  rounded-full backdrop-blur-xl bg-base-100/30 tabs-boxed">
          {navElements.map((element, index) => (
            <a
              key={index}
              id={`nav${index}`}
              onClick={() => ScrollToDiv(element.reference)}
              className={`flex content-center btn btn-primary poppins text-lg uppercase font-black p-8 ${
                index === 0 ? "rounded-l-full" : ""
              } ${index === navElements.length - 1 ? "rounded-r-full" : ""} ${
                index !== 0 && index !== navElements.length - 1
                  ? "rounded-none"
                  : ""
              }`}
            >
              {element.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <a className="btn btn-secondary  border-2 poppins uppercase rounded-full text-lg font-bold">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
          <a className="btn btn-accent  border-2 poppins uppercase rounded-full text-lg font-bold">
            <FontAwesomeIcon icon={faDownload} /> CV
          </a>
        </div>
        <div role="alert" className="alert alert-info w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Work is in Progress, visual bugs are friends 👀</span>
        </div>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
}
