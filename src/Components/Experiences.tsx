interface PropsBentoGrid {
  grid : number;
  content: JSX.Element[];
}

function BentoGrid(props: PropsBentoGrid) {
  const grid = "grid-rows-"+props.grid;
  return (
    <div className={"grid "+grid+" auto-rows-[76px] gap-4"}>
      {props.content.map((item, index) => (
        <>{item}</>
      ))}
    </div>
  )
}


const Bento : JSX.Element[] = [
  <div className={"rounded-md bg-emerald-800 col-span-3 row-span-3 "}>eh oh</div>,
  <div className={"rounded-md bg-blue-500 col-span-1 row-span-3 "}>là ça va bon</div>,
  <div className={"rounded-md bg-emerald-800 col-span-1 row-span-1 "}>eh oh</div>,
  <div className={"rounded-md bg-emerald-800 col-span-1 row-span-1 "}>eh oh</div>,
  <div className={"rounded-md bg-emerald-800 col-span-1 row-span-1 "}>eh oh</div>,
  <div className={"rounded-md bg-emerald-800 col-span-1 row-span-1 "}>eh oh</div>,
  <div className={"rounded-md bg-emerald-800 col-span-1 row-span-1 "}>eh oh</div>,
  <div className={"rounded-md bg-emerald-800 col-span-1 row-span-1 "}>eh oh</div>,
  <div className={"rounded-md bg-emerald-800 col-span-1 row-span-1 "}>eh oh</div>,
]

export default function Experiences() {
  return (
    <div className={"frame flex-col"}>
      <div className={"my-4 lg:my-16"}>
        <h1 className={"title gradExperience grad text-4xl"}>Mes Expériences</h1>
      </div>
      <BentoGrid grid={4} content={Bento} />

    </div>
  )
}
