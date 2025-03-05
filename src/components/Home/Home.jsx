import Banner from "../../assets/banner.png"
import { FaSquareGithub, FaLinkedin, FaSquareWhatsapp, FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./Home.css"

function Home() {
    return ( 
        <section className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <div className="text-one">Hello,</div>
                    <div className="text-two">I&apos;m Mit Amipara</div>
                    <div className="text-three">Frontend Devloper</div>
                    <div className="button">
                        <a style={{'--color-':'#000000'}} href="https://github.com/Mitupatel18" target="_blank"><FaSquareGithub /></a>
                        <a style={{'--color-':'#0077b5'}} href="https://www.linkedin.com/in/mit-amipara-8235852a5" target="_blank"><FaLinkedin /></a>
                        <a style={{'--color-':'#25D366'}} href="https://wa.me/+919586872132" target="_blank"><FaSquareWhatsapp /></a>
                        <a style={{'--color-':'#008000'}} href="tel:+919586872132" target="_blank"><FaSquarePhone /></a>
                        <a style={{'--color-':'#C5221F'}} href="mailto:amiparameet1123@gmail.com" target="_blank"><MdEmail /></a>
                    </div>
                </div>
                <div className="banner">
                    <img src={Banner} alt="banner" />
                </div>
            </div>
        </section>
     );
}

export default Home;