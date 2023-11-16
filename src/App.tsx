import FirstFrame from "./Components/FirstFrame";
import Skills from "./Components/Skills";
import {useEffect, useRef} from "react";


function App() {
  const iconSize = "2x"

  // const myBlob : HTMLElement = document.createElement("div");
  // myBlob.style.overflow = "hidden";
  // const myBlur : HTMLElement = document.createElement("div");
  // myBlob.style.overflow = "hidden";
  //
  // useEffect(() => {
  //   myBlob.id = "blob";
  //   document.getElementById("app")!.appendChild(myBlob);
  //   // myBlur.id = "blur";
  //   // document.body.appendChild(myBlur);
  //
  // }, [])
  //
  // window.onpointermove = event => {
  //   const pageX = event.pageX;
  //   const pageY = event.pageY;
  //
  //   myBlob?.animate({
  //     left: `${ pageX}px`,
  //     top: `${ pageY}px`
  //   }, { duration: 3000, fill: "forwards" });
  //
  //   // myBlur?.animate({
  //   //   left: `${ pageX}px`,
  //   //   top: `${ pageY}px`
  //   // }, { duration: 3000, fill: "forwards" });
  //
  // }

  return (
    <div id="app" className="App">
        <FirstFrame />
        <Skills />
    </div>
  )
}

export default App
