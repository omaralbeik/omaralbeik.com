// React
import React, {Component} from 'react';

// Bootstrap
import {LinkContainer} from 'react-router-bootstrap';
import {Grid, Row, Col, Button} from 'react-bootstrap';

// Components
import SocialButtons from "../social-buttons";

// Routing & Links
import {contactLink} from '../../links';

// Media files
import omar from '../../images/omar-pic.gif';

class AboutMe extends Component {
  render() {
    return (
      <div className="container-wrap">
        <Grid>
          <Row id="about-sec">
            <Col sm={4} md={3} className="person">
              <h1>Omar Albeik</h1>
              <p>Lifelong Learner</p>
              <div className="portrait-wrap">
                <img src={omar} alt="Omar Albeik" className="img-circle"/>
              </div>
            </Col>
            <Col sm={8} md={9} className="bio">
              <blockquote className="cmd-line">I'm a passionate software developer and AI enthusiast who continuously enjoys learning more about the ever-growing digital world and the technologies used to make it.
                <br/>
                <br/>
                Establish connection with @omaralbeik
                <span className="flashing">█</span>
              </blockquote>
              <footer>
                <div className="social-wrap">
                  <SocialButtons/>
                </div>
                <LinkContainer to={contactLink.url}>
                  <Button bsStyle="primary" className="btn-wide">Connect</Button>
                </LinkContainer>
              </footer>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default AboutMe;
