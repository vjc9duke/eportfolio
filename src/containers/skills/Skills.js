import React, {useContext} from "react";
import "./Skills.scss";
import {
  ProgLang,
  Technology,
  Software,
  HandsOn
} from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000} fraction="0.1">
          <div className="skills-image-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
            {skillsSection.skills.map((skills, i) => {
              return (
                <p
                  key={i}
                  className={
                    isDark
                      ? "dark-mode subTitle skills-text"
                      : "subTitle skills-text"
                  }
                >
                  {skills}
                </p>
              );
            })}
          </div>
        </Fade>
        <Fade right duration={1000} fraction="0.1">
          <div className="skills-text-div">
            <p
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
              id="skills-languages"
            >
              {"Languages"}
            </p>
            <ProgLang />
            <p
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
              id="skills-technologies"
            >
              {"Technologies"}
            </p>
            <Technology />
            <p
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
              id="skills-applications"
            >
              {"Applications"}
            </p>
            <Software />
            <p
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
              id="skills-hands-on"
            >
              {"Hands-on"}
            </p>
            <HandsOn />
          </div>
        </Fade>
      </div>
      <div id="popup" className={isDark ? "popup-dark" : "popup-light"}>
        Scroll down for more
      </div>
    </div>
  );
}
