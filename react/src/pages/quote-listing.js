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

  render() {
    const {quotes} = this.props.learning;
    const quotesArray = arrayFromObject(quotes)
    return (
      <main className="container-wrap inside-content">
        <section className="container topic">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">{quotesLink.title}</h1>
            <Breadcrumb links={[learningLink, quotesLink]}/>
          </header>
          <Row>
            <Col sm={12}>
              <ul className="list-unstyled quote-listing">
                {quotesArray.map(q => (<QuoteCell key={q.id} quote={q}/>))}
              </ul>
            </Col>
          </Row>
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
