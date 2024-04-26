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
        <div className={"flex flex-col items-center"}>
            {props.title ? (
                <div className={"flex flex-row text-2xl mb-4 font-black"}>
                    {props.title}
                </div>
            ) : null}
            <div className={"flex flex-col gap-y-4 gap-x-4 lg:gap-x-8 "}>
                {props.skills.map((skill, index) => (
                    <div
                        key={index}
                        className={"flex flex-row gap-2 "}
                    >
                        <img
                            src={skill.img}
                            alt={skill.name}
                            className={"w-8 h-8 lg:w-8 lg:h-8"}
                        />
                        <div className={"text-center font-bold"}>
                            {skill.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Skills() {
    const skills: Skill[] = [
        { name: "HTML", img: html },
        { name: "Sass", img: sass },
        { name: "TypeScript", img: ts },
        { name: "C#", img: csharp },
        { name: "C++", img: cpp },
        { name: "Java", img: java },
        { name: "Swift", img: swift },
        { name: "Python", img: python },
        { name: "R", img: r },
        { name: "Redux", img: "git" },
    ];

    const dbs: Skill[] = [
        { name: "MongoDB", img: mongodb },
        { name: "PostgreSQL", img: postgresql },
        { name: "MySQL", img: git },
    ];

    const frameworks: Skill[] = [
        { name: "React", img: reactimg },
        { name: "VueJS", img: vuejs },
        { name: "Framer", img: git },
        // { name: "Webflow", img: git },
        // { name: "Spline", img: git },
        { name: "TailwindCSS", img: tailwind },
        { name: "ThreeJS", img: threejs },
        { name: "NestJS", img: nest },
    ];

    const environments: Skill[] = [
        { name: "Macos", img: git },
        { name: "Linux", img: git },
        { name: "Windows", img: git },
    ];

    const gameEngine: Skill[] = [];

    const tools: Skill[] = [
        { name: "Git", img: git },
        { name: "Docker", img: git },
        // {name: "VSCode", img: git},
        // {name: "IntelliJ", img: git},
        // {name: "UML", img: git},
        { name: "Postman", img: git },
        { name: "Figma", img: git },
        { name: "Unity", img: git },
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
                    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center mx-4 lg:mx-32"
                }
            >
                <ListCardSkills skills={skills} title={"Langages"} />
                <ListCardSkills skills={frameworks} title={"Frameworks"} />
                <ListCardSkills skills={dbs} title={"Databases"} />
                <ListCardSkills skills={environments} title={"OS"} />
                <ListCardSkills skills={tools} title={"Autres"} />
            </div>
        </div>
    );
}
