import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Button} from 'react-bootstrap';
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
            <h1 className="content-title col-sm-12">Get In Touch</h1>
            <ol className="breadcrumb col-sm-12">
              <li><Link to="/">Home</Link></li>
              <li>Get In Touch</li>
            </ol>
          </header>

          <div className="inside-body">

            <Row>
              <Col sm={12}>
                <form className="form-horizontal cmd-line" method="post" action="">
                  <div className="cmd-intro">
                    <p>Contact attempts are always welcome. <br className="hidden-xs"/>To do so, please fill in the fields below:<br/>
                    <br className="visible-xs-block"/>--------------------<span className="hidden-xs">----------------------</span></p>

                    <div className="form-group">
                      <div className="col-sm-12">
                        <input className="form-control textfield" id="name" name="name" placeholder="Full Name" required="" type="text" autoFocus/>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-12">
                        <input className="form-control textfield" id="email" name="email" placeholder="Email Address" required="" type="email"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-12">
                        <input className="form-control textfield" id="phone" name="phone" placeholder="Phone" type="tel"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-12">
                        <select className="form-control textfield" name="country" id="country" required="required" defaultValue="">
                          <option value="">- Country -</option>
                          {Countries.all.map((c, i) => (<option key={i} value={c}>{c}</option>))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-12">
                        <input className="form-control textfield" id="city" name="city" placeholder="City" type="text"/>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-12">
                        <input className="form-control textfield" id="subject" name="subject" placeholder="Subject" required="" type="text"/>
                      </div>
                    </div>

                    <p className="hidden-xs">---------</p>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <textarea id="message" name="message" placeholder="Message..." rows="4" className="form-control textfield" required=""></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <Button bsStyle="primary" type="submit">Send Message!</Button>
                      </div>
                    </div>
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
