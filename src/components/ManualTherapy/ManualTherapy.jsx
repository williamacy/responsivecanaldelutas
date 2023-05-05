import React from 'react';
import './ManualTherapy.css';

const ManualTherapy = () => {
  const handleLinkClick = (event, message) => {
    event.preventDefault();
    const whatsappNumber = '5571996137828'; // Substitua pelo número de WhatsApp da empresa
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="manual-therapy-container">
      <h2>Terapias Manuais</h2>
      <h3 className="transparent-bg">Clique na terapia e agende com a gente</h3>
      <ul>
        <li className="transparent-bg">
          <a href="#" onClick={(event) => handleLinkClick(event, 'Olá! Gostaria de mais informações sobre Liberação Miofascial.')}>
            Liberação Miofascial
          </a>
        </li>
        <li className="transparent-bg">
          <a href="#" onClick={(event) => handleLinkClick(event, 'Olá! Gostaria de mais informações sobre Acupuntura.')}>
            Acupuntura
          </a>
        </li>
        <li className="transparent-bg">
          <a href="#" onClick={(event) => handleLinkClick(event, 'Olá! Gostaria de mais informações sobre Eletroacupuntura.')}>
            Eletroacupuntura
          </a>
        </li>
        <li className="transparent-bg">
          <a href="#" onClick={(event) => handleLinkClick(event, 'Olá! Gostaria de mais informações sobre Ventosaterapia.')}>
            Ventosaterapia
          </a>
        </li>
        <li className="transparent-bg">
          <a href="#" onClick={(event) => handleLinkClick(event, 'Olá! Gostaria de mais informações sobre Moxabustão.')}>
            Moxabustão
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ManualTherapy;
