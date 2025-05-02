import "./Education.css"

function Education() {
    return (
        <section className="education" id="education">
            <div className="content">
                <div className="title"><span>Education</span></div>
                <div className="education-item">
                    <h3>Silver Oak University  <p className="a">Ahmedabad</p>  </h3>
                    <p className="education-details">B.TECH - IT</p>
                    <p className="education-details">2021 - 2025</p>
                    <p className="education-description">  Currently Pursuing Bechlor degree At Silver Oak University.</p>
                </div>
                
                <div className="education-item">
                    <h3>Vidyasabha Sankul  <p className="a">Amreli</p> </h3>
                    <p className="education-details">HSC Board</p>
                    <p className="education-details">2020 - 2021</p>
                    <p className="education-description"> Complete My Higher Education with secure 59.76% in 12th Board Exam.</p>
                </div>
                
                <div className="education-item">
                    <h3>Apollo Internationl School  <p className="a">Visavadar</p></h3>
                    <p className="education-details">SSC Board</p>
                    <p className="education-details">2019 - 2020</p>
                    <p className="education-description"> Complete My Secondary Education with secure 71.89% in 10th Board Exam.</p>
                </div>
            </div>
        </section>
     );
}

export default Education;