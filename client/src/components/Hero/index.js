import React from "react";
import "./Hero.css";

const Hero = props => (
  <section className="hero">
    <p className="font-36">Lorem ipsum</p>
    <div className="hero-image-overlay" />
    <img src={props.url} />
    <div className="hero-jumbotron  heavy-shadow" />
    <h1>Lorem ipsum</h1>
  </section>
);

export default Hero;
