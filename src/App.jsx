import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/nav";
import Profile from "./components/profileCard";
import DataSection from "./components/data";
import backgroundImage from "./assets/panoramic-view-sunset-night.jpg";

const App = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setActiveSection("Home");
      } else {
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
      className="bg-cover bg-center text-white"
    >
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex flex-col md:flex-row w-full">
        <Profile />
        <DataSection
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </main>
    </div>
  );
};

export default App;
