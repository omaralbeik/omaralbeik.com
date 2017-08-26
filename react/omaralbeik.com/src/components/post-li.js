import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import TagLi from './tag-li';

class PostLi extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post, tags} = this.props
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.summary}</p>
        <ol>
          {post.tags.map(t => (<TagLi key={t} tag={tags[t]}/>))}
        </ol>
      </div>
    );
  };
}


function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(PostLi);
