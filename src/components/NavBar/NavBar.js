import logo from  '../lr.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'
import CartWidget from '../Cart/CartWidget/CartWidget';
import { Link } from 'react-router-dom';



function NavBarLogo(props) {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container className='d-flex' >
          <Navbar.Brand  className='brand m-2'>
            <Nav.Link as={Link} to={'/'} className='link-logo-home' >
            <img
              alt=""
              src={logo}
              className=""
            />
              <hr></hr>
              <p> Viajes LR</p>
            </Nav.Link>

            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto navLinks ">
              <Nav.Link as={Link} to={"/category/America"} className='text-warning '>America</Nav.Link>
              <Nav.Link as={Link} to={"/category/Europa"} className='text-warning'>Europa</Nav.Link>
              <Nav.Link as={Link} to={"/category/Asia"} className='text-warning' >Asia</Nav.Link>
              <Nav.Link as={Link} to={"/category/Africa"} className='text-warning' >Africa</Nav.Link>
              <Nav.Link  as={Link} to={"/category/Oceania"} className='text-warning' >Oceania</Nav.Link>
            </Nav>
            <CartWidget/>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
  }
  
  export default NavBarLogo;