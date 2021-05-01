import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import '../../App.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';


export default class NavBar extends React.Component{

  render() {

    return (
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
      <ReactBootStrap.Navbar.Brand className="navBrand"><Link to='/'> <img className="logo" src="https://res-console.cloudinary.com/dm2gfj40h/thumbnails/v1/image/upload/v1619226738/bG9EZURpb2dlbmVzX2lsanJ5dA==/preview" alt=" "></img></Link>
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
        <ReactBootStrap.NavDropdown className="ml-5 mr-3 h3" title="Perros" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="#action/3.1" className ="h4">Alimento Balanceado</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.2" className ="h4">Higiene</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3" className ="h4">Juguetes y Snacks</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.4" className ="h4">Antipulgas</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
          <ReactBootStrap.NavDropdown className="ml-5 mr-3 h3" title="Gatos" id="collasible-nav-dropdown">
            <ReactBootStrap.NavDropdown.Item href="#action/3.1" className ="h4">Alimento Balanceado</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Divider />
            <ReactBootStrap.NavDropdown.Item href="#action/3.2" className ="h4">Higiene</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.3" className ="h4">Juguetes y Snacks</ReactBootStrap.NavDropdown.Item>
            <ReactBootStrap.NavDropdown.Item href="#action/3.4" className ="h4">Antipulgas</ReactBootStrap.NavDropdown.Item>
          </ReactBootStrap.NavDropdown>
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link className = "h3 mr-3" href="#contact">Contacto</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link className="ml-4 mr-4 h3 active" eventKey={2} href="#Cart">
          Carrito 
          <CartWidget />
          </ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
    )
          } 
}



