import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import cover from '../images/cover-about-demo.jpg';

class About extends Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main className="container-wrap inside-content">
        <article className="container topic">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">About</h1>
            <ol className="breadcrumb col-sm-12">
              <li><Link to="/">Home</Link></li>
              <li>About</li>
            </ol>
          </header>
          <div className="inside-body">
            <img src={cover} alt="About cover" className="img-responsive topic-cover edgy"/>
            <Row className="topic-content edgy">
              <Col sm={12}>
                <h1>Hello, I'm Omar <span role="img" aria-label="wave emoji">👋</span></h1>
                <br/>
                <p>I am a passionate software developer and designer who continuously enjoys learning more about the ever-growing digital world and the technologies used to make it, drawing inspiration from the artistic chaos of Istanbul to create exceptional software solutions.</p>
              </Col>
            </Row>
          </div>
        </article>
      </main>
    );
  }
}

export default About;
