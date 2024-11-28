import React from "react";
import { TimeLine, TimelineItem } from "./Timeline";
import { PropsTimeline } from "./types";

import lirmm from "../assets/jobs/lirmm.jpeg";
import greenoxya from "../assets/jobs/greenoxya.png";
import DisplayExp from "./DisplayExp";

// interface PropsBentoGrid {
//   content: JSX.Element[];
// }

// function BentoGrid(props: PropsBentoGrid) {
//   return (
//     <div className={"flex sm:grid grid-cols-12 auto-rows-[76px] gap-4"}>
//       {props.content.map((item, index) => (
//         <React.Fragment key={index}>{item}</React.Fragment>
//       ))}
//     </div>
//   )
// }

// const Bento : JSX.Element[] = [
//   <div className={"rounded-md bg-emerald-800 col-span-2 row-span-4 "}>eh oh</div>,
//   <div className={"rounded-md bg-emerald-800 col-span-8 row-span-4 "}>eh oh</div>,
//   <div className={"rounded-md bg-emerald-800 col-span-2 row-span-2 "}>eh oh</div>,
//   <div className={"rounded-md bg-blue-500 col-span-2 row-span-2 "}>là ça va bon</div>,
// ]

const exp: PropsTimeline[] = [
    {
        title: "LIRMM - ShellOnYou",
        href: "lirmm",
        date: "2023",
        img: lirmm,
        bg: "bg-white",
        description: (
            <div>
                Lors de ce stage, j’ai travaillé sur plusieurs projets importants : j’ai implémenté un <span className="text-accent font-bold w-fit">terminal UNIX</span> personnalisable au sein de l’application web, ce qui a permis une meilleure interaction utilisateur. J’ai également mis en place un système de test end-to-end (E2E) avec CypressJS pour renforcer la pipeline CI/CD et garantir une meilleure qualité des déploiements. De plus, j’ai contribué à l’instauration d’une architecture en micro-services et à la conversion des anciens modules en micro-services, facilitant ainsi la scalabilité du projet. Le tout réalisé en équipe réduite de 4 personnes.
            </div>
        ),
        reverse: false,
        skills: ["Docker", "Linux", "Optimisation de mémoire", "ReactJS"],
    },
    {
        title: "GreenOxya",
        href: "greenoxya",
        date: "2022",
        img: greenoxya,
        bg: "bg-green-800",
        description: (
            <>
                <ul className="list-disc">
                    <li>Travail d'optimisation de recherche de base de données</li>
                    <li>création d'un outil de modification de multiples bases de données, sous forme d'une application web</li>
                    <li>amélioration de l'UI/UX sur la plateforme cliente</li>

                </ul>
            </>
        ),
        reverse: false,
        skills: ["MySQL", "ReactJS", "UI/UX"],
    },
];

export default function Experiences() {
    return (
        <div id={"experiences"} className={"frame flex-col"}>
            <div className={"m-4 lg:m-16"}>
                <h1 className={"title gradExperience grad text-4xl"}>
                    Mes Expériences
                </h1>
            </div>
            <div className={"flex justify-center"}>
                <TimeLine content={exp} />
            </div>

            <ul className={"flex flex-col gap-4 lg:gap-8 sm:m-8 xl:m-16"}>
                {exp.map((item, index) => (
                    <li key={index} className="lg:mx-20">
                        <DisplayExp {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
