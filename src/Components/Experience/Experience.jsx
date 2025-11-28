import React from "react";
import "./experience.css";


const Experience = () => {
  const frontEndSkills = [
    "React",
    "JQeury",
    "Tailwind",
    "Bootstrap",
    "JavaScript",
    "Angular",
  ];
  const experience = [
    "Experienced",
    "Experienced",
    "Intermediate",
    "Intermediate",
    "Experienced",
    "Experienced",
  ];

  // End of frontend skills section
  const backEndSkills = ["Golang", "Python", "Node JS", "Java", "MySQL", "MongoDB"];

  return (
    <section id="experience">
      <h5>What experience do I have</h5>
      <h2>My experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndSkills.map((skill, i) => (
              <article className="experience__details" key={i}>
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{experience[i]}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {/* Mapping out all the elements to display in a single card */}
            {backEndSkills.map((skill, i) => (
              <article className="experience__details" key={i}>
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{experience[i]}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
