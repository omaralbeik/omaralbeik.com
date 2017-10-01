import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import PostCell from '../components/blog/post-cell';

class BlogListing extends Component {
  constructor(props) {
    super(props);
    this.fetchBlogPosts();
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchBlogPosts() {
    APIHelper.fetchBlogPosts().then(posts => {
      this.props.loadBlogPosts({type: actions.LOAD_BLOG_POSTS, posts});
    });
  }

  render() {
    const {blogPosts} = this.props;
    const postsArray = arrayFromObject(blogPosts)
    return (
      <main className="container-wrap inside-content">
        <section className="container">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">Blog</h1>
            <ol className="breadcrumb col-sm-12">
              <li><Link to="/">Home</Link></li>
              <li>Blog</li>
            </ol>
          </header>
          <div className="inside-body">
            <Row>
              <Col sm={12}>
                <ul className="home-blog-list list-unstyled inline-list row">
                  {postsArray.map(p => (<PostCell key={p.id} post={p}/>))}
                </ul>
              </Col>
            </Row>
          </div>
        </section>
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogListing);
