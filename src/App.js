import MyApp from './pages';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    gsap.registerPlugin(TextPlugin);
    gsap.to(".lead", {duration: 4,delay:1, text: "Hello Guys nice to meet You, I'm Balya the one who make your website more beutifull"})
  }, []);
  return (
    <div>
     <MyApp />
    </div>
  );
}

export default App;
