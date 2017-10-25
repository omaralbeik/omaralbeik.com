// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Col, Row} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';
import TagItemCell from '../components/tags/tag-item-cell';
import Error from '../pages/error';

// Routing & Links
import {tagsLink, tagLink} from '../links';

// helpers
import APIHelper from '../utils/api-helpers';
import {arrayFromObject} from '../utils/helpers';

class TagDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.fetchTag()
  }

  componentWillMount() {
    document.title = tagsLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  fetchTag() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTag(tag_id).then(tag => {
      this.fetchTagItems(tag.id);
      this.props.addTag({type: actions.ADD_TAG, tag});
    }).catch(error => {
      this.setState({error: error});
    });
  }

  fetchTagItems(tag_id) {
    this.fetchTagProjects(tag_id);
    this.fetchTagPosts(tag_id);
    this.fetchTagCourses(tag_id);
    this.fetchTagQuotes(tag_id);
    this.fetchTagBooks(tag_id);
  }

  fetchTagProjects(tag_id) {
    APIHelper.fetchTagProjects(tag_id).then(projects => {
      this.props.loadProjects({type: actions.LOAD_PROJECTS, projects});
    });
  }

  fetchTagPosts(tag_id) {
    APIHelper.fetchTagPosts(tag_id).then(posts => {
      this.props.loadBlogPosts({type: actions.LOAD_BLOG_POSTS, posts});
    });
  }

  fetchTagCourses(tag_id) {
    APIHelper.fetchTagCourses(tag_id).then(courses => {
      this.props.loadLearningCourses({type: actions.LOAD_LEARNING_COURSES, courses});
    });
  }

  fetchTagQuotes(tag_id) {
    APIHelper.fetchTagQuotes(tag_id).then(quotes => {
      this.props.loadLearningQuotes({type: actions.LOAD_LEARNING_QUOTES, quotes});
    });
  }

  fetchTagBooks(tag_id) {
    APIHelper.fetchTagBooks(tag_id).then(books => {
      this.props.loadLearningBooks({type: actions.LOAD_LEARNING_BOOKS, books});
    });
  }

  generateTagDetails(tag, items) {
    if (!tag) {
      return;
    }
    document.title = tagLink(tag).documentTitle;
    return (
      <section className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{tagLink(tag).title}</h1>\
          <Breadcrumb links={[tagsLink, tagLink(tag)]}/>
        </header>
        <div className="inside-body">
          <Row className="topic-content edgy">
            <Col sm={12}>
              <ul className="list-unstyled trl transit-all">
                {items.map((item, index) => (<TagItemCell key={index} item={item}/>))}
              </ul>
            </Col>
          </Row>
        </div>
      </section>
    );
  }

  render() {
    const {error} = this.state;
    if (error) {
      return (
        <Error error={error}/>
      );
    }

    const {tags} = this.props;
    var {tag_id} = this.props.match.params;

    var tag;
    if (parseInt(tag_id, 0)) { // get tag by id
      tag = tags[tag_id]
    } else { // get tag by url_name
      const tagsArray = arrayFromObject(tags);
      tag = tagsArray.filter(t => (t.url_name === tag_id))[0];
    }

    const {blogPosts, projects} = this.props;
    const {courses, quotes, books} = this.props.learning;

    const postsArray = arrayFromObject(blogPosts).filter(p => (p.tags.includes(tag.id)));
    const projectsArray = arrayFromObject(projects).filter(p => (p.tags.includes(tag.id)));
    const coursesArray = arrayFromObject(courses).filter(c => (c.tags.includes(tag.id)));
    const quotesArray = arrayFromObject(quotes).filter(q => (q.tags.includes(tag.id)));
    const booksArray = arrayFromObject(books).filter(b => (b.tags.includes(tag.id)));

    const itemsArray = postsArray
    .concat(projectsArray)
    .concat(coursesArray)
    .concat(quotesArray)
    .concat(booksArray);

    return (
      <main className="container-wrap inside-content">
        {this.generateTagDetails(tag, itemsArray)}
      </main>
    )
  }

}

function mapStateToProps({tags, blogPosts, projects, learning}) {
  return {tags, blogPosts, projects, learning}
}

function mapDispatchToProps(dispatch) {
  return {
    addTag: tag => dispatch(actions.addTag(tag)),
    loadBlogPosts: posts => dispatch(actions.loadBlogPosts(posts)),
    loadProjects: projects => dispatch(actions.loadProjects(projects)),
    // loadLearningSchools: schools => dispatch(actions.loadLearningSchools(schools)),
    loadLearningCourses: courses => dispatch(actions.loadLearningCourses(courses)),
    loadLearningQuotes: quotes => dispatch(actions.loadLearningQuotes(quotes)),
    loadLearningBooks: books => dispatch(actions.loadLearningBooks(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDetails);
