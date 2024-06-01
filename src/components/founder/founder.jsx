import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../../images/marcos/voinho.png';



import './founder.css'
import leo from '../../images/leothay.jpg';
import gazzo from '../../images/gazzo2.jpg'
// import ogro from '../../images/oGro.png'
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
              {/* <h2>Professor Marcos "Voinho" Guimarães</h2> */}
              <p>
                Sou Marcos Guimarães, mais conhecido como Voinho. 
                Sou sócio-proprietário e idealizador do Studio Canal Lutas. 
                Graduado em Educação Física, sou também faixa preta de 
                Jiu Jitsu 4º grau. Ministro aulas da arte suave há muitos anos. 
                Atleta de Jiu Jitsu e já competi também no MMA. Gosto de ensinar 
                tanto turmas de adultos quanto de crianças, onde de maneira 
                lúdica consigo passar muitos ensinamentos e técnicas. 
                Também sou preparador físico e especialista em reabilitações 
                de lesões de atletas com formação em Medicina Chinesa, onde 
                utilizo técnicas de eletroacupuntura, liberação miofascial, 
                ventosaterapia e moxaterapia.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={leo} alt="slide_image" />
            <div className="card-content">
              {/* <h2>Leo IURY</h2> */}
              <p>Sou Kru Muay Leo Iury Prajied Velho e Ouro ,35 anos de MuayThai Tradicional ,23 anos de ensino na arte das 8 armas, Campeão Baiano de MuayThai e Ex Diretor da FMTTB (Federação de MuayThai Tradicional da Bahia ) faixa Preta de Kickboxing , Cordão Verde e Amarelo de Capoeira Motumbaxé ,Árbitro Federado e Faixa Roxa de Jiu Jitsu , Líder e Representante da Equipe de MuayThai Bangkok Camp no Brasil , Responsável pelos treinamentos da Equipe de competição,Coach Fight Particular e Salva Vidas por vocação.
              </p>
            </div>
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className="innerWidth card">
            <img src={kaiky} alt="slide_image" />
            <div className="card-content">
              {/* <h2>Leo IURY</h2> */}
              <p>Prazer me chamo Kaiky.
                Praticante de MuayThai desde os 15 anos de idade.. 
                tenho um cartel como atleta de 10 lutas.
                Fui Campeão Baiano de Muay Thai no ano de 2015 , e como 
                professor venho coordenando treinos desde de 2012 pela equipe 
                OuroThai, filiado a FBMTT ( Federação Baiana de MuayThai Tradicional)
                 continuo o estudo da arte com camps e seminários de acordo com normas
                  da CBMTT (Confederação Brasileira de MuayThai Tradicional), 
                  buscando sempre aperfeiçoar minha técnica e trazer mais didática e 
                  conhecimento pros alunos !! 
                  
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={gazzo} alt="slide_image" />
            <div className="card-content">
              {/* <h2>Leo IURY</h2> */}
              <p>Olá, meu nome é Aloísio e sou professor de artes marciais. 
                Com anos de experiência e dedicação, alcancei a faixa preta em Jiu Jitsu e me especializei em MMA, Boxe e Muay Thai.
                Hoje, dedico-me a ensinar essas modalidades, 
                compartilhando meu conhecimento e paixão com meus alunos. Minhas aulas são projetadas para promover a autodefesa, 
                o condicionamento físico e o desenvolvimento pessoal, sempre valorizando a disciplina e o respeito.
                Se você deseja aprender artes marciais de maneira segura e eficaz, estou aqui para ajudar. Vamos treinar juntos e descobrir os benefícios das artes marciais!
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={icaro} alt="slide_image" />
            <div className="card-content">
              {/* <h2>Professor Marcos "Voinho" Guimarães</h2> */}
              <p>
              Olá, meu nome é Ícaro "Adesanya". Sou um dedicado praticante de Jiu Jitsu, 
              lutando sempre no mais alto desempenho. Além disso, sou professor de 
              Boxe, onde compartilho minhas técnicas e estratégias.
              Tenho uma vasta experiência em Muay Thai, com várias lutas profissionais no 
              currículo. Cada modalidade que ensino ou pratico reflete minha paixão e compromisso com as artes marciais.
              Se você está em busca de aprimorar suas habilidades ou iniciar uma jornada 
              nas artes marciais, estou aqui para guiá-lo. Vamos treinar juntos e explorar 
              todo o potencial que o Jiu Jitsu, o Boxe e o Muay Thai podem oferecer!
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