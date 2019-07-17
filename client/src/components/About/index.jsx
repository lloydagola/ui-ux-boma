import React from "react";
import WOW from "wowjs";
import "./About.css";
import modern_highrise from "../../img/montave2.jpg";

class About extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="about">
        <div>
          <div
            className="about-image wow fadeInDown"
            data-wow-iteration="1"
            data-wow-delay=".5s"
            data-wow-duration=".6s"
          >
            <img
              src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80"
              alt=""
            />
          </div>
        </div>
        <div
          className="about-text dark-grey  heavy-shadow  wow fadeInUp"
          data-wow-iteration="1"
          data-wow-delay=".5s"
          data-wow-duration=".6s"
        >
          <p>by van gend</p>
          <div className="horizontal-line" />
          <h1 className="font-76">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            vel.
          </p>
        </div>
      </section>
    );
  }
}

export default About;
