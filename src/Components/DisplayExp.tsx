import { PropsTimeline } from "./types";

export default function DisplayExp(props: PropsTimeline) {
  return (
    <div id={props.href} className="flex flex-col md:flex-row mx-auto">
      {
          !props.reverse ? (
            <div className="w-1/3 bg-white h-64 m-8">
              <img src={props.img} alt={props.title} className="rounded-2xl w-full" />
            </div>
          ) : null
        }
        <div className="textzone w-1/2">
          <h2 className="title gradEducation grad text-2xl">{props.title}</h2>
          <sub className="text-xl font-black">{props.date}</sub>
          <p className=" flex flex-wrap">{props.description}</p>
        </div>
        {
          props.reverse ? (
            <img src={props.img} alt={props.title} className="h-64 rounded-2xl  m-8" />
          ) : null
        }
    </div>
  );
}
