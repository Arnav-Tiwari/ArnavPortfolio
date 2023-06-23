import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagenav from "../Nav/Pagenav";
import "./About.scss";
import { gsap } from "gsap";
const navData = [{ work: "Home" }];
const About = () => {
  const doAnimate = () => {
    const tl = gsap.timeline();
    tl.to(".about-overlay", {
      bottom: "100%",
      duration: 1,
      ease: "expo.in",
    })
    .to(".header",{
      y:0,
      duration:1,
      ease:"expo.inOut"
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              quam sed praesentium. Quod quos soluta hic ea, commodi fugiat esse
              accusamus quibusdam possimus beatae placeat explicabo,
              exercitationem dolores laboriosam cum.
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
              error nobis animi ipsum dolorem minus commodi quidem nostrum
              aperiam debitis vitae, accusamus dicta asperiores quia? Aperiam
              quidem deserunt quasi sed.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              eaque, consequatur tempora cum dolorem qui atque doloribus quidem
              quam perferendis, commodi laboriosam, praesentium ipsa cupiditate
              adipisci debitis asperiores! Repellat, omnis?
            </p>
            <br />
            <span className="title">
              There is nothing so useless as doing efficiently that which should
              not be done at all.
            </span>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur est impedit dignissimos sed a tempore, id amet dolor
              delectus aperiam ullam perspiciatis, maxime minima distinctio
              quasi magnam voluptatum corporis hic!
            </p>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
              quo maxime tempora distinctio incidunt dolorum! Excepturi, sequi?
              Sequi aliquam, nesciunt cum a unde officia fuga. Voluptatum
              temporibus quo cupiditate dignissimos!
            </p>
            <br />
            <span className="header">
              <br />
              Experience
            </span>
            <p className="exp">this is experience</p>
            <p className="exp">this is experience</p>
            <p className="exp">this is experience</p>
            <p className="exp">this is experience</p>
            <p className="exp">this is experience</p>
            <br />
            <br />
            <br />
            <span className="header">Skills</span>
            <br />
            <br />
            <p className="skills">
              UI/UX Design / Strategy / Product Management / User Research /
              Agile Methodologies / Collaboration / Design Sprints / Design
              Systems / HTML and CSS / CMS Design & Architecture / Webflow
              Development / Framer Development / Photography / Graphic Design ‍
            </p>
            <br />
            <br />
          </div>
          <div className="work-button-container">
            <Link to="/somewhere" className="work-button">
              My CV
            </Link>
          </div>
          <div className="description-mask">
            <br />
            <br />
            <br />
            <span className="header">KUDOS</span>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo
              fugit cum ipsam, modi id minus a rerum amet corporis cumque neque
              quasi dolores. Sed architecto consectetur numquam quas laborum!
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae aut eveniet id fugit neque quos totam consequuntur
              alias obcaecati deserunt eos iste vel perspiciatis numquam cum,
              velit facilis, culpa doloribus?
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
