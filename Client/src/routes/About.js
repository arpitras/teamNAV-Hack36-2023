import React from "react";
import { BsNewspaper } from "react-icons/bs";
import MainAnimation from "../Background_effect/animation";
import Footer from "../components/Footer/Footer";
import Abouts from "./Abouts.css";
function About() {
  return (
    <div>
      <div className="about">
        <MainAnimation />
        <meta charSet="UTF-8" />
        <title>Meet-Us</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="Abouts.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <div id="intro" className="py-5">
          <div className="container">
            <div className="row">
              <div className="intro-title">
                <h1 className="title">Meet Our Team</h1>
                <p className="lead name">
                  "Success isn't always about greatness. It's about consistency.
                  Consistent hard work leads to success. Greatness will come." —
                  <strong> Dwayne Johnson </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="member" className="container section">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-head">Members</h2>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="member-post">
                <img
                  className="image"
                  src="https://a-z-animals.com/media/2022/11/shutterstock_1804041961-1024x512.jpg"
                  alt="a"
                  data-aos="fade-left"
                  data-aos-duration={1000}
                />
                <p className="lead name">
                  <strong>Naman Singh</strong>
                </p>
                <div className="social-media">
                  <a
                    href="https://www.linkedin.com/in/namansingh96/"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-linkedin"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/nmn-singh"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-github-square"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/naman.naman.94695/"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-instagram"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                </div>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis, magni!
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="member-post">
                <img
                  className="image"
                  src="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?cs=srgb&dl=pexels-george-desipris-792381.jpg&fm=jpg"
                  alt="b"
                  data-aos="fade-up"
                  data-aos-duration={1000}
                />
                <p className="lead name">
                  <strong>vinayak sharma</strong>
                </p>
                <div className="social-media">
                  <a
                    href="https://www.linkedin.com/in/namansingh96/"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-linkedin"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/nmn-singh"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-github-square"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/naman.naman.94695/"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-instagram"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                </div>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis, magni!
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="member-post">
                <img
                  className="image"
                  src="https://wildlifesos.org/wp-content/uploads/2020/03/Leopard-jiya.jpg"
                  alt="c"
                  data-aos="fade-down"
                  data-aos-duration={1000}
                />
                <p className="lead name">
                  <strong>Arpit Rastogi</strong>
                </p>
                <div className="social-media">
                  <a
                    href="https://www.linkedin.com/in/namansingh96/"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-linkedin"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/nmn-singh"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-github-square"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/naman.naman.94695/"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-instagram"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                </div>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis, magni!
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="member-post">
                <img
                  className="image"
                  src="https://i.pinimg.com/originals/37/89/b2/3789b27772e0517d2d2879e663c33728.jpg"
                  alt="d"
                  data-aos="fade-right"
                  data-aos-duration={1000}
                />
                <p className="lead name">
                  <strong>Manan Arora</strong>
                </p>
                <div className="social-media">
                  <a
                    href="https://www.linkedin.com/in/namansingh96/"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-linkedin"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                  <a
                    href="https://github.com/nmn-singh"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-github-square"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/naman.naman.94695/"
                    target="_blank"
                    className="icon"
                  >
                    <i
                      className="fa fa-instagram"
                      style={{ fontSize: "24px" }}
                    />
                  </a>
                </div>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis, magni!
                </p>
              </div>
            </div>
          </div>
        </div>
         <Footer></Footer>
      
      </div>
    </div>
  );
}

export default About;
