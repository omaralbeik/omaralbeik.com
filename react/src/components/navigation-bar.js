// React
import React, {Component} from 'react';

// Bootstrap components
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// Routing & Links
import {Link} from 'react-router-dom';
import {
  homeLink,
  blogLink,
  projectsLink,
  learningLink,
  coursesLink,
  booksLink,
  quotesLink,
  aboutLink,
  contactLink
} from '../links';

// Media files
import logo from '../images/logo.svg';

class NavigationBar extends Component {
  constructor(props){
    super(props);
    this.state = { isOpen: false };
  }

  openDropDown() {
    this.setState({ isOpen: true });
  }

  closeDropDown() {
    this.setState({ isOpen: false });
  }

  toggleDropDown() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div className="nav-wrap nav-flatusual transit-all" id="header">
        <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <h1 id="branding">
                  <Link to={homeLink.url} className="navbar-brand" title="Omar Albeik">
                    <img src={logo} alt="Omar Albeik logo"/>
                  </Link>
                </h1>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav id="navbar" pullRight>
                  <LinkContainer eventKey="1" exact to={homeLink.url}><NavItem>{homeLink.name}</NavItem></LinkContainer>
                  <LinkContainer eventKey="2" to={blogLink.url}><NavItem>{blogLink.name}</NavItem></LinkContainer>
                  <LinkContainer eventKey="3" to={projectsLink.url}><NavItem>{projectsLink.name}</NavItem></LinkContainer>
                  <LinkContainer eventKey="4" to={learningLink.url}
                    open={isOpen}
                    onClick={e => {e.preventDefault()}}
                    onMouseEnter={_ => {this.openDropDown()}}
                    onMouseLeave={_ => {this.closeDropDown()}}
                    onToggle={_ => {this.toggleDropDown()}}>
                    <NavDropdown title={learningLink.name} id="nav-dropdown">
                      <LinkContainer eventKey="4.1" to={coursesLink.url} onClick={_ => {this.closeDropDown()}}><NavItem>{coursesLink.name}</NavItem></LinkContainer>
                      <LinkContainer eventKey="4.2" to={booksLink.url} onClick={_ => {this.closeDropDown()}}><NavItem>{booksLink.name}</NavItem></LinkContainer>
                      <LinkContainer eventKey="4.3" to={quotesLink.url} onClick={_ => {this.closeDropDown()}}><NavItem>{quotesLink.name}</NavItem></LinkContainer>
                    </NavDropdown>
                  </LinkContainer>
                  <LinkContainer eventKey="5" to={aboutLink.url}><NavItem>{aboutLink.name}</NavItem></LinkContainer>
                  <LinkContainer eventKey="6" to={contactLink.url}><NavItem>{contactLink.name}</NavItem></LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
