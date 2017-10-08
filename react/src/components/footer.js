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
  tagsLink,
  aboutLink,
  contactLink,
  repoLink
} from '../links';

// Strings
import {footerStrings} from '../strings';

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
                    <li><Link to={tagsLink.url}>{tagsLink.name}</Link></li>
                    <li><Link to={aboutLink.url}>{aboutLink.name}</Link></li>
                    <li><Link to={contactLink.url}>{contactLink.name}</Link></li>
                  </ul>
              </nav>
                <p>{footerStrings.openSource1}<br className="hidden-xs"/>{footerStrings.openSource2}<Link to={repoLink.url} target="_blank" rel="noopener">{repoLink.name}</Link></p>
              </Col>
              <Col sm={6} className="social-wrap">
                <SocialButtons/>
              </Col>
            </Row>
          </Grid>
        </div>
        <div className="footer-copy">
          <p className="text-center">{footerStrings.copyright}<Link to={homeLink.url}>{footerStrings.name}</Link>. <br className="visible-xs-inline"/>{footerStrings.allRights}</p>
        </div>
      </footer>
    )
  }
}

export default Footer;
