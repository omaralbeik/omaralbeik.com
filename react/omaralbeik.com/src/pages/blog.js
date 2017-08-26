import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helper';
import * as actions from '../actions';

import PostLi from '../components/post-li';

class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.fetchBlogPosts();
  }

  fetchBlogPosts() {
    APIHelper.fetchBlogPosts().then(posts => {
      this.props.loadBlogPosts({type: actions.LOAD_BLOG_POSTS, posts});
    });
  }

  render() {
    const {blogPosts} = this.props;
    const postsArray = arrayFromObject(blogPosts);
    return (
      <div>
        <h1>Blog</h1>
        <ol>
          {postsArray.map(post => (<PostLi key={post.id} post={post} />))}
        </ol>
      </div>
    )
  }
}

function mapStateToProps({blogPosts}) {
  return {blogPosts}
}

function mapDispatchToProps(dispatch) {
  return {
    loadBlogPosts: posts => dispatch(actions.loadBlogPosts(posts))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogPage));
