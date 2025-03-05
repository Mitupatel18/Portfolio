import { useEffect, useState } from "react";
import { FaArrowUp, FaBars  } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "./Navbar.css"

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [navActive, setNavActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (document.documentElement.scrollTop > 20) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className="scroll-button" style={{ display: isSticky ? "block" : "none" }}>
                <a href="#home"><FaArrowUp /></a>
            </div>
            {/* navgaition menu */}
            <nav className={isSticky ? "sticky" : ""}>
                <div className="navbar">
                <div className="logo"><a href="#">Erdev.</a></div>
                <ul className={`menu ${navActive ? "active" : ""}`}>
                    <li><a href="#home" onClick={() => setNavActive(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setNavActive(false)}>About</a></li>
                    <li><a href="#skills" onClick={() => setNavActive(false)}>Skills</a></li>
                    <li><a href="#projects" onClick={() => setNavActive(false)}>Project</a></li>
                    <li><a href="#contact" onClick={() => setNavActive(false)}>Contact</a></li>
                    {/* <div className="cancel-btn" onClick={() => setNavActive(false)}>
                        <FaTimes />
                    </div> */}
                </ul>

                </div>
                {navActive ? 
                    <div className="cancel-btn" onClick={() => setNavActive(false)}>
                        <FaTimes />
                    </div> :
                    <div className="menu-btn" onClick={() => setNavActive(true)} style={{ opacity: navActive ? 0 : 1, pointerEvents: navActive ? "none" : "auto" }}>
                        <FaBars />
                    </div>
                }
            </nav>
        </>
    );
}

export default Navbar;