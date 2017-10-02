import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from "react-bootstrap";
import links from '../../data/links';
import TimeAgo from 'react-timeago'

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
          return (<li key={id}><Link to={`${links.tags}/${tag.id}`}>#{tag.name}</Link></li>)
        } else {
          return null;
        }
      });
    }
  }

  render() {
    const {post, tags, mobHidden} = this.props
    const liClassName = `blog-item-wrap col-sm-6 ${mobHidden ? "hidden-xs" : ""}`
    const postLink = `${links.blog}/${post.id}`;
    return (
      <li className={liClassName}>
        <article className="blog-item">
          <header>
            <h2 className="blog-title">
              <Link to={postLink}>{post.title}</Link>
            </h2>
            <TimeAgo className="blog-date" date={post.published_at}></TimeAgo>
          </header>
          <div className="blog-item-tags">
            <ul className="tag-list">
              {this.generateTags(post.tags, tags)}
            </ul>
          </div>
          <div className="blog-item-body">
            <p>{post.summary}</p>
            <LinkContainer to={postLink}>
              <Button bsStyle="primary" className="btn-wide">Read Blog Post</Button>
            </LinkContainer>
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
