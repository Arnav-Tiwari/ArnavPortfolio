import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagenav from "../Nav/Pagenav";
import "./About.scss";
import { gsap } from "gsap";
import file from "../../Resume/ArnavResume.pdf"
const navData = [{ work: "Home" }];
const About = () => {
  const doAnimate = () => {
    const tl = gsap.timeline();
    tl.to(".about-overlay", {
      bottom: "100%",
      duration: 1,
      ease: "expo.in",
    }).to(".header", {
      y: 0,
      duration: 1,
      ease: "expo.inOut",
    });
  };

  useEffect(() => {
    doAnimate();
  }, []);
  return (
    <div className="about">
      <Pagenav navData={navData} color={"#1a1919"} />
      <div className="about-overlay"></div>
      <div className="about-wrapper">
        <div className="section-left">
          <div className="header-mask">
            <h1 className="header">About</h1>
          </div>
          <div className="description-mask">
            <p className="title">
              I'm Arnav. A web developer and problem solver.
              <br />
            </p>
            <br />
            <p>
              I have been practising algorithmic problem solving on various
              online platforms, primarily Leetcode, Hackerrank, and Codeforce,
              since my college years. I have a great understanding of data
              structures and Algorithms and have also solved a significant
              number of problems on Leetcode and other platforms. I am in the
              top 7% on Leetcode with a rating of 1789.
            </p>
            <br />
            <p>
              My development experience includes the requisite exposure to both
              Frontend and Backend technologies. All of the projects that I have
              worked on are included here.
            </p>
            <br />
            <p>
              In Frontend I have worked on React (the Javascript library),
              having knowledge of hooks, Context, state management using Redux,
              as well as practising advanced animations using GSAP. I am also
              versed in HTML, CSS and SASS (advanced CSS).
            </p>
            <br />
            <span className="title">
              Sometimes it is the people who no one imagines anything of who do
              the things that no one can imagine.
            </span>
            <br />
            <br />
            <p>
              In the backend, I have worked on Spring Boot for developing REST
              APIs. I have also worked on a stand-alone Spring MVC project in my
              internship in which the frontend part of the application was
              managed with Thymeleaf following the proper MVC model with the
              creation of Controller, Services and DAO layers.
            </p>
            <br />
            <p>
              I also often write discussion articles related to problem solving
              on Leetcode and post small projects related to development on
              Codepen.
            </p>
            <span className="header">
              <br />
              Experience
            </span>
            <p className="exp">SDE Internship @HEALTHKART</p>
            <p className="exp">Intership @WIPRO TALENTNEXT</p>
            <p className="exp">Internship @IBM SKILLSBUILD</p>
            <br />
            <br />
            <br />
            <span className="header">Skills</span>
            <br />
            <br />
            <p className="skills">
              React / Spring Boot / Core Java / Javascript / Thymeleaf / Data
              Structures / Algorithms <br /> / Problem Solving/ MongoDB / SQL /
              SASS / CSS / HTML5
            </p>
            <br />
            <br />
          </div>
          <div className="work-button-container">
            <a href={file} className="work-button" download>
              My CV
            </a>
          </div>
          <div className="description-mask">
            <br />
            <br />
            <br />
            <span className="header">KUDOS</span>
            <br />
            <br />
            <p>
              Most of what my portfolio contains are the endeavours that I have
              worked on during this recent year of college.{" "}
              <span className="work-status">
                I am open to exploring new opportunities and working with
                companies
              </span>
              . Feel free to contact me. THANK YOU.
            </p>
            <br />
            <br />
          </div>
          <div className="work-button-container">
            <Link to="/contact" className="work-button">
              Contact me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
