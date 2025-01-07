import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Abdulaziz Siddikov</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos obcaecati fugiat veniam provident quibusdam autem rem consectetur est magnam itaque, dolores a suscipit debitis omnis saepe, ipsa assumenda corporis illo?
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/siddikovabdulaziz/"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>

          
        </div>

      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
