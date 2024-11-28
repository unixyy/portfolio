import sass from "../assets/skills/sass.svg";
import html from "../assets/skills/html.svg";
import git from "../assets/skills/git.svg";
import ts from "../assets/skills/ts.svg";
import csharp from "../assets/skills/csharp.svg";
import cpp from "../assets/skills/cpp.svg";
import java from "../assets/skills/java.svg";
import swift from "../assets/skills/swift.svg";
import python from "../assets/skills/python.svg";
import r from "../assets/skills/r.svg";
import postgresql from "../assets/skills/postgresql.svg";
import mongodb from "../assets/skills/mongodb.svg";

import reactimg from "../assets/skills/react.svg";
import vuejs from "../assets/skills/vuejs.svg";
import tailwind from "../assets/skills/tailwind.svg";
import threejs from "../assets/skills/threejs.svg";
import nest from "../assets/skills/nest.svg";
import React from "react";
import { LayoutGroup, motion } from "framer-motion";

type Skill = {
    name: string;
    img: string;
};

interface ListCardSkillsProps {
    skills: Skill[];
    title?: String;
}

function ListCardSkills(props: ListCardSkillsProps) {
    return (
        <div className="flex flex-row gap-8">
            <div className={"flex gap-8"}>
                <h2 className={"uppercase poppins font-black"}>
                    {props.title}
                </h2>
                {props.skills.map((skill) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={"flex flex-col items-center gap-4"}
                    >
                        <img
                            src={skill.img}
                            alt={skill.name}
                            className={"w-24 h-24"}
                        />
                        <p className="font-semibold">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


export default function Skills() {
    const skills: Skill[] = [
        { name: "Sass", img: sass },
        { name: "TypeScript", img: ts },
        { name: "HTML", img: html },
        { name: "C#", img: csharp },
        { name: "Java", img: java },
        { name: "Swift", img: swift },
        { name: "Python", img: python },
    ];

    const dbs: Skill[] = [
        { name: "MongoDB", img: mongodb },
        { name: "PostgreSQL", img: postgresql },
        { name: "MySQL", img: git },
    ];

    const frameworks: Skill[] = [
        { name: "React", img: reactimg },
        { name: "TailwindCSS", img: tailwind },
        { name: ".NET Core", img: nest },
    ];

    const gameEngine: Skill[] = [];

    const tools: Skill[] = [
        { name: "Git", img: git },
        { name: "Docker", img: git },
        { name: "Figma", img: git },
    ];

    return (
        <div id={"skills"} className={"frame flex-col"}>
            <div className={"m-4 lg:m-16"}>
                <h1 className={"title gradSkills grad text-4xl"}>
                    Mes Compétences
                </h1>
            </div>
            <div
                className={
                    "justify-start items-center flex flex-col gap-x-8 gap-y-20"
                }
            >
                <ListCardSkills skills={skills} title={"Langages"} />
                <ListCardSkills skills={frameworks} title={"Frameworks"} />
                <ListCardSkills skills={dbs} title={"Databases"} />
                <ListCardSkills skills={tools} title={"Autres"} />
            </div>
        </div>
    );
}
