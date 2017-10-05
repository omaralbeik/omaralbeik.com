// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Redux
import {connect} from 'react-redux';

// Routing & Links
import {Link} from 'react-router-dom';
import {tagLink} from '../links';

class TagList extends Component {
  static propTypes = {
    ids: PropTypes.array.isRequired,
    className: PropTypes.string
  }

  generateTags(ids, tags) {
    if (ids && tags) {
      return ids.map(id => {
        const t = tags[id];
        if (t) {
          return (
            <li key={id}><Link to={tagLink(t).url}>#{t.name}</Link></li>
          )
        } else {
          return null;
        }
      });
    }
  }

  render() {
    const {ids, className, tags} = this.props;
    return (
      <ul className={className}>
        {this.generateTags(ids, tags)}
      </ul>
    );
  }
}

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(TagList);
