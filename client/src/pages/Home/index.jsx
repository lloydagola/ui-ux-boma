import React from "react";
import Welcome from "../../components/Welcome";
import About from "../../components/About";
import Slogan from "../../components/Slogan";
import Boma from "../../components/Boma";
import Hero from "../../components/Hero";
import Team from "../../components/Team";

const Home = () => (
  <>
    <Welcome />
    <About />
    <Slogan />
    <Hero url="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?cs=srgb&dl=architectural-design-architecture-clouds-1732414.jpg&fm=jpg" />
    <Hero url="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?cs=srgb&dl=apartment-clean-condominium-279719.jpg&fm=jpg" />
    <Hero url="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80" />
    <Boma />
    <Hero url="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    <Hero url="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
    <Hero url="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
    <Team/>
  </>
);

export default Home;
