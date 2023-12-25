import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = (props) => {
  return (  
    <>
      <div className={props.className} id="contactme">
        <a href="https://www.github.com/utsavmeh" target="_blank"><FaGithub color="white"/></a>
        <a href="https://www.instagram.com/mehrotra_utsav/" target="_blank"><FaInstagram color="white"/></a>
        <a href="https://in.linkedin.com/in/utsavmeh" target="_blank"><FaLinkedin color="white"/></a>
        <a href="mailto:utsav23mehrotra@gmail.com" target="_blank"><BiLogoGmail color="white"/></a>
        <a href="https://wa.me/9140727830" target="_blank"><FaWhatsapp color="white"/></a>
      </div>
      {/* <a href="https://www.buymeacoffee.com/utsavmeh"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="150" alt="utsavmeh" /></a> */}
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
