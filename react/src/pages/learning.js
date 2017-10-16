// React
import React, {Component} from 'react';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';

// Routing & Links
import {Link} from 'react-router-dom';
import {learningLink, coursesLink, booksLink, quotesLink} from '../links';


class Learning extends Component {
  componentWillMount() {
    document.title = learningLink.documentTitle;
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <main className="container-wrap inside-content">
        <article className="container topic">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">{learningLink.title}</h1>
            <Breadcrumb links={[learningLink]}/>
          </header>
          <div className="inside-body">
            <Row className="topic-content edgy">
              <Col sm={12}>
                <Link className="learning-link" to={coursesLink.url}>{coursesLink.title}</Link>
                <Link className="learning-link" to={booksLink.url}>{booksLink.title}</Link>
                <Link className="learning-link" to={quotesLink.url}>{quotesLink.title}</Link>
              </Col>
            </Row>
          </div>
        </article>
      </main>
    );
  }
}

export default Learning;
