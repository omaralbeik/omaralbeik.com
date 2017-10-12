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
      const sortedTags = ids.map(t => (tags[t])).sort((t1, t2) => (t1.name.localeCompare(t2.name)));
      return sortedTags.map(t => (<li key={t.id}><Link to={tagLink(t).url}>#{t.name}</Link></li>));
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
