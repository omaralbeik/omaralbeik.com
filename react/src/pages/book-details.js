// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';
import TagList from '../components/tag-list';

// Routing & Links
import {Link} from 'react-router-dom';
import {learningLink, booksLink, bookLink} from '../links';

// Helpers
import APIHelper from '../utils/api-helpers';

// Media files
import placeholder from '../images/placeholders/book-placeholder.svg';

// Strings
import {genericStrings, learningStrings} from '../strings';

class BookDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchBook();
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchBook() {
    const {book_id} = this.props.match.params;
    APIHelper.fetchBook(book_id).then(book => {
      this.props.addLearningBook({type: actions.ADD_LEARNING_BOOK, book});
    });
  }

  generateBookDetails(book) {
    if (!book) {
      return;
    }
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{book.name}</h1>
          <p className="content-subtitle col-sm-12">{`${genericStrings.by} `}<strong>{bookLink(book).subtitle}</strong></p>
          <Breadcrumb links={[learningLink, booksLink, bookLink(book)]} />
        </header>
        <div className="inside-body">
          <Row className="topic-meta edgy">
            <div className="col-sm-6 topic-date">
              <span>{`${genericStrings.read}: `}</span>
              <time dateTime={book.read_at}>{book.read_at}</time>
            </div>
            <Col sm={6} className="social-wrap">
              <span>{genericStrings.share}</span>
            </Col>
          </Row>
          <Row className="topic-content edgy">
            <Col sm={12}>
              <div className="thb-wrap">
                <img src={placeholder} alt="Book cover" className="img-responsive"/>
              </div>
              <div className="topic-free-code">
                <h2>{learningStrings.review}</h2>
                <p>{book.review}</p>
                <h2>{learningStrings.purchaseUrl}</h2>
                <Link to={book.purchase_url} target="_blank" rel="noopener">{book.purchase_url}</Link>
              </div>
            </Col>
          </Row>
        </div>
        <footer className="inside-footer edgy">
          <TagList ids={book.tags} className="tag-list list-unstyled list-inline"/>
        </footer>
      </article>
    );
  }

  render() {
    const {books} = this.props.learning ;
    const {book_id} = this.props.match.params;
    const book = books[book_id];

    return (
      <main className="container-wrap inside-content">
        {this.generateBookDetails(book)}
      </main>
    )
  }
}

function mapStateToProps({learning}) {
  return {learning}
}

function mapDispatchToProps(dispatch) {
  return {
    addLearningBook: book => dispatch(actions.addLearningBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
