import { TimeLine } from "./Timeline";
import { PropsTimeline } from "./types";

import ets from "../assets/Education/ets_logo_noir.png";
import polytech from "../assets/Education/polytech_logo.svg";
import DisplayExp from "./DisplayExp";

const educationContent: PropsTimeline[] = [
  {
    title: "ÉTS Montréal",
    href: "ets",
    date: "2023-2025",
    img: ets,
    description: (
      <>
        J'ai intégré l'École de Technologie Supérieure de Montréal en tant qu'étudiant de <b>Maitrise</b> en <b>Génie Logiciel</b>.
      </>
    ),
    skills: ["courageous", "smartass", "humble"],
    bg: "bg-white",
    reverse: true,
  },
  {
    title: "Polytech Montpellier",
    href: "polytech",
    date: "2019-2025",
    img: polytech,
    description: <>test</>,
    skills: ["courageous", "smartass", "humble"],
    bg: "bg-white",
    reverse: true,
  },
];

export default function Education() {
  return (
    <div id="education" className={""}>
      <div className={"m-4 lg:m-16"}>
        <h1 className={"title gradEducation grad text-4xl"}>Mon Parcours</h1>
      </div>
      <ul className={"flex flex-col gap-4 lg:gap-8 sm:m-8 xl:m-16"}>
        {educationContent.map((item, index) => (
          <li
            key={index}
            className="lg:mx-20"
          >
            <DisplayExp {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
