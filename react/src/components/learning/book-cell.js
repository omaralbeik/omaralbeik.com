// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Routing & Links
import {Link} from 'react-router-dom';
import {bookLink} from '../../links';

class BookCell extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const {book} = this.props

    return (
      <li className="col-sm-3 col-md-2 col-lg-2">
        <Link to={bookLink(book).url}>{book.name}</Link>
      </li>
    );
  };
}

export default BookCell;
