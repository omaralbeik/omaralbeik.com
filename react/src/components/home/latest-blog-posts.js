import React, {Component} from 'react';

class LatestBlogPosts extends Component {
  render() {
    return (
      <div className="container-wrap">
        <section id="blogs-sec" className="container">
          <header className="sec-header">
            <h1>
              <a href="blog.html">Blog Posts...</a>
            </h1>
          </header>
          <div className="sec-body"></div>
          <footer className="sec-footer">
            <a href="blog.html">More Articles</a>
          </footer>
        </section>
      </div>
    )
  }
}

export default LatestBlogPosts;
