// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from "react-bootstrap";

// Components
import Time from 'react-time';
import TagList from '../tag-list';

// Routing & Links
import {Link} from 'react-router-dom';
import {postLink} from '../../links';

// Strings
import {blogStrings} from '../../strings';

class PostCell extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    mobHidden: PropTypes.bool
  }

  render() {
    const {post, mobHidden} = this.props
    const liClassName = `blog-item-wrap col-sm-6 ${mobHidden ? "hidden-xs" : ""}`

    return (
      <li className={liClassName}>
        <article className="blog-item">
          <header>
            <h2 className="blog-title">
              <Link to={postLink(post).url}>{post.title}</Link>
            </h2>
            <Time className="blog-date" value={post.published_at} titleFormat="YYYY/MM/DD HH:mm" relative/>
          </header>
          <div className="blog-item-tags">
            <TagList ids={post.tags} className="tag-list"/>
          </div>
          <div className="blog-item-body">
            <p>{post.summary}</p>
            <LinkContainer to={postLink(post).url}>
              <Button bsStyle="primary" className="btn-wide">{blogStrings.cellButton}</Button>
            </LinkContainer>
          </div>
        </article>
      </li>
    );
  };
}

export default PostCell;
