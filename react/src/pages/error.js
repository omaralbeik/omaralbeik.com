// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// Routing & Links
import {homeLink} from '../links';

// Strings
import {errorStrings} from '../strings';

class Error extends Component {
  static propTypes = {
    error: PropTypes.string,
  }

  componentWillMount() {
    document.title = homeLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    var {error} = this.props;
    error = error || "Sorry! Someting went wrong..";
    return (
      <div>
        <main className="container-wrap inside-content">
          <article className="container topic">
            <header className="inside-header row">
              <h1 className="content-title col-sm-12" style={{opacity: 0}}>{errorStrings.error}</h1>
            </header>
            <div className="inside-body">
              <div className="row topic-content edgy">
                <Col sm={12}>
                  <div className="topic-free-code error">
                    <h2>{errorStrings.error}</h2>
                    <h3>{error}</h3>
                    <p>
                      <LinkContainer exact to={homeLink.url}>
                        <Button bsStyle="primary" className="btn-wide">{errorStrings.backHome}</Button>
                      </LinkContainer>
                    </p>
                  </div>
                </Col>
              </div>
            </div>
          </article>
        </main>
      </div>
    )
  }
}

export default Error;
