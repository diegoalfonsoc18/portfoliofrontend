import { useState } from "react";
import "./projects.css";

const Projects = () => {
  return (
    <main>
      <section className="mainSection">
        <article className="wrapperTittleProjects">
          <h3>Projects</h3>
        </article>
        <article className="wrapperSlider">
          <div className="containerslider">
            <div className="cardProject"></div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Projects;
