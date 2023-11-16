import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import pdp from "../assets/pdp.webp";

export default function FirstFrame() {
  const iconSize = "2x"
  return (
    <div className={"frame"}>
        <div className={"flex flex-col text-titles gap-4 xl:gap-8"}>
          <h1 className={"title text-6xl"}>Richard Martin</h1>
          <h2 className={"subtitle"}>Hello there ! I'm a <span className={"subtitle-colored"}>French Engineering Student</span> at Polytech Montpellier</h2>
          <div className={"links"}>
            <a href={"https://github.com/unixyy"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size={iconSize} /></a>
            <a href={"https://discord.com/users/242333879602511875"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faDiscord} size={iconSize} /></a>
            <a href={"https://twitter.com/unixy_"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size={iconSize} /></a>
            <a href={"mailto:richard.martin@polydev.app"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} size={iconSize} /></a>
          </div>
      </div>
      <img src={pdp} alt="pdp" className={"pdp"} />
    </div>
  )
}
