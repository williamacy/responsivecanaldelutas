import React from 'react'
import logo from '../../images/studioCanalDeLutas.png';
import './Hero.css';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
import whatsapp from '../../images/whatsapp.png';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="flexCenter paddings innerWidth hero-container">

            <div className="flexColStart hero-left">
                <div className="flexCenter hero-title">
                <h1 style={{ 
                        backgroundColor: "white", 
                        color: "black",
                        borderRadius: "2rem",
                        padding: "1rem"
                    }}>
                Studio
                Canal Lutas
                </h1>
            </div>
                {/* o flexColStart que esta sendo chamado na div 
                pode ser encontrado no index.css */}
                {/* <div className="flexColStart hero-description">
                    <span>
                        Venha treinar na melhor academia de artes marciais da cidade.
                    </span>
                </div> */}

                <div class="flexCenter hero-icons">
                    <a href="https://www.instagram.com/studiocanal_lutas/"><img src={instagram} alt="Instagram Icon" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100054377416959"><img src={facebook} alt="Facebook Icon" /></a>
                    <a href="https://api.whatsapp.com/send?phone=5571996137828"><img src={whatsapp} alt="WhatsApp Icon" /></a>
                </div>
            </div>

            {/* o flexCenter sendo chamado aqui
            vai pegar as propriedades ja definidas 
            la no index.css */}
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero