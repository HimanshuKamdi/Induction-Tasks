import './Combine.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  return (
    <section className="contact" id="contact">
  <div className="max-width">
    <h2 className="title" data-aos="slide-down">
      Contact me
    </h2>
    <div className="contact-content">
      <div className="column left" data-aos="fade-right">
        <div className="text">Get in Touch</div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis
          vitae nobis?
        </p>
        <div className="icons">
          <div className="row">
            <i className="fas fa-user" />
            <div className="info">
              <div className="head">Name</div>
              <div className="sub-title">Himanshu Kamdi</div>
            </div>
          </div>
          <div className="row">
            <i className="fas fa-map-marker-alt" />
            <div className="info">
              <div className="head">Address</div>
              <div className="sub-title">Khopoli, Maharashtra</div>
            </div>
          </div>
          <div className="row">
            <i className="fas fa-envelope" />
            <div className="info">
              <div className="head">Email</div>
              <div className="sub-title">himanshukamdi3154@gmail.com</div>
            </div>
            <br />
            <br />
          </div>
          <div className="text">Social Media </div>
          <div className="social">
            <a
              href="https://www.instagram.com/mr_himanshu_kamdi/"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-kamdi-522905223/"
              target="_blank"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://github.com/HimanshuKamdi" target="_blank">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
      <div className="column right" data-aos="fade-left">
        <div className="text">Message me</div>
        <form action="" data-netlify="true">
          <div className="fields">
            <div className="field name">
              <input type="text" placeholder="Name" required="" />
            </div>
            <div className="field email">
              <input type="email" placeholder="Email" required="" />
            </div>
          </div>
          <div className="field">
            <input type="text" placeholder="Subject" required="" />
          </div>
          <div className="field textarea">
            <textarea
              cols={30}
              rows={10}
              placeholder="Message.."
              required=""
              defaultValue={""}
            />
          </div>
          <div className="button-area">
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

  );
}

export default Home;
