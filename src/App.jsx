import "./App.css";
import React from "react";
import Nav from "./components/nav";
import Profile from "./components/profileCard";
import DataSection from "./components/data";
import backgroundImage from "./assets/panoramic-view-sunset-night.jpg";

const App = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="bg-cover bg-center text-white"
    >
      <Nav />
      <main className="flex flex-col md:flex-row w-full">
        <Profile />
        <DataSection />
      </main>
    </div>
  );
};

export default App;
