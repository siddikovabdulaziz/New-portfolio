import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              // href="https://www.linkedin.com/in/shreyas-g-khakal/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <a
              href="https://github.com/siddikovabdulaziz/"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <a
              href="https://www.instagram.com/siddikov__o7o"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="email" />
            </a>
            <a href="tel:+998 90 555 41 47" target="_blank" rel="noreferrer">
              <FaTelegram className="phone" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>siddikovabdulaziz9@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <FaTelegram className="phone" />
              </span>
              <span>
                <p>+998 90 555 41 47</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
