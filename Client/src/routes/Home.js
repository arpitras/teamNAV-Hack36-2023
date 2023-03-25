import React from "react";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import "../components/HomeStyles.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import "../components/StyleAutoTyping.css";
import "../components/Navbar.css";
import "../components/Navbar.css";
import "../components/Navbar.css";
import DailyTracker from "../DailyTracker";
import Chat from "../components/Chat"
function Home() {
  return (
    <div className="home">
      {/* <DailyTracker></DailyTracker> */}
      <Projects />
      <div class="container con1">
        <div className="auto-text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                "In the sense of dislike ? ",
                "In the sense of enmity ?",
                "In the sense of bitterness ?",
              ],
            }}
          />
        </div>
      </div>
      <div className="container con2">
        <div className="row">
          <div className="col-5">
            <img
              src="https://ih1.redbubble.net/image.4754313567.1243/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
              alt="ye img hai"
              data-aos="fade-right"
              className="image-depressed"
            />
          </div>
          <div className="col-7">
            <p className="para">
              “Post corona pandemic, there has been an influx of online
              education in our traditional education system. Due to online
              eductaion there has been an increase in the no of mental health
              issues primarily Depression and Anxiety amongst the younglings
              preparing for competitve examinations like JEE and NEET. To
              confront this we at Team Nav give free 1:1 mentorship to any
              student. So far we have mentored 1400 + students in their JEE
              prep. Our team consists of college students who have aced these
              examinations and our goal is to increase the no of quality
              engineers and doctors. <br />
              GET our free mentorship today!”
            </p>
            <button
              type="button"
              className="btn btn-success btnForDepressed btn1"
            >
              <Link to="./Appform" className="quiz">
                expert curated quiz
              </Link>
            </button>
            <a href="http://localhost:3030/joinmeet" className="btn btn-success btnForDepressed btn"  role="button">Join Room</a>
            {/* <button
              type="button"
              className="btn btn-success btnForDepressed btn"
            >
              Join Room
            </button> */}
            {/* <a href="http://localhost:3030/createNew" className="btn btn-success btnForDepressed btn" role="button">
            Create Room</a>
            <button
              type="button"
              className="btn btn-success btnForDepressed btn56"
            >
              Create Room
            </button> */}
          </div>
        </div>
      </div>

      <li>
       
        <Link to="./Appform" className="quiz">
          Get expert curated quiz here
        </Link>
      </li>
      <Footer></Footer>
    </div>
  );
}

export default Home;
