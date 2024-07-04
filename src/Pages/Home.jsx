import React, { useRef, useEffect, useState } from "react";
import "./Home.css";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Footer from "./component/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../assets/LOGO SUXD.svg";
import { useSpring, animated, useTrail } from "react-spring";
import { animateScroll as scroll } from "react-scroll";
import svg1 from "../assets/amana-logo 1.svg";
import svg2 from "../assets/image 1.svg";
import svg3 from "../assets/Screenshot-2024-05-27-120051-removebg-preview 1.svg";
import svg4 from "../assets/Screenshot-2024-05-27-145138-removebg-preview 1.svg";
import svg5 from "../assets/logoemen 1.svg";
import svg6 from "../assets/usherlogo-removebg-preview 1.svg";
import work from "../assets/Amanathobe.svg";
import work2 from "../assets/Codeedex.svg";
import work3 from "../assets/MRgo.svg";
import work4 from "../assets/Slb.svg";
import work5 from "../assets/Usher.svg";
import work6 from "../assets/Scrap.svg";

function Home() {
  console.log("Home component rendered"); // Log to see if the component renders
  const skills = [
    { name: "Design Thinking" },
    { name: "Double Diamond" },
    { name: "HCD" },
    { name: "Figma" },
    { name: "Adobe XD" },
    { name: "Sketch" },
    { name: "Miro" },
    { name: "Photoshop" },
    { name: "Trello" },
    { name: "UI Design" },
    { name: "Wireframing" },
    { name: "UX Design" },
    { name: "Prototyping" },
    { name: "Empathize" },
    { name: "User Research" },
    { name: "HTML" },
    { name: "CSS" },
  ];
  const works = [
    {
      id: 1,
      title: "Amanathobe.com",
      image: work,
      year: "2023",
      link: "https://amanathobe.com",
      style: "work-item-1",
    },
    {
      id: 2,
      title: "slb.com",
      image: work4,
      year: "2024",
      link: "https://slb.com",
      style: "work-item-2",
    },
    {
      id: 3,
      title: "codeedextechnologies.com",
      image: work2,
      year: "2024",
      link: "https://codeedextechnologies.com",
      style: "work-item-3",
    },
    {
      id: 4,
      title: "Velo Scraps",
      image: work6,
      year: "2024",
      link: "https://www.behance.net/sarangkalarik",
      style: "work-item-4",
    },
    {
      id: 5,
      title: "Usheracademia.com",
      image: work5,
      year: "2024",
      link: "https://usheracademia.in/",
      style: "work-item-5",
    },
    {
      id: 6,
      title: "Mrgo.in",
      image: work3,
      year: "2023",
      link: "https://www.behance.net/sarangkalarik",
      style: "work-item-6",
    },
  ];

  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutAnimation = useSpring({
    opacity: aboutVisible ? 1 : 0,
    transform: aboutVisible ? "translateY(0px)" : "translateY(50px)",
    config: { tension: 120, friction: 14 },
  });
  const svgs = [svg1, svg2, svg3, svg4, svg5, svg6];
  const [bgColor, setBgColor] = useState("#F4F4F4");
  const trailConfig = { mass: 5, tension: 400, friction: 40 }; // Adjust tension and friction values

  const imagesEndRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const worksContainer = worksRef.current;
      const worksTitle = document.querySelector('.works-title');
      const imagesEnd = imagesEndRef.current;
  
      if (worksContainer && imagesEnd && worksTitle) {
        const worksRect = worksContainer.getBoundingClientRect();
        const imagesEndRect = imagesEnd.getBoundingClientRect();
        const threshold = window.innerHeight * 0.95; // Further increased threshold value
  
        // Check if works section is sufficiently within viewport or partially visible
        if (
          worksRect.top <= window.innerHeight - threshold &&
          worksRect.bottom >= threshold &&
          imagesEndRect.top > 0
        ) {
          worksTitle.style.opacity = 1; // Show works title
        } else {
          worksTitle.style.opacity = 0; // Hide works title
        }
      }
    };
  
    // Initially hide the works title
    if (document.querySelector('.works-title')) {
      document.querySelector('.works-title').style.opacity = 0;
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set initial state
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  
  
  
  

  const trail = useTrail(skills.length, {
    from: {
      opacity: 0,
      transform: "translateY(-50px) scale(0.8)",
      color: "#ccc",
    },
    to: {
      opacity: aboutVisible ? 1 : 0,
      transform: aboutVisible
        ? "translateY(0px) scale(1)"
        : "translateY(-50px) scale(0.8)",
      color: aboutVisible ? "#000" : "#ccc",
    },
    config: trailConfig, // Use the modified trailConfig
    delay: 500,
  });

  const worksTrail = useTrail(works.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: {
      opacity: aboutVisible ? 1 : 0,
      transform: aboutVisible ? "translateY(0px)" : "translateY(20px)",
    },
    config: trailConfig,
    delay: 500, // Delay between each animation
  });
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const handleScroll = (event) => {
    if (leftColumnRef.current && rightColumnRef.current) {
      rightColumnRef.current.scrollTop = event.target.scrollTop;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutOffset = aboutRef.current.offsetTop;
      const currentScroll = window.pageYOffset + window.innerHeight / 2;

      if (currentScroll >= aboutOffset) {
        setAboutVisible(true);
      } else {
        setAboutVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    scroll.scrollTo(ref.current.offsetTop, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 50, // Very fast fade speed
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // Enable fade transition
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 100, // Fast autoplay speed
  };

  useEffect(() => {
    const handleScroll = () => {
      const worksOffset = worksRef.current.offsetTop;
      const contactOffset = contactRef.current.offsetTop;
      const currentScroll = window.pageYOffset + window.innerHeight / 2;

      if (currentScroll >= worksOffset && currentScroll < contactOffset) {
        setBgColor("#000");
      } else {
        setBgColor("#F4F4F4");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="section-transition"
      style={{
        overflow: "hidden",
        backgroundColor: bgColor,
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <Row className="mt-5 ms-">
        <Col md={1}> </Col>
        <Col md={1}>
          <img className="logo" src={logo} alt="" />{" "}
        </Col>
        <Col md={3}> </Col>
        <Col md={3}>
          <Navbar style={{height:'40px',borderRadius:'7px'}} collapseOnSelect className="nav">
            <Container style={{marginLeft:'-8px'}}>
              <Nav>
                <Nav.Link
                  onClick={() => scrollToSection(aboutRef)}
                  className="ms- navitems"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection(worksRef)}
                  className="ms-4 navitems"
                >
                  Works
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection(contactRef)}
                  className="ms-4 navitems"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
        <Col md={2}> </Col>
        <Col md={2}>
          {" "}
          <Button
            className="cwtbutton"
            type="button"
            variant="contained"
            onClick={() =>
              window.open(
                `${process.env.PUBLIC_URL}/Sarang UIUX Designer.pdf`,
                "_blank"
              )
            }
          >
            Download CV
          </Button>
        </Col>
      </Row>

      {/* Main content */}
      <div className="mt-5">
        <h5 className="firsthead ">“LET’S CREATE YOUR SUCCESS TOGETHER”</h5>
        <h1 className="mainhead" id="sarang">
          Sarang.UsereXperienceDesign.com
        </h1>
        <p className="headabout ">
          Hey There! I'm <b>Sarang</b>, a Process based UI/UX Designer who loves
          creating amazing digital stuff. Hailing from Kerala, India's own
          paradise with its stunning sceneries. I mix my culture with my tech
          skills to make cool designs, With a passion for meticulous research
          and an eye for detail, I strive to make every interaction a delightful
          journey for users.
        </p>
        <center>
          <button
            className="hirebutton "
            type="button"
            variant="contained"
            onClick={() =>
              window.open("https://wa.me/+916282116181?text=Hi", "_blank")
            }
          >
            Can We Talk?
          </button>
        </center>
      </div>

      {/* Main image carousel */}
      <div
        className="carousel-container "
        style={{ pointerEvents: "none" }}
      >
        <Slider {...settings}>
          <div>
            <img
              className="mainimg"
              src="https://i.postimg.cc/D06dDSLn/Property-1-Default.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mainimg"
              src="https://i.postimg.cc/VLcxhPGt/Property-1-Variant2.png"
              alt=""
            />
          </div>
          <div>
            <img  id="imj"
              clasName="mainimg"
              src="https://i.postimg.cc/hv85nhyd/Property-1-Variant3.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mainimg"
              src="https://i.postimg.cc/Mp3rqCDd/Property-1-Variant4.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mainimg"
              src="https://i.postimg.cc/R0jsnw2t/Property-1-Variant5.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mainimg"
              src="https://i.postimg.cc/4xyBL8gt/Property-1-Variant7.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mainimg"
              src="https://i.postimg.cc/zBrwr79x/Property-1-Variant6.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="mainimg"
              src="https://i.postimg.cc/y83032Kf/Property-1-Variant9.png"
              alt=""
            />
          </div>
        </Slider>
        <div className="logoz-container">
          <img
            className="logoz"
            src="https://i.postimg.cc/vmRtgtZ4/LOGO.png"
            alt="logo"
          />
        </div>
      </div>

      {/* About section */}
      <animated.div style={aboutAnimation}>
        <div ref={aboutRef}>
          <div className="line-container ms-5 ">
            <div className="line ms-2" style={{ backgroundColor: "black",marginTop:'-16px' }} />
            <p id="nvb" className="abouthead ms-2">
              Just about me
            </p>
          </div>
          <div className="App" id="aboutt">
            <Row className=" about-section">
              <Col md={1}></Col>
              <Col md={7} className="about-text">
  <p>
    I'm Sarang, and I come from the beautiful land of Kerala, also known as "God's own country". I've always been passionate about design, which led me to pursue a career in UI/UX Design. I started by diving deep into the world of BCA (Bachelor of Computer Applications), where I learned the technical aspects of software and applications. But my true calling was in design, where I could blend creativity with technology to create amazing user experiences.
  </p>
  <p>
    After completing my degree, I wanted to learn more about making apps, so I studied something called Flutter Full stack Development. But then, I had some health issues that made it hard for me to keep going with it. Later on, I joined{" "}
    <a className="custom-link" href="https://www.nsid.in/">
      NSID
    </a>{" "}
    to learn more about designing cool things on computers, especially under some very smart teachers from NID NIFT.
  </p>
  <p>
    I also got to work at{" "}
    <a className="custom-link" href="https://in.linkedin.com/company/qubex-technologies">
      Quebex Technologies
    </a>
    , where I learned a lot as a UI/UX Design intern. At the same time, I was also a part-time product designer at{" "}
    <a className="custom-link" href="https://codeedextechnologies.com/">
      Coodeedex Technologies
    </a>
    . It's been quite a journey, and I'm excited to see where it takes me next! Oh, and don't forget, I also sing in the{" "}
    <a className="custom-link" href="https://www.instagram.com/nakara_music_band/">
      NAKARA Music Band
    </a>
    .
  </p>
</Col>
              <Col md={3} className="about-image-container">
                <div className="about-image">
                  <img
                    className="sarimage"
                    src="https://i.postimg.cc/YSBcvXj6/About-Session.png"
                    alt="About Me"
                  />
                </div>
              </Col>
              <Col md={1}></Col>
            </Row>
          </div>
        </div>
      </animated.div>

      {/* Do's and Don'ts */}
      <Row id="dos">
        <Col md={1}></Col>
        <Col md={5}>
          <p
            id="nvb"
            className=""
            style={{ fontWeight: "400", fontSize: "32px" }}
          >
            Do's
          </p>
          <div
            className="mkm"
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              width: "100%",
              height: "75%",
              padding: "20px",
               borderRadius:'7px'
            }}
          >
            <ul id="nvb" style={{ fontSize: "16px", textAlign: "justify" }}>
              <li>
                I'm excited about design methods like Double Diamond, HCD and
                Design Thinking—I find joy in every step of the process
              </li>
              <br />
              <li>
                I use tools like Figma, XD, Photoshop, and Spline to create
                websites and apps that are both visually appealing and easy to
                use. Making sure they work smoothly and look great is my
                priority
              </li>
              <br />
              <li>
                I enjoy digging into what users need and what the business wants
                to achieve, so we can meet everyone's goals
              </li>
            </ul>
          </div>
        </Col>
        <Col md={5}>
          <p
            id="nvb"
            className=""
            style={{ fontWeight: "400", fontSize: "32px" }}
          >
            Don'ts
          </p>
          <div
            className="mkm"
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
              width: "100%",
              height: "75%",
              padding: "20px",
              borderRadius:'7px'
            }}
          >
            <ul id="nvb" style={{ fontSize: "16px", textAlign: "justify" }}>
              <li>
                I'm a bit hesitant to rush into projects to meet deadlines
                because I believe good work Needs tim
              </li>
              <br />
              <li>
                Starting a project without study, without clear ideas, or only
                with a name and logo will degrade its quality, thus I'm not
                interested in doing that.
              </li>
              <br />
              <li>Also, I value originality and high-quality work</li>
            </ul>
          </div>
        </Col>
      </Row>

      {/* Skills section */}
      <div className="mkmk">
        <div className="line-container ms-5 ">
          <div style={{ backgroundColor: "black",marginTop:'-16px' }} className="line ms-2" />
          <p id="nvb" className="abouthead ms-2" style={{ fontSize: "32px" }}>
            Skills
          </p>
        </div>
        <div className="App">
          <div className="skills-container">
            <div className="skills-grid">
              {trail.map((props, index) => (
                <animated.div
                  id="nvb"
                  key={skills[index].name}
                  className="skill-item"
                  style={props}
                >
                  <div>{skills[index].name}</div>
                </animated.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Works section */}
      <div className="mkmk" ref={worksRef} style={{ padding: "50px 0", backgroundColor: "black", marginTop: '-16px' }}>
      <div className="works-container">
        <div className="works-left-column" style={{ alignItems: 'center' }}>
          <p id="nvb" style={{ whiteSpace: "nowrap" }} className="works-title">
            Works I have done <br />
            <span style={{ fontSize: "16px", display: 'block', padding: '10px 0' }}>
              I made Creative Designs, that create a lasting impact on brands.
            </span>
          </p>
          <br />
        </div>

        <div className="works-right-column">
          <div className="works-no-scrollable">
            {worksTrail.map((animation, index) => (
              <animated.div key={index} style={animation} className={`work-item ${works[index].style}`}>
                <a
                  style={{ textDecoration: "none", color: "black", whiteSpace: "nowrap" }}
                  href={works[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Row>
                    <Col>
                      <p className="work-title" id="nvb" style={{  textDecoration: "none" }}>
                        {works[index].title}
                      </p>
                    </Col>
                    <Col>
                      <p className="work-year" id="nvb" style={{  textDecoration: "none" }}>
                        {works[index].year}
                      </p>
                    </Col>
                  </Row>
                  <div  className={`work-image work-image-${index + 1}`}>
                    <img id="wimg" src={works[index].image} alt={works[index].title} />
                  </div>
                </a>
              </animated.div>
            ))}
          </div>
          <div ref={imagesEndRef}></div> {/* Reference for the end of images */}
        </div>
      </div>

      <p id="nvb" style={{ fontSize: '16px', marginLeft: '6%', color: 'white', marginTop: '10%' }}>
        Partner with us to bring your vision to life with designs that resonate and deliver
      </p>
      <div className="svg-scroll-container">
        {svgs.map((svg, index) => (
          <img
            key={index}
            src={svg}
            alt={`SVG ${index}`}
            className="svg-item"
          />
        ))}
      </div>
    </div>



      {/* Contact section */}
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
