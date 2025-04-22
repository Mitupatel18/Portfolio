import "./About.css"
import pic from "../../assets/mit.jpg"
import resume from "../../assets/Resume__Mit_amipara.pdf"

function About() {
    return ( 
        <section className="about" id="about">
            <div className="content">
            <div className="title"><span>About Me</span></div>
            <div className="about-details">
                <div className="left">
                <img src={pic} alt="" />
                </div>
                <div className="right">
                <div className="topic">Technical Summery</div>
                <p>
                    Hello! I&apos;m Mit Amipara, a passionate fresh developer with a deep love for
                    developing skills.

                    My goal is to becomes a good skilled developer Through my diverse experiences,
                    I am constantly exploring new technologies and trends to
                    ensure that my work remains innovative and impactful.

                </p>
                <div className="button">
                    <a href={resume} target="_blank">Resume</a>
                </div>
                </div>
            </div>
            </div>
        </section>
     );
}

export default About;