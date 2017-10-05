// React
import React, {Component} from 'react';

// Bootstrap components
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// Routing & Links
import {
  homeLink,
  blogLink,
  projectsLink,
  learningLink,
  aboutLink,
  contactLink
} from '../links';

// Media files
import logo from '../images/logo.svg';

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
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav id="navbar" pullRight>
                  <LinkContainer exact to={homeLink.url}><NavItem>{homeLink.name}</NavItem></LinkContainer>
                  <LinkContainer to={blogLink.url}><NavItem>{blogLink.name}</NavItem></LinkContainer>
                  <LinkContainer to={projectsLink.url}><NavItem>{projectsLink.name}</NavItem></LinkContainer>
                  <LinkContainer to={learningLink.url}><NavItem>{learningLink.name}</NavItem></LinkContainer>
                  <LinkContainer to={aboutLink.url}><NavItem>{aboutLink.name}</NavItem></LinkContainer>
                  <LinkContainer to={contactLink.url}><NavItem>{contactLink.name}</NavItem></LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
