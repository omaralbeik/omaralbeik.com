import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import links from '../data/links';

import placeholder from '../images/placeholders/book-placeholder.svg';

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

  generateTags(tagIds, tags) {
    if (tagIds && tags) {
      return tagIds.map(id => {
        const tag = tags[id];
        if (tag) {
          return (<li key={id}><a href="/">#{tag.name}</a></li>);
        } else {
          return null;
        }
      });
    }
  }

  generateBookDetails(book, tags) {
    if (!book) {
      return;
    }
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{book.name}</h1>
          <p className="content-subtitle col-sm-12">by <strong>{book.author}</strong></p>
          <ol className="breadcrumb col-sm-12">
            <li><Link to="/">Home</Link></li>
            <li><Link to={links.learning}>Learning</Link></li>
            <li><Link to={links.books}>Books</Link></li>
            <li>{book.name}</li>
          </ol>
        </header>
        <div className="inside-body">
          <Row className="topic-meta edgy">
            <div className="col-sm-6 topic-date">
              <span>Read: </span>
              <time dateTime={book.read_at}>{book.read_at}</time>
            </div>
            <Col sm={6} className="social-wrap">
              <span>Share</span>
            </Col>
          </Row>
          <Row className="topic-content edgy">
            <Col sm={12}>
              <div className="thb-wrap">
                <img src={placeholder} alt="Book cover" className="img-responsive"/>
              </div>
              <div className="topic-free-code">
                <h2>Review</h2>
                <p>{book.review}</p>
                <h2>Purchase URL</h2>
                <a href={book.purchase_url} target="_blank" rel="noopener">{book.purchase_url}</a>
              </div>
            </Col>
          </Row>
        </div>
        <footer className="inside-footer edgy">
          <ul className="tag-list list-unstyled list-inline">
            {this.generateTags(book.tags, tags)}
          </ul>
        </footer>
      </article>
    );
  }

  render() {
    const {tags} = this.props;
    const {books} = this.props.learning ;
    const {book_id} = this.props.match.params;
    const book = books[book_id];

    return (
      <main className="container-wrap inside-content">
        {this.generateBookDetails(book, tags)}
      </main>
    )
  }
}

function mapStateToProps({learning, tags}) {
  return {learning, tags}
}

function mapDispatchToProps(dispatch) {
  return {
    addLearningBook: book => dispatch(actions.addLearningBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
