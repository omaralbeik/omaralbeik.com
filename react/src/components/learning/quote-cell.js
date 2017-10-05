// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Components
import TagList from '../tag-list';

class QuoteCell extends Component {
  static propTypes = {
    quote: PropTypes.object.isRequired
  }

  render() {
    const {quote} = this.props

    return (
      <li className="quote-item">
        <header>
          <span className="quoted-name">~{quote.author} </span>
          <br className="visible-xs-block"/>
          <span className="quoted-career">{quote.author_job_title}</span>
        </header>
        <blockquote cite="#">
          <span>{quote.quote}</span>
        </blockquote>
        <footer className="inside-footer edgy">
          <TagList ids={quote.tags} className="tag-list list-unstyled list-inline"/>
        </footer>
      </li>
    );
  };
}

export default QuoteCell;
