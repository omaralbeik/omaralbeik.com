// React
import React, {Component} from 'react';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';

// Routing & Links
import {aboutLink} from '../links';

// Media files
import cover from '../images/cover-about-demo.jpg';

// Strings
import {aboutStrings} from '../strings';

class About extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main className="container-wrap inside-content">
        <article className="container topic">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">{aboutLink.title}</h1>
            <Breadcrumb links={[aboutLink]}/>
          </header>
          <div className="inside-body">
            <img src={cover} alt="About cover" className="img-responsive topic-cover edgy"/>
            <Row className="topic-content edgy">
              <Col sm={12}>
                <h1>{aboutStrings.title}<span role="img" aria-label={aboutStrings.emojiTitle}>{aboutStrings.emoji}</span></h1>
                <br/>
                <p>{aboutStrings.text}</p>
              </Col>
            </Row>
          </div>
        </article>
      </main>
    );
  }
}

export default About;
