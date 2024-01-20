import "./main.css"
import vector from "../../img/vector-1.svg"
import imgButton from "../../img/p.svg"
const Main = () => {
    return (
        <main>
            <section className="ContainerMain">
                <article className="wrapperFigure">
                <figure></figure>
                </article>
                <article className="wrapperArticle">
                    <h2>Hello Buds</h2>
                    <h1 >I am <span >Diego Alfonso</span></h1>
                    <p>FullStack Developer</p>
                    <figure className="wrapperVector">
                        <img src={vector}></img>
                    </figure>
                    <p>Web developer with experience in personal projects using HTML, CSS, JavaScript, React, and MySql. Passionate about continuous learning and staying abreast of the latest trends in web development. Committed to delivering creative and quality solutions, always eager to overcome challenges with enthusiasm and dedication. Ready to collaborate in dynamic teams and contribute to the success of innovative web projects.</p>
                    <div className="wrapperButton">
                        <button>
                            <img src={imgButton}></img>
                            <p>Download CV</p>
                        </button>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Main;