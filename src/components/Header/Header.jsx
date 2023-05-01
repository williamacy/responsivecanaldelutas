import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Header = () => {
  const phoneNumber = '5571996137828';

  return (
    <Link to='whatsapp' smooth={true} duration={500}>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25d366',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          textAlign: 'center',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => {
          window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá!Queria mais informações sobre a academia.`, '_blank');
        }}
      >
        <FaWhatsapp color='#fff' size={30} />
      </div>
    </Link>
  );
};

export default Header;
