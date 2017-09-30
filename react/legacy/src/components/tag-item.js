import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TagItem extends Component {
  static propTypes = {
    tag: PropTypes.object
  }

  generateBody() {
    const {tag} = this.props
    if (tag) {
      return (
        <li key={tag.id}><a href="#">#{tag.name}</a></li>
      );
    } else {
      return null;
    }
  }

  render() {
    return this.generateBody();
  };
}

export default TagItem;
