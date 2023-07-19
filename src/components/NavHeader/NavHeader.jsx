import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import routes from '../../routes/routes.json';

const NavHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="sticky-top">
      <Container>
        <NavLink to={routes.HOME} style={{ textDecoration: 'none' }}>
          <Navbar.Brand
            style={{ color: '#ff3d47', fontSize: '1.4rem', fontWeight: '600' }}
          >
            <em>🎬</em>CineBooking
          </Navbar.Brand>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
