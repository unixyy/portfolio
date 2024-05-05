import { TimeLine } from "./Timeline";
import { PropsTimeline } from "./types";

import git from "../assets/skills/git.svg";

function Divider(props: PropsTimeline) {
    return (
        <div className="flex flex-col lg:flex-row xl:mx-16">
            <div className="grid flex-grow w-1/2 h-32 card rounded-box place-items-center">
                <h2 className="card-title">{props.title}</h2>
                <p className="text-justify">{props.description}</p>
                <div className="card-actions justify-end">
                    {props.skills.map((item, index) => (
                        <span
                            key={index}
                            className="badge p-4 badge-secondary text-black "
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="grid aspect-square flex-grow h-64 card rounded-box place-items-center">
                <img className={"h-48"} src={git} alt={Object.keys(git)[0]} />
            </div>
        </div>
    );
}

const educationContent: PropsTimeline[] = [
    {
        title: "ÉTS Montréal",
        href: "ets",
        date: "2023-2025",
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
        bg: "bg-primary",
    },
];

export default function Education() {
    return (
        <div id="education" className={""}>
            <div className={"m-4 lg:m-16"}>
                <h1 className={"title gradEducation grad text-4xl"}>
                    Mon Parcours
                </h1>
            </div>
            <ul className={"flex flex-col gap-4 lg:gap-8 sm:m-8 lg:m-16"}>
                {educationContent.map((item, index) => (
                    <li key={index} className=" lg:mx-20">
                        <Divider {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
