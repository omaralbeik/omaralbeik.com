import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import SocialButtons from './social-buttons';
import links from '../data/links';

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
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
              </nav>
                <p>This is a fully integrated open-source project that uses React, <br className="hidden-xs"/>Python and Django to build. Grab your copy from <a href={links.repo} target="_blank" rel="noopener">GitHub</a>.</p>
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
