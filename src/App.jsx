import "./App.css";
import React, { useState, useEffect } from "react";
// import Nav from "./components/nav";
import Profile from "./components/profileCard";
import DataSection from "./components/data";
import backgroundImage from "./assets/panoramic-view-sunset-night.jpg";
import Nav2 from "./components/Nav2";

const App = () => {
  const [activeSection, setActiveSection] = useState("");
  const [profileDesktop, setProfileDesktop] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setProfileDesktop("False");
        setActiveSection("Home");
      } else {
        setProfileDesktop("True");
        setActiveSection("About");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center text-white flex"
    >
      <Nav2 activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex flex-col md:flex-row w-full">
        {profileDesktop === "True" && <Profile />}
        <DataSection
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </main>
    </div>
  );
};

export default App;
