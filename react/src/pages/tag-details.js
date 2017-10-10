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

// Routing & Links
import {tagsLink, tagLink} from '../links';

// helpers
import APIHelper from '../utils/api-helpers';
import {arrayFromObject} from '../utils/helpers';

class TagDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchTagProjects();
    this.fetchTagPosts();
    // this.fetchTagSchools();
    this.fetchTagCourses();
    this.fetchTagQuotes();
    this.fetchTagBooks();
  }

  componentWillMount() {
    document.title = tagsLink.documentTitle;
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  fetchTagProjects() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagProjects(tag_id).then(projects => {
      this.props.loadProjects({type: actions.LOAD_PROJECTS, projects});
    });
  }

  fetchTagPosts() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagPosts(tag_id).then(posts => {
      this.props.loadBlogPosts({type: actions.LOAD_BLOG_POSTS, posts});
    });
  }

  // fetchTagSchools() {
  //   const {tag_id} = this.props.match.params;
  //   APIHelper.fetchTagSchools(tag_id).then(schools => {
  //     this.props.loadLearningSchools({type: actions.LOAD_LEARNING_SCHOOLS, schools});
  //   });
  // }

  fetchTagCourses() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagCourses(tag_id).then(courses => {
      this.props.loadLearningCourses({type: actions.LOAD_LEARNING_COURSES, courses});
    });
  }

  fetchTagQuotes() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagQuotes(tag_id).then(quotes => {
      this.props.loadLearningQuotes({type: actions.LOAD_LEARNING_QUOTES, quotes});
    });
  }

  fetchTagBooks() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagBooks(tag_id).then(books => {
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
    const {tags} = this.props;
    var {tag_id} = this.props.match.params;
    tag_id = parseInt(tag_id, 0);
    const tag = tags[tag_id];

    const {blogPosts, projects} = this.props;
    const {courses, quotes, books} = this.props.learning;

    const postsArray = arrayFromObject(blogPosts).filter(p => (p.tags.includes(tag_id)));
    const projectsArray = arrayFromObject(projects).filter(p => (p.tags.includes(tag_id)));
    const coursesArray = arrayFromObject(courses).filter(c => (c.tags.includes(tag_id)));
    const quotesArray = arrayFromObject(quotes).filter(q => (q.tags.includes(tag_id)));
    const booksArray = arrayFromObject(books).filter(b => (b.tags.includes(tag_id)));

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
    loadBlogPosts: posts => dispatch(actions.loadBlogPosts(posts)),
    loadProjects: projects => dispatch(actions.loadProjects(projects)),
    // loadLearningSchools: schools => dispatch(actions.loadLearningSchools(schools)),
    loadLearningCourses: courses => dispatch(actions.loadLearningCourses(courses)),
    loadLearningQuotes: quotes => dispatch(actions.loadLearningQuotes(quotes)),
    loadLearningBooks: books => dispatch(actions.loadLearningBooks(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDetails);
