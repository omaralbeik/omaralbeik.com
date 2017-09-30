import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tag from './tag-item';

class PostItem extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  render() {
    const {post, tags, xsHidden} = this.props
    const liClassName = `blog-item-wrap col-sm-6 ${xsHidden ? "hidden-xs" : ""}`
    return (
      <li className={liClassName}>
        <article className="blog-item">
          <header>
            <h2 className="blog-title">
              <a href="#!">{post.title}</a>
            </h2>
            <time className="blog-date" dateTime={post.published_at}>{post.published_at}</time>
          </header>
          <div className="blog-item-tags">
            <ul className="tag-list">
              {post.tags.map(t => (<Tag key={t} tag={tags[t]}/>))}
            </ul>
          </div>
          <div className="blog-item-body">
            <p>{post.summary}</p>
            <a className="btn btn-wide btn-primary">Read Blog Post</a>
          </div>
        </article>
      </li>
    );
  };
}

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(PostItem);
