/**
 * This is a React component for a website footer that displays the names of the developers and their
 * GitHub links.
 * @returns The Footer component is being returned, which contains a footer element with a paragraph
 * containing copyright information and links to the GitHub profiles of James Riddle, Dezarea Bryan,
 * and Gary Merriman.
 */
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-txt">
        <p>
          Copyright &copy;
          <a href="https://github.com/jamescr757" target="_blank">
            James Riddle
          </a>
          <a href="https://github.com/DezSays" target="_blank">
            Dezarea Bryan
          </a>
          <a href="https://github.com/gm61091" target="_blank">
            Gary Merriman
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
