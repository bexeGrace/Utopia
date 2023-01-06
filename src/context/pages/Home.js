import React, { useContext } from "react";
import Rooms from "../components/Rooms";
import HeroSlider from "../components/HeroSlider";
import Contact from "../components/Contact";
import About from "../components/About";
import { RoomContext } from "../RoomContext";

const Home = () => {
  const { loggedIn } = useContext(RoomContext);
  return (
    <>
      <HeroSlider />
      {loggedIn && <Rooms />}
      <About />
      <Contact />
    </>
  );
};

export default Home;
