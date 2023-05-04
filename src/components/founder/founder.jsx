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
                <p>
                Apresentando o idealizador do Studio Canal Lutas, o nosso professor e sócio: Marcos Guimarães, mais conhecido como Voinho.

                Profissional de Educação física, Marcos que é faixa preta de Jiu Jitsu 4 graus vem ministrando aulas da arte suave por muitos anos. Atleta de Jiu Jitsu e já competiu também no MMA, o professor gosta de ensinar tanto turmas de adulto quanto de crianças, onde de maneira lúdica consegue passar muitos ensinamentos e técnicas. 

                Voinho também é preparador físico e especialista em reabilitações de lesões com tratamentos de acupuntura e liberação miofacial.
                </p>
                {/* <p>Realiza terapias com agendamento:</p>
                    <ul className='terapias-do-voinho'>
                      <li>Ventosa terapia</li>
                      <li>Acupuntura</li>
                      <li>Eletro acupuntura</li>
                      <li>Massoterapia</li>
                    </ul> */}
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
              <p>Sou Lazaro "Gazzo" Mascaranhes, um atleta de MMA 
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
              <p>Eu sou LUCAS OGROO e eu comecei minha história como professor após um treino duro, onde fui surpreendido com a informação que daria aula de MMA em uma outra academia, isso mesmo, do nada me jogaram nesse mundo. Encarei o desafio e fui na cara e na coragem, comecei a observar mais outros professores ensinando e fui criando meu método. Fui construindo uma boa reputação, comecei a trabalhar em outras academias, dar aulas particulares e quando vi, estava apaixonado pela profissão.
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