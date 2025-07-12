import html from "../../assets/HTML5.png";
import css from "../../assets/CSS3.png";
import js from "../../assets/JS.png";
import react from "../../assets/React.png";
import node from "../../assets/Node.png";
import express from "../../assets/Express.png";
import mongodb from "../../assets/Mongodb.png";
import "./Skills.css"

function Skills() {
    return ( 
        <section className="skills" id="skills">
            <div className="content">
            <div className="title"><span>Skills</span></div>
            <div className="skills-details">
                <div className="box">
                    <img src={html} alt="logo" />
                    <span className="lag">HTML</span>
                </div>
                <div className="box">
                    <img src={css} alt="logo" />
                    <span className="lag">CSS</span>
                </div>
                <div className="box">
                    <img src={js} alt="logo" />
                    <span className="lag">JavScript</span>
                </div>
                <div className="box">
                    <img src={react} alt="logo" />
                    <span className="lag">React Js</span>
                </div>
                <div className="box">
                    <img src={node} alt="logo" />
                    <span className="lag">Node Js</span>
                </div>
                <div className="box">
                    <img src={express} alt="logo" />
                    <span className="lag">Express Js</span>
                </div>
                <div className="box">
                    <img src={mongodb} alt="logo" />
                    <span className="lag">Mongo DB</span>
                </div>
            </div>
            </div>
        </section>
     );
}

export default Skills;