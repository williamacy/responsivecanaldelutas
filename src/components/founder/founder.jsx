import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../images/marcos/voinho.png';


import './founder.css'
import leo from '../../images/leothay.png';
import gazzo from '../../images/gazzo2.jpg'
import ogro from '../../images/oGro.png'
import kaiky from '../../images/kaiky.jpg'
import icaro from '../../images/icaro.jpg'


function FounderCarousel() {
  return (
    <><div className="container">
      <h1 className="heading">Professores</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}

        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="innerWidth card">
            <img src={slide_image_1} alt="slide_image" />
            <div className="card-content">
              <h2>Professor Marcos "Voinho" Guimarães</h2>
              <p>Idealizador e Fundador da <br />
                Studio Canal de Lutas <br />
                <hr />
                Professor de Jiu-Jítsu <br />
                <hr />
                Preparador Físico <br />
                <hr />
                Bacharel em <br />
                Educacao Física <br />
                <hr />
                Também formado em <br />
                Medicina Chinesa <br />
                <hr />
                <p>Realiza terapias com agendamento:</p>
                    <ul className='terapias-do-voinho'>
                      <li>Ventosa terapia</li>
                      <li>Acupuntura</li>
                      <li>Eletro acupuntura</li>
                      <li>Massoterapia</li>
                    </ul>
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={leo} alt="slide_image" />
            <div className="card-content">
              <h2>Leo IURY</h2>
              <p>Professor de Muaythay<br />
                Com mais de vinte anos de experiência
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={gazzo} alt="slide_image" />
            <div className="card-content">
              <h2>Leo IURY</h2>
              <p>Idealizador e Fundador da <br />
                Studio Canal de Lutas
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={ogro} alt="slide_image" />
            <div className="card-content">
              <h2>Leo IURY</h2>
              <p>Idealizador e Fundador da <br />
                Studio Canal de Lutas
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={kaiky} alt="slide_image" />
            <div className="card-content">
              <h2>Leo IURY</h2>
              <p>Idealizador e Fundador da <br />
                Studio Canal de Lutas
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={icaro} alt="slide_image" />
            <div className="card-content">
              <h2>Professor Marcos "Voinho" Guimarães</h2>
              <p>Idealizador e Fundador da <br />
                Studio Canal de Lutas <br />
                <hr />
                Professor de Jiu-Jítsu <br />
                <hr />
                Preparador Físico <br />
                sendo Bacharel em <br />
                Educacao Física <br />
                <hr />
                Também formado em <br />
                Medicina Chinesa <br />
                <hr />
                <p>Realiza terapias com agendamento</p>
                    <ul className='terapias-do-voinho'>
                      <li>ventosa terapia</li>
                      <li>acupuntura</li>
                      <li>eletro acupuntura</li>
                      <li>massoterapia</li>
                    </ul>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow swiper-button-white"></div>
          <div className="swiper-button-next slider-arrow swiper-button-white"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </div>
    </>
  );
}

export default FounderCarousel;