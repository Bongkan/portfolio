import './App.css'
import React from 'react';
import backgroundImg from './assets/panoramic-view-sunset-night.jpg';

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-400"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <nav className="fixed top-0 left-0 z-50 m-2">
        <div className="mt-2 text-center">
          <img id="ufo-logo" src="./assets/ufo-flying-svgrepo-com.svg" alt="ufo-logo" className="w-12" />
        </div>
        <ul className="mt-1 space-y-1">
          <li className="border-b border-white/50 p-1">
            <a href="#profile" className="text-white no-underline hover:bg-white/10 hover:rounded-full">Contact</a>
          </li>
          <li className="border-b border-white/50 p-1">
            <a href="#data" className="text-white no-underline hover:bg-white/10 hover:rounded-full">Profile</a>
          </li>
        </ul>
      </nav>
      <main className="flex flex-row w-full">
        <section id="profile" className="flex-1 p-4">
          <div className="profile-container">
            <img className="w-48 mt-0 rounded-2xl shadow-lg" src="./assets/Croped.jpg" alt="Portrait" />
          </div>
          <div className="info-details mt-4">
            <div className="name-city">
              <h1 className="text-white text-4xl">BONGKAN JUJAI</h1>
              <p className="locat text-white">Lamphun, Thailand</p>
            </div>
            <div className="contact mt-4 space-y-2">
              <h4>
                <a href="mailto:Bongkan.jj@gmail.com" className="text-white">Bongkan.jj@gmail.com</a>
              </h4>
              <h4><a href="tel:0949151489" className="text-white">Tel. +66 876604146</a></h4>
              <div className="flex space-x-2">
                <a target="_blank" href="https://www.facebook.com/Nanosweet159/">
                  <img className="w-6" src="./assets/icons8-facebook.svg" alt="Facebook" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/bongkan-jujai">
                  <img className="w-6" src="./assets/icons8-linked-in.svg" alt="Linkedin" />
                </a>
                <a target="_blank" href="https://github.com/Bongkan">
                  <img className="w-6" src="./assets/icons8-github.svg" alt="Github" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="data" className="flex-2 p-4">
          <h4 className="intro italic">" Former engineer into a new journey "</h4>
          <div className="edu mt-4">
            <h2 className="text-white text-2xl">Education</h2>
            <p>2017 – 2021</p>
            <p>Chiang Mai University</p>
            <p className="occ">Bachelor of Mechanical Engineering, International Program</p>
          </div>
          <div className="exp mt-4">
            <h2 className="text-white text-2xl">Experience</h2>
            <p>October, 2021 – August, 2022</p>
            <p>SVI Public Company Limited, Pathum Thani</p>
            <p className="occ">Graduate Engineer</p>
          </div>
          <div className="ski mt-4">
            <h2 className="text-white text-2xl">Skills</h2>
            <ul className="occ list-disc ml-5">
              <li>TOEIC score: 965</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="proj mt-4">
            <h2 className="text-white text-2xl">Projects</h2>
            <a href="#" className="block text-white">Project 1</a>
            <a href="#" className="block text-white">Project 2</a>
            <a href="#" className="block text-white">Project 3</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
