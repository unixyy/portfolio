interface PropsTimelineBase {
    title: string;
    href: string;
    date: string;
    img: string;
    bg: string;
    index?: number;
    reverse: boolean;
}

interface PropsTimeline extends PropsTimelineBase {
    skills: string[];
    description: JSX.Element;
}

interface PropsTimeLine {
    content: PropsTimelineBase[];
}

export type { PropsTimeline, PropsTimelineBase, PropsTimeLine };
