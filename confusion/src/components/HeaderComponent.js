import React, {Component} from "react";
//import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

// put isOpen={this.state.isOpen} in COLLAPSE
//onClick={this.toggleNav} in navbar toggler
class Header extends Component{
  render(){
    return(
      <> 
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><img src="assets/images/logo.png"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                <NavLink to="/home">
                  <span className="fa fa-home fa-lg"> Home</span>
                </NavLink>
                <NavLink to="/aboutus">
                  <span className="fa fa-info fa-lg">About Us</span>
                </NavLink>
                <NavLink to="/menu">
                  <span className="fa fa-list fa-lg"> Menu</span>
                </NavLink>
                <NavLink to="/contactus">
                  <span className="fa fa-address-card fa-lg"> Contact Us</span>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
                
      </>
    );
  }
}



////WITH EXTRASSS

/*
class Header extends Component{
  render(){
    return(
      <> 
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#"><img src="assets/images/logo.png"></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll >
                <NavLink to="/home">
                  <span className="fa fa-home fa-lg"> Home</span>
                </NavLink>
                <NavLink to="/aboutus">
                  <span className="fa fa-info fa-lg">About Us</span>
                </NavLink>
                <NavLink to="/menu">
                  <span className="fa fa-list fa-lg"> Menu</span>
                </NavLink>
                <NavLink to="/contactus">
                  <span className="fa fa-address-card fa-lg"> Contact Us</span>
                </NavLink>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
                
      </>
    );
  }
}
*/



/*
class Header extends Component{
  render(){
    return(
      <> 
        <Navbar fluid dark expand='md' >
          <div className='container-fluid  p-5  text-white-rounded'>
            <NavbarToggler />
            <NavbarBrand className="mr-auto" href='/'><img src="assets/images/logo.png" height="120px" width="170px" alt="Ristorante con Fusion" ></img>
            </NavbarBrand>
            <NavbarToggler className="me-2" onC/>
            <Collapse  navbar>
            <Nav navbar >
              <NavItem>
                <NavLink to="/home">
                  <span className="fa fa-home fa-lg"></span>
                </NavLink>
                <NavLink to="/aboutus">
                  <span className="fa fa-info fa-lg"></span>
                </NavLink>
                <NavLink to="/menu">
                  <span className="fa fa-list fa-lg"></span>
                </NavLink>
                <NavLink to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span>
                </NavLink>
              </NavItem>
            </Nav>
            </Collapse >
            <p> LALALALALLALALAALALAL</p>
          </div>
        </Navbar>
                
      </>
    );
  }
}
*/
//JUMBOTRON NO LONGER SUPPORTED IN BS5

/*
class Header extends Component{
    render(){
      return(
        <>
            <Navbar dark >
              <div className='container'>
                <NavbarBrand href='/'>Ristorante con fusion</NavbarBrand>
              </div>
            </Navbar>
          
            <Jumbotron>
              <div className='container'>
                <div className='row row-header'>
                    <div className='col-12 col-sm-6'>
                    </div>
                </div>
              </div>
            </Jumbotron>
        </>
      );
    }
}
*/



/*

class Header extends Component{
  render(){
    return(
      <> 
        <Navbar fluid dark expand='md' >
          <div className='container-fluid  p-5  text-white-rounded'>
            <NavbarToggler />
            <NavbarBrand className="mr-auto" href='/'><img src="assets/images/logo.png" height="120px" width="170px" alt="Ristorante con Fusion" ></img>
            </NavbarBrand>
            <Collapse  navbar>
            <Nav navbar >
              <NavItem>
                <NavLink to="/home">
                  <span className="fa fa-home fa-lg"></span>
                </NavLink>
                <NavLink to="/aboutus">
                  <span className="fa fa-info fa-lg"></span>
                </NavLink>
                <NavLink to="/menu">
                  <span className="fa fa-list fa-lg"></span>
                </NavLink>
                <NavLink to="/contactus">
                  <span className="fa fa-address-card fa-lg"></span>
                </NavLink>
              </NavItem>
            </Nav>
            </Collapse >
            <p> LALALALALLALALAALALAL</p>
          </div>
        </Navbar>
                
      </>
    );
  }
}
*/
//JUMBOTRON NO LONGER SUPPORTED IN BS5

/*
class Header extends Component{
    render(){
      return(
        <>
            <Navbar dark >
              <div className='container'>
                <NavbarBrand href='/'>Ristorante con fusion</NavbarBrand>
              </div>
            </Navbar>
          
            <Jumbotron>
              <div className='container'>
                <div className='row row-header'>
                    <div className='col-12 col-sm-6'>
                    </div>
                </div>
              </div>
            </Jumbotron>
        </>
      );
    }
}
*/        

export default Header;