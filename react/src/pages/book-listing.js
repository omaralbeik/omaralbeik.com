import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import links from '../data/links';
import BookCell from '../components/learning/book-cell';

class BookListing extends Component {
  constructor(props) {
    super(props);
    this.fetchBooks();
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchBooks() {
    APIHelper.fetchBooks().then(books => {
      this.props.loadLearningBooks({type: actions.LOAD_LEARNING_BOOKS, books})
    })
  }

  render() {
    const {books} = this.props.learning;
    const booksArray = arrayFromObject(books)
    return (
      <main className="container-wrap inside-content">
        <section className="container">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">Favorite Books</h1>
            <ol className="breadcrumb col-sm-12">
              <li><Link to="/">Home</Link></li>
              <li><Link to={links.learning}>learning</Link></li>
              <li>Books</li>
            </ol>
          </header>
          <div className="inside-body">
            <Row>
              <Col sm={12}>
                <ul class="list-unstyled list-inline row transit-slow-all book-listing">
                  {booksArray.map(b => (<BookCell key={b.id} book={b}/>))}
                </ul>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    )
  }
}

function mapStateToProps({learning}) {
  return {learning}
}

function mapDispatchToProps(dispatch) {
  return {
    loadLearningBooks: books => dispatch(actions.loadLearningBooks(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListing);
