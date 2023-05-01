import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '70px',
        color: 'white',
        backgroundColor: 'rgb(33 33 93)',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        zIndex: '9999',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem'
      }}
    >
      <Link
        to='Home'
        smooth={true}
        duration={500}
        style={{ margin: '0px 10px', cursor: 'pointer' }}
      >
        Home
      </Link>
      <Link
        to='history'
        smooth={true}
        duration={500}
        style={{ margin: '0 10px', cursor: 'pointer' }}
      >
        História
      </Link>
      <Link
        to='FounderCarousel'
        smooth={true}
        duration={500}
        style={{ margin: '0 10px', cursor: 'pointer' }}
      >
        Professores
      </Link>
      <Link
        to='modalities'
        smooth={true}
        duration={500}
        style={{ margin: '0 10px', cursor: 'pointer' }}
      >
        Modalidades
      </Link>
      <Link
        to='contact'
        smooth={true}
        duration={500}
        style={{ margin: '0 10px', cursor: 'pointer' }}
      >
        Contato
      </Link>
      <Link
        to='location'
        smooth={true}
        duration={500}
        style={{ margin: '0 10px', cursor: 'pointer' }}
      >
        Localização
      </Link>
    </nav>
  );
};

export default Navbar;
