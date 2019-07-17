import React from "react";
import WOW from "wowjs";
import "./Welcome.css";
import modern_highrise from "../../img/montave2.jpg";

class Welcome extends React.Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <section className="welcome">
        <div
          className="welcome-image heavy-shadow wow fadeInDown"
          data-wow-iteration="1"
          data-wow-delay=".5s"
          data-wow-duration=".6s"
        >
          <div className="welcome-area-widget">
            <p>PLINTH AREA</p>
            <h1>4500</h1>
          </div>
          <img
            src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
        <div
          className="welcome-text  wow fadeInUp"
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

          <div className="welcome-summary-widget heavy-shadow">
            <div className="welcome-summary-infographic-left">
              <div class="welcome-summary-infographic-item">
                <i className="font-36 fas fa-bed" />
                <h1 className="font-76">05</h1>
                <p>Bedrooms</p>
              </div>
              <div className="vertical-line" />
              <div class="welcome-summary-infographic-item">
                <i className="font-36 fas fa-bath" />
                <h1 className="font-76">05</h1>
                <p>Bathrooms</p>
              </div>
            </div>
            <div className="welcome-summary-infographic-right">
              <p>Prefer a site visit?</p>
              <div id="details-btn" className="flat-button-white">
                BOOK A VISIT
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
