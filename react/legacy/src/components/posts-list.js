import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row} from "react-bootstrap";
import PostItem from './post-item';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    isHome: PropTypes.bool
  }

  generatePosts() {
    const {posts, isHome} = this.props;
    if (isHome) {
      return posts.map((p, i) => {
        return <PostItem key={p.id} xsHidden={i < 1} post={p}/>
      })
    } else {
      return posts.map(p => (<PostItem key={p.id} post={p}/>))
    }
  }

  render() {
    return (
      <div className="container-wrap">
        <section id="blogs-sec" className="container">
          <header className="sec-header">
            <h1><a href="blog.html">Blog Posts...</a></h1>
          </header>
          <div className="sec-body">
            <Row className="home-blog-list list-unstyled inline-list">
              {this.generatePosts()}
            </Row>
          </div>
          <footer className="sec-footer">
            <a href="blog.html">More Articles</a>
          </footer>
        </section>
      </div>
    )
  };
}

export default PostList;
