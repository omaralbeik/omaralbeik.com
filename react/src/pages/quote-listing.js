import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import links from '../data/links';
import QuoteCell from '../components/learning/quote-cell';

class QuoteListing extends Component {
  constructor(props) {
    super(props);
    this.fetchQuotes();
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
            <h1 className="content-title col-sm-12">Favorite Quotes</h1>
            <ol className="breadcrumb col-sm-12">
              <li><Link to="/">Home</Link></li>
              <li><Link to={links.learning}>learning</Link></li>
              <li>Quotes</li>
            </ol>
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
