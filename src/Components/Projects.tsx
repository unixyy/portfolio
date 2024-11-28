import { PropsTimeline } from "./types";

import git from "../assets/skills/git.svg"

function Divider(props: PropsTimeline) {
  return (
    <div className="flex flex-row">
      <button onClick={() => document.getElementById("my_modal_"+props.href)!.showModal()} className="btn btn-neutral flex items-center justify-center size-96 aspect-square p-8 bg-neutral dark:bg-neutral-200 rounded-box">
        <img className="" src={props.img} alt={props.title} />
      </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={"my_modal_"+props.href} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.title}<hr/>{props.date}</h3>
          <p className="py-4">{props.description}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

const projectsContent: PropsTimeline[] = [
  {
    title: "Projet 1",
    href: "projet1",
    date: "2023-2025",
    img: git,
    description: (
      <>
        Ipsum optio voluptatibus. Est expedita ea. Sed eos eaque nostrum aliquid
        ullam doloribus beatae dolor nostrum. Sequi praesentium eveniet aut aut
        eligendi natus rerum ipsum. Soluta voluptatibus blanditiis cumque
        ratione nulla. Atque nisi minima autem occaecati labore amet accusamus.
        Error molestias nisi impedit <b>rem occaecati</b>. Vero aspernatur aut.
        Ad nulla quisquam. Molestias quam nam quis temporibus cumque quasi
        temporibus doloremque ipsam. Tempora accusantium itaque. Pariatur
        maiores aperiam eaque placeat sit facilis repellendus. Hic doloribus ad.
        Dignissimos dolores quam sint laudantium dicta nemo quas. At quae
        reiciendis beatae.
      </>
    ),
    skills: ["courageous", "smartass", "humble"],
    bg: "bg-primary",
  },
  {
    title: "Projet 2",
    href: "projet2",
    date: "2019-2025",
    img: git,
    description: <>test</>,
    skills: ["courageous", "smartass", "humble"],
    bg: "bg-primary",
  },
];

export default function Projects() {
  return (
    <div id="projects" className={""}>
      <div className={"m-4 lg:m-16"}>
        <h1 className={"title gradProjects grad text-4xl"}>Mes Projets</h1>
        <ul className={"grid grid-cols-2 gap-4 sm:m-8 lg:m-16"}>
        {projectsContent.map((item, index) => (
          <li
            key={index}
            className={
              index % 2 == 0 ? "flex justify-end" : "flex justify-start"
            }
          >
            <Divider {...item} />
          </li>
        ))}
      </ul>
      </div>
    </div>
  )
}
