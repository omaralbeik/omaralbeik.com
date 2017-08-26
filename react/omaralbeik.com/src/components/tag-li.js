import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TagLi extends Component {
  static propTypes = {
    tag: PropTypes.object
  }

  generateBody() {
    const {tag} = this.props
    if (tag) {
      return (
        <div>
          <p>{tag.name}</p>
        </div>
      );
    }
    return null;
  }

  render() {
    return this.generateBody();
  };
}

export default TagLi;
