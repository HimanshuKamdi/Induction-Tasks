import './Combine.css';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Home() {
    const el = useRef(null);

    useEffect(() => {
      var typed = new Typed(".typing", {
        strings: ["Student","Gamer","Developer", "Designer", "Ethical Hacker","Competitive Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        cursorChar: 'ㅤ' 
      });
  
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <section className="home" id="home">
  <div className="max-width">
    <div className="home-content">
      <div className="text-1">Hello, my name is</div>
      <div className="text-2">Himanshu</div>
      <div className="text-3">
        And I'm a <span className="typing" ref={el}/>
      </div>
    </div>
  </div>
</section>
  );
}

export default Home;
