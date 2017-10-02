import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import links from '../../data/links';

class QuoteCell extends Component {
  static propTypes = {
    quote: PropTypes.object.isRequired
  }

  generateTags(tagIds, tags) {
    if (tagIds && tags) {
      return tagIds.map(id => {
        const tag = tags[id];
        if (tag) {
          return (
            <li key={id}>
              <Link to={`${links.tags}/${tag.id}`}>#{tag.name}</Link>
            </li>
          )
        } else {
          return null;
        }
      });
    }
  }

  render() {
    const {quote, tags} = this.props

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
          <ul className="tag-list list-unstyled list-inline">
            {this.generateTags(quote.tags, tags)}
          </ul>
        </footer>
      </li>
    );
  };
}

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(QuoteCell);
