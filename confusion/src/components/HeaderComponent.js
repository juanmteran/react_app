import React, {Component} from "react";
import {Navbar, NavbarBrand} from 'reactstrap';


class Header extends Component{
  render(){
    return(
      <> 
        
        <Navbar fluid dark >
          <div className='container-fluid  p-5  text-white-rounded'>
            <NavbarBrand  href='/'>Ristorante con fusion</NavbarBrand>
            <p> LALALALALLALALAALALAL</p>
          </div>
        </Navbar>
                
      </>
    );
  }
}

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