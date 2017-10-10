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

// Media files
import ascii from '../images/connect-ascii.svg';

// Strings
import {contactStrings} from '../strings';
import {EMAIL} from '../data/constants';

class Contact extends Component {
  componentWillMount() {
    document.title = contactLink.documentTitle;
  }

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
                <form className="form-horizontal cmd-line" method="POST" action={`https://formspree.io/${EMAIL}`}>
                  <img src={ascii} className="img-responsive hidden-xs" alt="connect ascii art"/>
                  <div className="cmd-intro">
                    <p>{contactStrings.title1}<br className="hidden-xs"/>{contactStrings.title2}<br/>
                    <br className="visible-xs-block"/>--------------------<span className="hidden-xs">----------------------</span></p>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="name" name="name" placeholder={contactStrings.namePlaceholder} type="text"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="email" name="email" placeholder={contactStrings.emailPlaceholder} required type="email"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="phone" name="phone" placeholder={contactStrings.phonePlaceholder} type="tel"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="select" className="textfield" name="country" id="country" required defaultValue="">
                          <option value="">{contactStrings.defaultCountry}</option>
                          {Countries.all.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                        </FormControl>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="city" name="city" placeholder={contactStrings.cityPlaceholder} type="text"/>
                      </Col>
                    </FormGroup>

                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="input" className="textfield" id="subject" name="subject" placeholder={contactStrings.subjectPlaceholder} required type="text"/>
                      </Col>
                    </FormGroup>

                    <p className="hidden-xs">---------</p>
                    <FormGroup>
                      <Col sm={12}>
                        <FormControl componentClass="textarea" id="message" name="message" placeholder={contactStrings.messagePlaceholder} rows="4" className="textfield" required/>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Col sm={12}>
                        <Button bsStyle="primary" type="submit">{contactStrings.submit}</Button>
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
