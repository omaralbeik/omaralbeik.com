import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class PostCell extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    mobHidden: PropTypes.bool,
  }

  generateTags(tagIds, tags) {
    if (tagIds && tags) {
      return tagIds.map(id => {
        const tag = tags[id];
        if (tag) {
          return (<li key={id}><a href="/">#{tag.name}</a></li>);
        }
      });
    }
  }

  render() {
    const {post, tags, mobHidden} = this.props
    const liClassName = `blog-item-wrap col-sm-6 ${mobHidden ? "hidden-xs" : ""}`
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
              {this.generateTags(post.tags, tags)}
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

export default connect(mapStateToProps)(PostCell);
