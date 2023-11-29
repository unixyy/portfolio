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

import reactimg from "../assets/technos/react.svg";
import vuejs from "../assets/technos/vuejs.svg";
import tailwind from "../assets/technos/tailwind.svg";
import threejs from "../assets/technos/threejs.svg";
import nest from "../assets/technos/nest.svg";


type Skill = {
  name: string;
  img: string;
}

interface ListCardSkillsProps {
  skills: Skill[]
}

function ListCardSkills(props: ListCardSkillsProps) {
  return (
    <div
      className={"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-4 lg:gap-y-16 gap-x-4 lg:gap-x-8 mx-4 sm:mx-8 lg:mx-16 "}>
      {props.skills.map((skill, index) => (
        <div key={index} className={"card card-bordered items-center"}>
          <figure className={"w-24 h-24 sm:w-36 sm:h-36 aspect-square"}><img src={skill.img} alt={skill.name} className={" w-16 h-16 sm:w-24 sm:h-24 aspect-square justify-center items-center"}/>
          </figure>
          <div className={"card-body"}>
            <div className={"card-title items-center justify-center"}>{skill.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {

  const skills: Skill[] = [
    {name: "HTML", img: html},
    {name: "Sass", img: sass},
    {name: "Git", img: git},
    {name: "TypeScript", img: ts},
    {name: "C#", img: csharp},
    {name: "C++", img: cpp},
    {name: "Java", img: java},
    {name: "Swift", img: swift},
    {name: "Python", img: python},
    {name: "R", img: r},
    {name: "PostgreSQL", img: postgresql},
    {name: "MongoDB", img: mongodb},
    ]

  const frameworks: Skill[] = [
    {name: "React",img: reactimg},
    {name: "VueJS",img: vuejs},
    {name: "TailwindCSS",img: tailwind},
    {name: "ThreeJS",img: threejs},
    {name: "NestJS",img: nest},
    ]




  return (
    <div className={"frame flex-col"}>
      <div className={"my-4 lg:my-16"}>
        <h1 className={"title gradSkills grad text-4xl"}>Mes Compétences</h1>
      </div>
      <div className={"text-2xl mb-4 lg:mb-16"}>Languages</div>
      <ListCardSkills skills={skills}/>
      <div className={"text-2xl my-4 lg:mb-16"}>Frameworks & Librairies</div>
      <ListCardSkills skills={frameworks}/>
    </div>
  )
}
