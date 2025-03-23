import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <i className='fa-regular fa-user'></i>
            Student App
          </Navbar.Brand>
          <Link to={'add'} className='btn btn-warning '>Add students</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header