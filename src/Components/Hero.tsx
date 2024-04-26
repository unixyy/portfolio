import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faGithub,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import pdp from "../assets/pdp.webp";

export default function Hero() {
    const iconSize = "2x";

    return (
        <div
            id={"Hero"}
            className={
                "flex flex-col-reverse justify-around items-center lg:flex-row lg:mx-32 "
            }
        >
            <div className={"flex flex-col  text-titles gap-4 xl:gap-8"}>
                <h1 className={"title gradHero grad text-6xl"}>
                    Richard Martin
                </h1>
                <h2 className={"text-2xl font-medium items-center"}>
                    Hello there ! I'm a
                    <motion.div
                        className={
                            "text-2xl p-2 bg-primary rounded-lg text-white"
                        }
                        animate={{
                            // rotate: 360,
                            scale: [1, 0.95, 1.1, 1],
                            transition: {
                                delay: 2,
                                ease: "easeInOut",
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 1.5,
                            },
                        }}
                    >
                        French Engineering Student
                    </motion.div>
                    at Polytech Montpellier
                </h2>
                <div className={"links"}>
                    <a
                        href={"https://github.com/unixyy"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} size={iconSize} />
                    </a>
                    <a
                        href={"https://discord.com/users/242333879602511875"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faDiscord} size={iconSize} />
                    </a>
                    <a
                        href={"https://twitter.com/unixy_"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faXTwitter} size={iconSize} />
                    </a>
                    <a
                        href={"mailto:richard.martin@polydev.app"}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size={iconSize} />
                    </a>
                </div>
            </div>
            <img
                src={pdp}
                alt="pdp"
                className={"aspect-square w-3/4 lg:w-2/4 rounded-2xl"}
            />
        </div>
    );
}
