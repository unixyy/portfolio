import React from "react";
import { TimeLine, TimelineItem } from "./Timeline";
import { PropsTimeline } from "./types";

import git from "../assets/skills/git.svg";

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

function DisplayExp(props: PropsTimeline) {
    return (
        <div
            id={props.href}
            className="card lg:card-side shadow-xl bg-neutral text-primary-content"
        >
            <figure className="lg:w-1/3 aspect-square bg-neutral ">
                <img
                    className={"w-64 h-64"}
                    src={props.img}
                    alt={Object.keys(props.img)[0]}
                />
            </figure>
            <hr className="vertical" />
            <div className="card-body lg:w-2/3">
                <h2 className="card-title">
                    {props.title} <hr className="bg-secondary flex-1" />{" "}
                    {props.date}
                </h2>
                <p className="flex flex-col justify-center text-justify font-medium">
                    {props.description}
                </p>
                <div className="card-actions justify-end">
                    {props.skills.map((item, index) => (
                        <span
                            key={index}
                            className="badge p-4  font-bold badge-primary "
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

const exp: PropsTimeline[] = [
    {
        title: "LIRMM - ShellOnYou",
        href: "lirmm",
        date: "2023",
        img: git,
        description: (
            <>
                Lors de ce stage, J'ai eu plusieurs élements à mettre en place
                tels que :
                <ul className="list-disc">
                    <li>
                        Implémentation d'un terminal de système d'exploitation
                        personnalisable au sein de l'application web.
                    </li>
                    <li>
                        Mise en place d'un système de test E2E (end-to-end,
                        CypressJS) pour le renforcement de la pipeline CI/CD.
                    </li>
                    <li>
                        Instauration d'un architecture en micro-services et
                        conversion des anciens modules en micro-services.
                    </li>
                    <li>Travail en équipe réduite (2 personnes)</li>
                </ul>
            </>
        ),
        skills: ["courageous", "smartass", "humble"],
    },
    {
        title: "GreenOxya",
        href: "greenoxya",
        date: "2022",
        img: git,
        description: (
            <>
                Ipsum optio voluptatibus. Est expedita ea. Sed eos eaque nostrum
                aliquid ullam doloribus beatae dolor nostrum. Sequi praesentium
                eveniet aut aut eligendi natus rerum ipsum. Soluta voluptatibus
                blanditiis cumque ratione nulla. Atque nisi minima autem
                occaecati labore amet accusamus. Error molestias nisi impedit{" "}
                <b>rem occaecati</b>. Vero aspernatur aut. Ad nulla quisquam.
                Molestias quam nam quis temporibus cumque quasi temporibus
                doloremque ipsam. Tempora accusantium itaque. Pariatur maiores
                aperiam eaque placeat sit facilis repellendus. Hic doloribus ad.
                Dignissimos dolores quam sint laudantium dicta nemo quas. At
                quae reiciendis beatae.
            </>
        ),
        skills: ["courageous", "smartass", "humble"],
    },
];

export default function Experiences() {
    return (
        <div id={"xp"} className={"frame flex-col"}>
            <div className={"m-4 lg:m-16"}>
                <h1 className={"title gradExperience grad text-4xl"}>
                    Mes Expériences
                </h1>
            </div>
            <div className={"flex w-screen justify-center"}>
                <TimeLine content={exp} />
            </div>

            <ul className={"flex flex-col gap-4 lg:gap-8 sm:m-8 lg:m-16"}>
                {exp.map((item, index) => (
                    <li key={index} className=" lg:mx-20">
                        <DisplayExp {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
