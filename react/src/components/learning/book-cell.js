import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import links from '../../data/links';

class BookCell extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const {book} = this.props

    return (
      <li class="col-sm-3 col-md-2 col-lg-2">
        <Link to={`${links.books}/${book.id}`}>{book.name}</Link>
      </li>
    );
  };
}

export default BookCell;
