// React
import React, {Component} from 'react';

// Bootstrap components
import {Grid, Row, Col} from 'react-bootstrap';

// Components
import SocialButtons from './social-buttons';

// Routing & Links
import {Link} from 'react-router-dom';
import {
  homeLink,
  blogLink,
  projectsLink,
  learningLink,
  aboutLink,
  contactLink,
  repoLink
} from '../links';

class Footer extends Component {
  render() {
    return (
      <footer className="container-wrap" id="footer">
        <div className="footer-body">
          <Grid>
            <Row>
              <Col sm={6} className="footer-nav-wrap">
                <nav className="footer-nav">
                  <ul className="list-unstyled inline-list">
                    <li><Link to={homeLink.url}>{homeLink.name}</Link></li>
                    <li><Link to={blogLink.url}>{blogLink.name}</Link></li>
                    <li><Link to={projectsLink.url}>{projectsLink.name}</Link></li>
                    <li><Link to={learningLink.url}>{learningLink.name}</Link></li>
                    <li><Link to={aboutLink.url}>{aboutLink.name}</Link></li>
                    <li><Link to={contactLink.url}>{contactLink.name}</Link></li>
                  </ul>
              </nav>
                <p>This is a fully integrated open-source project that uses React, <br className="hidden-xs"/>Python and Django to build. Grab your copy from <a href={repoLink.url} target="_blank" rel="noopener">{repoLink.name}</a>.</p>
              </Col>
              <Col sm={6} className="social-wrap">
                <SocialButtons/>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="footer-copy">
          <p className="text-center">Copyright &copy; 2017 <a href="https://omaralbeik.com">Omar Albeik</a>. <br className="visible-xs-inline"/>All rights reserved.</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
