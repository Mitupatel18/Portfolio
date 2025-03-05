import { CiDesktop } from "react-icons/ci";
import "./Projects.css"

function Projects() {
    return ( 
        <section className="projects" id="projects">
            <div className="content">
                <div className="title"><span>Projects</span></div>
                <div className="boxes">
                    <div className="box">
                        <div className="icon">
                            <CiDesktop />
                        </div>
                        <div className="topic">Corporate Website</div>
                        <p>I&apos;ll Designed ,Develop and Deploy a Corporate Website for Ampaliya Chemicals. Features include Navbar, Hero section, About section, Footer, ProductPage. I used React, JSX and CSS.</p><br /><br />
                        <a href="http://ampaliyachemicals.netlify.app/" target="_blank">Live</a>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <CiDesktop />
                        </div>
                        <div className="topic">Shopping Website</div>
                        <p>ElecroMart is an online shopping website For create a College Project. Features include product listing, shopping cart, secure payment gateway, and user profiles. Devloped in React.js, Node.js, Strapi for content management and Stripe for payment gateway.</p><br /><br />
                        <a href="https://github.com/Mitupatel18/EDM-Project" target="_blank">View</a>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <CiDesktop />
                        </div>
                        <div className="topic">Crowdfunding Platform</div>
                        <p> In This Project of I used technology like HTML,CSS and JavaScript and i used API that fetch the user&apos;s request for showing movie by its name and it will show that accroding to database </p><br /><br />
                        <a href="https://github.com/Mitupatel18/Minor-Project" target="_blank">View</a>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default Projects;