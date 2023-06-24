import React, { useContext, useEffect } from "react";
import work_data from "./workdata.js";
import "./Work.scss";
import Pagenav from "../Nav/Pagenav.js";
import gsap from "gsap";
import { Link } from "react-router-dom";
import WorkContext from "../Context/WorkContext.js";
const navData = [{ work: "Home" }];
const Work = () => {
  const doAnimate = () => {
    const tl = gsap.timeline();
    tl.to(".work-overlay", {
      bottom: "100%",
      duration: 1.2,
      ease: "expo.inOut",
    })
      .to(".header-mask-para", { y: 0, duration: 0.1, ease: "power2.out" }, 0.9)
      .to(
        ".description-mask-para",
        {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        0.9
      )
      .to(
        ".work-list-item",
        {
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.7,
        },
        0.8
      );
  };
  const { setWorkId } = useContext(WorkContext);
  const { getData } = useContext(WorkContext);
  useEffect(() => {
    doAnimate();
    getData();
  }, []);
  return (
    <div className="work">
      <Pagenav navData={navData} color="white" />
      <div className="work-overlay"></div>
      <div className="work-wrapper">
        <div className="section-left">
          <div className="header-mask">
            <p className="header-mask-para"> work </p>
            {/* work */}
          </div>
          <div className="description-mask">
            <p className="description-mask-para">
              This showcases the variety of projects related to frontend and
              backend development that I have worked on in recent years.
            </p>
          </div>
          <div className="description-mask">
            <p className="description-mask-para">
              My significant time was also given to problem solving on various
              platforms with the aim of improving my problem solving skills in
              data structures and algorithms.
            </p>
          </div>
        </div>
        <div className="section-right">
          {/* {JSON.stringify(work_data)} */}
          {Object.entries(work_data).map(([key, desp]) => {
            console.log(desp);
            const { name, shortDescription,description } = desp;
            console.log("NAME", name);
            console.log("DESCRIPTION", description);
            return (
              <>
                <div key={key} className="work-list-item">
                  <Link
                    to="/workDisplay"
                    onClick={() => {
                      setWorkId(name);
                    }}
                  >
                    <h1 className="work-list-header">{name}</h1>
                  </Link>
                  <p className="work-list-para">{shortDescription}</p>
                </div>
                {/* <p>{JSON.stringify(desp)}</p> */}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
