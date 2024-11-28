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
            id={"hero"}
            className={
                "flex flex-col-reverse justify-center items-center lg:flex-row mx-auto h-screen"
            }
        >
            <div className={"flex flex-col justify-center items-center text-titles gap-4 xl:gap-8"}>
                <h1 className={"title gradHero grad text-8xl"}>
                    Richard Martin
                </h1>
                <h2 className={"text-2xl font-medium items-center"}>
                    Hello there !
            
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
                        I'm a UI/UX Designer in the making
                    </motion.div>
                    at ETS Montréal & Polytech Montpellier
                </h2>
            </div>
        </div>
    );
}
