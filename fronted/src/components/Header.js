import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
const Header = () => {
    return (
       
              <Navbar bg="light" expand="lg">
                   <Container>
                   <Navbar.Brand href="#home">Кальян Микс</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/"></Nav.Link>
      <Nav.Link href="/"></Nav.Link>     
    </Nav>
   
  </Navbar.Collapse>
                   </Container>
 
</Navbar>
       
      
    )
}

export default Header
