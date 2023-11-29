interface PropsBentoGrid {
  content: JSX.Element[];
}

function BentoGrid(props: PropsBentoGrid) {
  return (
    <div className={"grid grid-cols-12 auto-rows-[76px] gap-4"}>
      {props.content.map((item, index) => (
        <>{item}</>
      ))}
    </div>
  )
}


const Bento : JSX.Element[] = [
  <div className={"rounded-md bg-emerald-800 col-span-2 row-span-4 "}>eh oh</div>,
  <div className={"rounded-md bg-emerald-800 col-span-8 row-span-4 "}>eh oh</div>,
  <div className={"rounded-md bg-emerald-800 col-span-2 row-span-2 "}>eh oh</div>,
  <div className={"rounded-md bg-blue-500 col-span-2 row-span-2 "}>là ça va bon</div>,
]

export default function Experiences() {
  return (
    <div className={"frame flex-col"}>
      <div className={"my-4 lg:my-16"}>
        <h1 className={"title gradExperience grad text-4xl"}>Mes Expériences</h1>
      </div>
      <BentoGrid content={Bento} />

    </div>
  )
}
