import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import links from '../data/links';

class BlogPostDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchBlogPost()
  }

  fetchBlogPost() {
    const {post_id} = this.props.match.params;
    APIHelper.fetchBlogPost(post_id).then(post => {
      this.props.addBlogPost({type: actions.ADD_BLOG_POST, post});
    });
  }

  generateTags(tagIds, tags) {
    if (tagIds && tags) {
      return tagIds.map(id => {
        const tag = tags[id];
        if (tag) {
          return (<li key={id}><a href="/">#{tag.name}</a></li>);
        } else {
          return null;
        }
      });
    }
  }

  generateBlogPostDetails(post, tags) {
    if (!post) {
      return;
    }
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{post.title}</h1>
          <ol className="breadcrumb col-sm-12">
            <li><Link to="/">Home</Link></li>
            <li><Link to={links.blog}>Blog</Link></li>
            <li>{post.title}</li>
          </ol>
        </header>
        <div className="inside-body">
          <Row className="topic-meta edgy">
            <Col sm={6} className="topic-date">
              <span>Published: </span>
              <time dateTime={post.published_at}>{post.published_at}</time>
            </Col>
            <Col sm={6} className="social-wrap">
              <span>Share</span>
              <ul className="list-unstyled list-inline social-share selective-opacity transit-quick-all"></ul>
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
          <ul className="tag-list list-unstyled list-inline">
            {this.generateTags(post.tags, tags)}
          </ul>
        </footer>
      </article>
    );
  }

  render() {
    const {blogPosts, tags} = this.props;
    const {post_id} = this.props.match.params;

    const post = blogPosts[post_id];

    return (
      <main className="container-wrap inside-content">
        {this.generateBlogPostDetails(post, tags)}
      </main>
    )
  }

}

function mapStateToProps({blogPosts, tags}) {
  return {blogPosts, tags}
}

function mapDispatchToProps(dispatch) {
  return {
    addBlogPost: post => dispatch(actions.addBlogPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostDetails);
