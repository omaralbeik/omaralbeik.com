// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';
import QuoteCell from '../components/learning/quote-cell';
import Loading from '../components/loading';

// Routing & Links
import {learningLink, quotesLink} from '../links';

// Helper
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';

class QuoteListing extends Component {
  constructor(props) {
    super(props);
    this.fetchQuotes();
  }

  componentWillMount() {
    document.title = quotesLink.documentTitle;
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchQuotes() {
    APIHelper.fetchQuotes().then(quotes => {
      this.props.loadLearningQuotes({type: actions.LOAD_LEARNING_QUOTES, quotes})
    })
  }

  generateBody(quotes) {
    if (quotes.length === 0) {
      return <Loading/>;
    } else {
      return (
        <Row>
          <Col sm={12}>
            <ul className="list-unstyled quote-listing">
              {quotes.map(q => (<QuoteCell key={q.id} quote={q}/>))}
            </ul>
          </Col>
        </Row>
      );
    }
  }

  render() {
    const {quotes} = this.props.learning;
    const quotesArray = arrayFromObject(quotes)
    const sortedQuotes = quotesArray.sort((q1, q2) => (new Date(q2.created_at).getTime() - new Date(q1.created_at).getTime()));

    return (
      <main className="container-wrap inside-content">
        <section className="container topic">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">{quotesLink.title}</h1>
            <Breadcrumb links={[learningLink, quotesLink]}/>
          </header>
          {this.generateBody(sortedQuotes)}
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
    loadLearningQuotes: quotes => dispatch(actions.loadLearningQuotes(quotes))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuoteListing);
