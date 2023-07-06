import './Combine.css';
import img from '../assests/images/main-img.jpg';
import cv from '../assests/Resume.pdf';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function About() {
    const el = useRef(null);

    useEffect(() => {
      var typed = new Typed(el.current, {
        strings: ["Student","Gamer","Developer", "Designer", "Ethical Hacker","Competitive Programmer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true, 
        
      });
        
      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <>
  <section className="about" id="about">
    <div className="max-width">
      <h2 className="title" data-aos="slide-down">
        About me
      </h2>
      <div className="about-content">
        <div className="column left" data-aos="fade-right">
          <img src={img} alt="me" />
          <img src="./assests/images/main-img dark.png" alt="me" />
        </div>
        <div className="column right" data-aos="fade-left">
          <div className="text">
            I'm Himanshu and I'm a <span className="typing-2" ref={el}/>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut
            voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam
            voluptatem nisi delectus. Facere explicabo hic minus accusamus alias
            fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam
            possimus veritatis, placeat, ab molestiae velit inventore
            exercitationem consequuntur blanditiis omnis beatae. Dolor iste
            excepturi ratione soluta quas culpa voluptatum repudiandae harum
            non.
          </p>
          {/* <Link to="../assests/HIMANSHU's Resume.pdf" target="_blank" download>Download CV</Link> */}
          <a href={cv} download="HIMANSHU's Resume">
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="education">
    <div className="max-width">
      <h2 className="title" data-aos="slide-down">
        My Education
      </h2>
      <div className="content">
        <h1>
          <center style={{ color: "white" }}>My Educational Journey</center>
        </h1>
      </div>
      <div className="timeline">
        <div className="container left">
          <p>
            <i className="fa fa-code-fork" aria-hidden="true" />
          </p>
          <div className="content">
            <h2>Carmel Convent School</h2>
            <span>SSC</span>
            <p>
              <i className="fa fa-calendar" /> 2009-2019
            </p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Reliance Foundation School</h2>
            <span>HSC</span>
            <p>
              <i className="fa fa-calendar" /> 2019-2022
            </p>
          </div>
        </div>
        <div className="container left">
          <div className="content">
            <h2>COEP</h2>
            <span>B.Tech Computer Engineering</span>
            <p>
              <i className="fa fa-calendar" /> 2021-Present
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  );
}

export default About;
