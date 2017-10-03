import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import links from '../../data/links';
import PostCell from '../blog/post-cell';

class LatestBlogPosts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired
  }

  render() {
    const {posts} = this.props;
    const sortedPosts = posts.sort((p1, p2) => (p1.published_at < p2.published_at))
    return (
      <div className="container-wrap">
        <section id="blogs-sec" className="container">
          <header className="sec-header">
            <h1>
              <Link to={links.blog}>Blog Posts...</Link>
            </h1>
          </header>
          <div className="sec-body">
            <ul className="home-blog-list list-unstyled inline-list row">
              {sortedPosts.map((p, i) => (<PostCell key={p.id} mobHidden={i < 1} post={p}/>))}
            </ul>
          </div>
          <footer className="sec-footer">
            <Link to={links.blog}>More Articles</Link>
          </footer>
        </section>
      </div>
    )
  }
}

export default LatestBlogPosts;
