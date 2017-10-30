// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';
import BookCell from '../components/learning/book-cell';
import Loading from '../components/loading';

// Routing & Links
import {learningLink, booksLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';

class BookListing extends Component {
  constructor(props) {
    super(props);
    this.fetchBooks();
  }

  componentWillMount() {
    document.title = booksLink.documentTitle;
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchBooks() {
    APIHelper.fetchBooks().then(books => {
      this.props.loadLearningBooks({type: actions.LOAD_LEARNING_BOOKS, books})
    })
  }

  generateBody(books) {
    if (books.length === 0) {
      return <Loading/>;
    } else {
      return (
        <Row>
          <Col sm={12}>
            <ul className="list-unstyled list-inline row transit-slow-all book-listing">
              {books.map(b => (<BookCell key={b.id} book={b}/>))}
            </ul>
          </Col>
        </Row>
      )
    }
  }

  render() {
    const {books} = this.props.learning;
    const booksArray = arrayFromObject(books);

    return (
      <main className="container-wrap inside-content">
        <section className="container">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">{booksLink.title}</h1>
            <Breadcrumb links={[learningLink, booksLink]}/>
          </header>
          <div className="inside-body">
            {this.generateBody(booksArray)}
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
