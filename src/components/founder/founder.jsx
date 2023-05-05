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
            <img src={gazzo} alt="slide_image" />
            <div className="card-content">
              {/* <h2>Leo IURY</h2> */}
              <p>Sou Lazaro "Gazo" Mascaranhes, um atleta de MMA 
                com reconhecimento no Universo profissional dessa modalidade. 
                Minha experiência como professor tem sido enriquecedora, especialmente porque como atleta profissional 
                de MMA e detentor de dois cinturões, eu tenho uma grande bagagem teórica e prática que eu posso compartilhar com vocês.
                Acredito que meu maior papel é ajudar meus alunos a superar 
                seus próprios limites e alcançar um novo patamar em sua prática esportiva.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="innerWidth card">
            <img src={ogro} alt="slide_image" />
            <div className="card-content">
              {/* <h2>Leo IURY</h2> */}
              <p>
              Eu sou Lucas Ogro e eu comecei minha história como professor 
              após um treino duro, onde fui surpreendido com a informação de que daria aula 
              de MMA em outra academia. Isso mesmo, do nada me jogaram nesse mundo. 
              Encarei o desafio e fui na cara e na coragem. Comecei a observar outros 
              professores ensinando e fui criando meu próprio método. Fui construindo 
              uma boa reputação, comecei a trabalhar em outras academias, 
              dar aulas particulares e quando vi, estava apaixonado pela profissão.
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
            <img src={icaro} alt="slide_image" />
            <div className="card-content">
              {/* <h2>Professor Marcos "Voinho" Guimarães</h2> */}
              <p>
              Me chamo Ícaro e, com mais de uma década de dedicação às artes marciais, 
              tenho a experiência e a resiliência necessárias para competir em alto nível no MMA. 
              Como professor, busco transmitir aos meus alunos não apenas a técnica dos golpes, 
              mas também a confiança em suas próprias habilidades e a disciplina para alcançar seus objetivos. 
              Minhas aulas são dinâmicas e personalizadas para atender às necessidades de cada aluno, 
              com o objetivo de incentivar um estilo de vida saudável e ativo. 
              Descubra seu potencial para enfrentar qualquer desafio, dentro e fora dos tatames.
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