import { useState } from "react";

import "./main.css";
import vector from "../../img/vector-1.svg";
import imgButton from "../../img/p.svg";
import form from "../../img/form.svg";
import diego from "../../img/DiegoDev.png";
import linkedin from "../../icon/icons8-linkedin.svg";
import discord from "../../icon/discord.png";
import github from "../../icon/github (1).png";

const Main = () => {
  return (
    <main className="WrapperMain">
      <section className="ContainerMain">
        <div className="ContainerMainAll">
          <article className="wrapperFigure">
            <figure className="figureWrapper">
              <div className="wrapperForm">
                <img className="imgForm" src={form}></img>
              </div>
              <div className="wrapperImgDev">
                <img className="imgDev" src={diego}></img>
              </div>
            </figure>
            <div className="socialIcon">
              <p>Find Me On</p>
              <div className="containerSocial">
                <a
                  href="https://www.linkedin.com/in/diego-alfonso-castillo/"
                  target="_blanck">
                  <img src={linkedin} alt="" />
                </a>
              </div>
              <div className="containerSocial">
                <a
                  href="discord.com/channels/984941402783895642"
                  target="_blanck">
                  <img src={discord} alt="icon discord" />
                </a>
              </div>

              <div className="containerSocial">
                <a href="https://github.com/diegoalfonsoc18" target="_blanck">
                  <img src={github} alt="" />
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
              <img src={vector}></img>
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
            <div className="wrapperButton">
              <button>
                <img src={imgButton}></img>
                <p>Download CV</p>
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Main;
