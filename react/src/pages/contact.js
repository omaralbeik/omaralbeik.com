// React
import React, {Component} from 'react';

// Bootstrap components
import {Row, Col, Button, FormGroup, FormControl} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';

// Routing & Links
import {contactLink} from '../links';

// Country list
import Countries from '../data/countries';

class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main className="container-wrap inside-content">
        <article className="container">
          <header className="inside-header row text-center">
            <h1 className="content-title col-sm-12">{contactLink.title}</h1>
            <Breadcrumb links={[contactLink]}/>
          </header>

          <div className="inside-body">
            <Row>
              <Col sm={12}>
                <form className="form-horizontal cmd-line" method="post" action="">
                  <div className="cmd-intro">
                    <p>Contact attempts are always welcome. <br className="hidden-xs"/>To do so, please fill in the fields below:<br/>
                    <br className="visible-xs-block"/>--------------------<span className="hidden-xs">----------------------</span></p>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="name" name="name" placeholder="Full Name" type="text"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="email" name="email" placeholder="Email Address" required type="email"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="phone" name="phone" placeholder="Phone" type="tel"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="select" className="textfield" name="country" id="country" required defaultValue="">
                          <option value="">- Country -</option>
                          {Countries.all.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                        </FormControl>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="city" name="city" placeholder="City" type="text"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="subject" name="subject" placeholder="Subject" required type="text"/>
                      </Col>
                    </FormGroup>

                    <p className="hidden-xs">---------</p>
                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="textarea" id="message" name="message" placeholder="Message..." rows="4" className="textfield" required/>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm={12}>
                        <Button bsStyle="primary" type="submit">Send Message!</Button>
                      </Col>
                    </FormGroup>
                  </div>
                </form>

              </Col>
            </Row>
          </div>
        </article>
      </main>
    )
  }
}

export default Contact;
