
import Hero from "./components/Hero/Hero";
import History from "./components/History/History";
import Founderbanner from "./components/bannerFounder/bannerFounder";
import FounderCarousel from "./components/founder/founder";
import Professorsbanner from './components/bannerProfessors/professorsbanner'
import Bannerphrase from "./components/bannerphrase/bannerphrase";
import Modalities from "./components/modalities/modalities";
import Contact from "./components/contact/contact";
import Location from "./components/location/location";
// import NavigationMenuDemo from "./components/navigation/navbar";

function App (){
  return(
    <div className="App">
      {/* <NavigationMenuDemo /> */}
      <Hero />
      <History />
      <Founderbanner />
      <FounderCarousel />
      <Professorsbanner />
      <Modalities />
      <Bannerphrase />
      <Contact />
      <Location />
    </div>
  );
}

export default App;