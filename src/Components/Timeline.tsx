import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { PropsTimelineBase, PropsTimeLine } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TimeLine(props: PropsTimeLine) {
    return (
        <ul className="timeline timeline-vertical lg:timeline-horizontal lg:flex-row-reverse">
            {props.content.map((item, index) => (
                <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    img={item.img}
                    href={item.href}
                    index={index}
                    bg="bg-primary"
                />
            ))}
        </ul>
    );
}

function TimelineItem(props: PropsTimelineBase) {
    return (
        <li>
            <hr className="bg-primary" />
            <div className="timeline-start flex flex-col items-center gap-y-2">
                {props.index != 0 ? null : (
                    <div className="indicator-item badge badge-accent">new</div>
                )}
                {props.date}
            </div>
            <div className="timeline-middle">
                <div className="">
                    <div className="rounded-full">
                        <FontAwesomeIcon
                            icon={faCircle}
                            className="text-secondary"
                        />
                    </div>
                </div>
            </div>
            <div className="timeline-end">
                <a href={"#" + props.href} className={"btn btn-primary"}>
                    {props.title}
                </a>
            </div>
            <hr className="bg-primary" />
        </li>
    );
}

export { TimeLine, TimelineItem };
