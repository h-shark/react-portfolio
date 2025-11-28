import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/h-shark" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
