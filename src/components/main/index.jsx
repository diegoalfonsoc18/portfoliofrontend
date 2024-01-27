import React from "react";
import "./main.css";
import vector from "../../img/vector-1.svg";
import imgButton from "../../img/p.svg";
import form from "../../img/form.svg";
import diego from "../../img/DiegoDev.png";
import linkedin from "../../icon/icons8-linkedin.svg";
import discord from "../../icon/discord.png";
import github from "../../icon/github (1).png";

const Main = () => {
  const cvPath = "/files/CV_DiegoLeonelAlfonso_EN.pdf";

  return (
    <main className="WrapperMain">
      <section className="ContainerMain">
        <div className="ContainerMainAll">
          <article className="wrapperFigure">
            <figure className="figureWrapper">
              <div className="wrapperForm">
                <img className="imgForm" src={form} alt="Form Image" />
              </div>
              <div className="wrapperImgDev">
                <img className="imgDev" src={diego} alt="Diego Image" />
              </div>
            </figure>
            <div className="socialIcon">
              <p>Find Me On</p>
              <div className="containerSocial">
                <a
                  href="https://www.linkedin.com/in/diego-alfonso-castillo/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn Icon" />
                </a>
              </div>
              <div className="containerSocial">
                <a
                  href="https://discord.com/channels/984941402783895642"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={discord} alt="Discord Icon" />
                </a>
              </div>
              <div className="containerSocial">
                <a
                  href="https://github.com/diegoalfonsoc18"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img src={github} alt="GitHub Icon" />
                </a>
              </div>
            </div>
          </article>
          <article className="wrapperArticle">
            <div className="divH2">
              <h2>Hello Buds</h2>
            </div>
            <div className="divH1">
              <h1>
                I am <span>Diego Alfonso</span>
              </h1>
            </div>
            <div className="divP">
              <p>FullStack Developer</p>
            </div>
            <figure className="wrapperVector">
              <img src={vector} alt="Vector Image" />
            </figure>
            <p>
              Web developer with experience in personal projects using HTML,
              CSS, JavaScript, React, and MySql. Passionate about continuous
              learning and staying abreast of the latest trends in web
              development. Committed to delivering creative and quality
              solutions, always eager to overcome challenges with enthusiasm and
              dedication. Ready to collaborate in dynamic teams and contribute
              to the success of innovative web projects.
            </p>
            <a
              href={cvPath}
              className="wrapperButton"
              target="_blanck"
              download="CV_DiegoLeonelAlfonso_EN.pdf">
              <button>
                <img src={imgButton} alt="Download Icon" />
                <p>Download CV</p>
              </button>
            </a>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Main;
