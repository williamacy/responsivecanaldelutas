import React from 'react';
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Founderbanner from "./components/bannerFounder/bannerFounder";
import FounderCarousel from "./components/founder/founder";
import Professorsbanner from './components/bannerProfessors/professorsbanner'
import Bannerphrase from "./components/bannerphrase/bannerphrase";
import Modalities from "./components/modalities/modalities";
import Contact from "./components/contact/contact";
import Location from "./components/location/location";
import Footer from './components/footer/footer';
import Header from "./components/Header/Header";
import Navbar from "./components/navBarMenu/NavBarMenu";
import { Link } from 'react-scroll';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section id="Home">
        <Hero />
      </section>  
      <section id="history">
        <History />
      </section>
      <section id="Founderbanner">
        <Founderbanner />
      </section>
      <section id="FounderCarousel">
        <FounderCarousel />
      </section>
      <section id="Professorsbanner">
        <Professorsbanner />
      </section>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <section id="modalities">
          <Modalities />
        </section>
        <section id="Bannerphrase">
          <Bannerphrase />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="location">
          <Location />
        </section>
      </div>
      {/* <div style={{ height: '500px' }}>
        <Link to="Home" smooth={true} duration={500} offset={-100} style={{ margin: '20px' }}>
        </Link>
        <Link to="history" smooth={true} duration={500} offset={-100} style={{ margin: '20px' }}>
        </Link>
        <Link to="Founderbanner" smooth={true} duration={500} offset={-100} style={{ margin: '20px' }}>
        </Link>
        <Link to="FounderCarousel" smooth={true} duration={500} offset={-100} style={{ margin: '20' }}>
        </Link>
        <Link to="modalities" smooth={true} duration={500} offset={-100} style={{ margin: '20px' }}>
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-100} style={{ margin: '20px' }}>
        </Link>
        <Link to="location" smooth={true} duration={500} offset={-100} style={{ margin: '20px' }}>
        </Link>

      </div> */}
      <Footer />
    </div>
    
  );
}

export default App;
