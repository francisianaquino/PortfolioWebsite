import React from "react";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Experiences from "./components/Experiences";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Logocloud from "./components/Logocloud";
import Features from "./components/Features";
import Footer from "./components/Footer";
import MetaTags from 'react-meta-tags';

export default function App() {
  return (
    // <main className="text-gray-400 bg-dark-gray body-font">
    //   <Navbar />
    //   <About />
    //   <Projects />
    //   <Skills />
    //   <Experiences />
    //   <Contact />
    // </main>
    <div className="wrapper">
      <MetaTags>
        <title>Francis Ian Aquino</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </MetaTags>
      <div className="content">
        <main className="">
          <Header />
          <Hero />
          <Blog />
          <Logocloud />
          <Features />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>

  );
}