import React from "react";

import "../css/layout.css";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Navigation />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
