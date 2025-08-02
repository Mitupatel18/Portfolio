import { useState } from "react";
import "./Contact.css";
import Swal from 'sweetalert2'

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        const nameRegex = /^[A-Za-z\s]{5,}$/;
        if (!nameRegex.test(formData.name)) {
            errors.name = "Enter valid Name(more then 5 latters)";
            isValid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "Enter valid email address.";
            isValid = false;
        }

        if (formData.message.length < 10) {
            errors.message = "Message is very short.";
            isValid = false;
        }

        setErrors(errors);
        !isValid ? setIsSubmit(true) : setIsSubmit(false);
        return isValid;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        validateForm();
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmit(true);

        if (!validateForm()) {
            Swal.fire({
                icon: "error",
                title: "Failed...",
                text: "Please enter valid details...",
            });
            return;
        }
        try {
            
            const formData = new FormData(event.target);
            
            formData.append("access_key", "3df8c26d-1e8b-4ad5-ab99-71cee00f7174");
            
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
        
            const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
            }).then((res) => res.json());
            
            if (res.success) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thank you!",
                    text: "Message send successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                });

                setFormData({ name: "", email: "", message: "" });
                setErrors({});
                setIsSubmit(false);

                event.target.reset();

            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed...",
                    text: "Something went wrong!, Try again...",
                });
                setIsSubmit(false);
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
            console.log(error);
            setIsSubmit(false);
        }
    };


    return ( 
        <section id="contact" className="contact">
            <div className="container">
            <h2 className="title"><span>Get in toch</span></h2>
            <form id="contact-form" onSubmit={onSubmit}>
                <input type="hidden" name="from_name" value="My Portfolio" />
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your fullname" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange}  />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Write a message..." value={formData.message} onChange={handleChange} required></textarea>
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                
                <br /><br />
                {!isSubmit && <button type="submit" className="btn" >Send Message</button>}
            </form>
            </div>
        </section>
     );
}

export default Contact;