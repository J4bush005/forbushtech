import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Cubed from "../Shapes/Cubed";
import Media from "react-media";

const Contact = ({ addTask }) => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ggoftfp",
        "template_p6ykl53",
        form.current,
        "Xo5Ogclq3NzvJmthw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
          alert("Your Message Has Been Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container-fluid">
        <div className="">
          <div id="format" className="col">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3 d-flex mt-5 justify-content-center">
                <div className="col-6">
                  <label className="form-label topper">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex justify-content-center">
                <div className="col-6">
                  <label className="form-label topper">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex justify-content-center">
                <div className="col-6">
                  <label className="form-label topper">Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="user_number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex justify-content-center">
                <div className="col-6">
                  <label className="form-label ">Message:</label>
                  <textarea
                    name="message"
                    className="width d-flex justify-content-center"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <input type="submit" className="send" value="Send" />
                </div>
              </div>
            </form>
          </div>
        </div>
  
    </div>
  );
};

export default Contact;
