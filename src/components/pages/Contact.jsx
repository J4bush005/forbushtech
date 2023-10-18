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
      <Media query="(max-width: 768px)">
        <div className="row mt-3">
          <div className="col">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3 d-flex mt-5">
                <div className="col-12">
                  <label className="form-label topper">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_name"
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex">
                <div className="col-12">
                  <label className="form-label topper">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex">
                <div className="col-12">
                  <label className="form-label topper">Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="user_number"
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex">
                <div className="col-12">
                  <label className="form-label topper">Message:</label>
                  <textarea
                    name="message"
                    className="width d-flex"
                    style={{ width: "335px" }}
                    required
                  />
                  <input type="submit" className="send" value="Send" />
                </div>
              </div>
            </form>
          </div>
          <div className="col">
            <Cubed />
          </div>
        </div>
      </Media>

      <Media query="(min-width: 769px)">
        <div className="row">
          <div className="col-6">
            <Cubed />
          </div>
          <div id="format" className="col-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="row g-3 d-flex mt-5">
                <div className="col-6">
                  <label className="form-label topper">Name:</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    name="user_name"
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex">
                <div className="col-6">
                  <label className="form-label topper">Email:</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    name="user_email"
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex">
                <div className="col-6">
                  <label className="form-label topper">Phone Number:</label>
                  <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    type="tel"
                    className="form-control"
                    name="user_number"
                    required
                  />
                </div>
              </div>
              <div className="row g-3 d-flex">
                <div className="col-6">
                  <label className="form-label topper">Message:</label>
                  <textarea
                    name="message"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <input value="Send" type="submit" className="send" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Media>
    </div>
  );
};

export default Contact;
