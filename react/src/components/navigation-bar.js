import React, {Component} from 'react';
import logo from '../images/logo.svg';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import links from '../data/links';

class NavigationBar extends Component {
  render() {
    return (
      <div className="nav-wrap nav-flatusual transit-all" id="header">
        <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <h1 id="branding">
                  <a className="navbar-brand" href="/" title="Omar Albeik">
                    <img src={logo} alt="Omar Albeik logo"/>
                  </a>
                </h1>
              </Navbar.Brand>
              <Navbar.Toggle>
                <FontAwesome name="bars"/>
              </Navbar.Toggle>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav id="navbar" pullRight>
                  <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
                  <LinkContainer to={links.blog}><NavItem>Blog</NavItem></LinkContainer>
                  <LinkContainer to={links.projects}><NavItem>Portfolio</NavItem></LinkContainer>
                  <LinkContainer to={links.about}><NavItem>About</NavItem></LinkContainer>
                  <LinkContainer to={links.contact}><NavItem>Contact</NavItem></LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
