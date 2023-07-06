import './Combine.css';

function Skill() {
// var containerHeight = (window).height() / 2;

// ('.spacer').css("height", containerHeight);

// var x = ('.skills').prev().height() / 4;
// console.log('x')

// (window).scroll(function() {
//   if ((window).scrollTop() >= x) {
//     ('.skill-percent').each(function() {
//       (this).animate({
//         width: (this).data('percent') + '%'
//       }, 3000);
//     });
//   }
// });


  return (
    <section className="skills" id="skills">
    <div className="max-width">
      <h2 className="title" data-aos="slide-down">
        My skills
      </h2>
      <div className="skills-content">
        <div className="column left" data-aos="fade-right">
          <div className="text">My creative skills &amp; experiences.</div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            cumque ullam eveniet iste, quasi iure nesciunt illo vitae! Qui minus
            consequuntur ratione, expedita nulla assumenda sint. Velit ea
            repellendus molestias, suscipit earum amet, soluta quos ipsum aut
            nostrum voluptatum, porro est? Recusandae assumenda officia maxime cum
            voluptas, fugiat amet accusamus rem illum fuga. Possimus fugit culpa
            minus in nostrum fuga!
          </p>
          <a href="#">Read more</a>
        </div>
        {/* <div className="column right" data-aos="fade-left">
          <dt>
            HTML <span> 90% </span>
          </dt>
          <dd className="skill-percent html" data-percent={90} />
          <dt>
            CSS <span> 85% </span>
          </dt>
          <dd className="skill-percent css" data-percent={85} />
          <dt>
            Javascript <span> 50% </span>
          </dt>
          <dd className="skill-percent javascript" data-percent={50} />
          <dt>
            Python <span> 70% </span>
          </dt>
          <dd className="skill-percent python" data-percent={70} />
          <dt>
            C++ <span> 40% </span>
          </dt>
          <dd className="skill-percent c++" data-percent={40} />
          <dt>
            SQL <span> 60% </span>
          </dt>
          <dd className="skill-percent sql" data-percent={60} />
        </div> */}
        <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>80%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>50%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>40%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>60%</span>
                        </div>
                        <div class="line mysql "></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>Python</span>
                            <span>70%</span>
                        </div>
                        <div class="line py"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>C++</span>
                            <span>30%</span>
                        </div>
                        <div class="line c"></div>
                    </div>
                </div>

      </div>
    </div>
  </section>
  
  );
}

export default Skill;
