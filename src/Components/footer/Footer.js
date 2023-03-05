import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

function Footer() {
  return (
    <footer>
      {/* Heading */}
      <a href="#" className="footer_logo">
        Shubham
      </a>

      {/* Links */}
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contacts</a>
        </li>
      </ul>

      {/* ? FOoter Soicals */}
      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer_copyright">
        <small>&copy; Shubham Verma. All Rights Reserved</small>
      </div>
    </footer>
  );
}

export default Footer;
