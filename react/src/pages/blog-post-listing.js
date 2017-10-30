// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import PostCell from '../components/blog/post-cell';
import Breadcrumb from '../components/breadcrumb';
import Loading from '../components/loading';

// Routing & Links
import {blogLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';

class BlogListing extends Component {
  constructor(props) {
    super(props);
    this.fetchBlogPosts();
  }

  componentWillMount() {
    document.title = blogLink.documentTitle;
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchBlogPosts() {
    APIHelper.fetchBlogPosts().then(posts => {
      this.props.loadBlogPosts({type: actions.LOAD_BLOG_POSTS, posts});
    });
  }

  generateBody(posts) {
    if (posts.length === 0) {
      return <Loading/>;
    } else {
      return (
        <Row>
          <Col sm={12}>
            <ul className="home-blog-list list-unstyled inline-list row">
              {posts.map(p => (<PostCell key={p.id} post={p}/>))}
            </ul>
          </Col>
        </Row>
      )
    }
  }

  render() {
    const {blogPosts} = this.props;
    const postsArray = arrayFromObject(blogPosts)
    const sortedPosts = postsArray.sort((p1, p2) => (p1.published_at < p2.published_at))
    return (
      <main className="container-wrap inside-content">
        <section className="container">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">{blogLink.title}</h1>
            <Breadcrumb links={[blogLink]}/>
          </header>
          <div className="inside-body">
            {this.generateBody(sortedPosts)}
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
