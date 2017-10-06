// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Routing & Links
import {Link} from 'react-router-dom';
import {bookLink} from '../../links';

// Media files
import placeholder from '../../images/placeholders/book-placeholder.svg';

// Helpers
import {mediaFileUrl} from '../../utils/helpers';

class BookCell extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const {book} = this.props
    const cover =  book.cover_url ? mediaFileUrl(book.cover_url) : placeholder;
    const style = {
      backgroundImage: `url("${cover}")`
    }
    
    return (
      <li className="col-sm-3 col-md-2 col-lg-2">
        <Link to={bookLink(book).url} style={style}>{book.name}</Link>
      </li>
    );
  };
}

export default BookCell;
