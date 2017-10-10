// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';
import TagList from '../components/tag-list';
import SocialShareButtons from '../components/social-share-buttons';

// Routing & Links
import {blogLink, postLink} from '../links';

// Helpers
import APIHelper from '../utils/api-helpers';

// Strings
import {genericStrings} from '../strings';

class BlogPostDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchBlogPost()
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchBlogPost() {
    const {post_id} = this.props.match.params;
    APIHelper.fetchBlogPost(post_id).then(post => {
      this.props.addBlogPost({type: actions.ADD_BLOG_POST, post});
    });
  }

  generateBlogPostDetails(post) {
    if (!post) {
      return;
    }
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{post.title}</h1>
          <Breadcrumb links={[blogLink, postLink(post)]} />
        </header>
        <div className="inside-body">
          <Row className="topic-meta edgy">
            <Col sm={6} className="topic-date">
              <span>{`${genericStrings.published}: `}</span>
              <time dateTime={post.published_at}>{post.published_at}</time>
            </Col>
            <Col sm={6} className="social-wrap">
              <span>{genericStrings.share}</span>
              <SocialShareButtons url={window.location.href} title={post.title} summary={post.summary} tagIds={post.tags}/>
            </Col>
          </Row>
          <Row className="topic-content edgy">
            <Col sm={12}>
              <div className="topic-free-code">
                <h1>{post.title}</h1>
                <h2>{post.summary}</h2>
                <hr/>
                <div dangerouslySetInnerHTML={{__html: post.html_text}}/>
                </div>
            </Col>
          </Row>
        </div>
        <footer className="inside-footer edgy">
          <TagList ids={post.tags} className="tag-list list-unstyled list-inline"/>
        </footer>
      </article>
    );
  }

  render() {
    const {blogPosts} = this.props;
    const {post_id} = this.props.match.params;

    const post = blogPosts[post_id];

    return (
      <main className="container-wrap inside-content">
        {this.generateBlogPostDetails(post)}
      </main>
    )
  }

}

function mapStateToProps({blogPosts}) {
  return {blogPosts}
}

function mapDispatchToProps(dispatch) {
  return {
    addBlogPost: post => dispatch(actions.addBlogPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostDetails);
