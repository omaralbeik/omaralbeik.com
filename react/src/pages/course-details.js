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

// Routing & Links
import {learningLink, coursesLink, courseLink} from '../links';

// Helpers
import APIHelper from '../utils/api-helpers';
import {mediaFileUrl} from '../utils/helpers';

// Media files
import placeholder from '../images/placeholders/course-placeholder.svg';

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchCourse();
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchCourse() {
    const {course_id} = this.props.match.params;
    APIHelper.fetchCourse(course_id).then(course => {
      this.props.addLearningCourse({type: actions.ADD_LEARNING_COURSE, course});
    });
  }

  generateCourseDetails(course, tags) {
    if (!course) {
      return;
    }
    const logoUrl = course.logo_url ? mediaFileUrl(course.logo_url) : placeholder;
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{courseLink(course).title}</h1>
          <p className="content-subtitle col-sm-12">{course.subtitle}</p>
          <Breadcrumb links={[learningLink, coursesLink, courseLink(course)]}/>
        </header>
        <div className="inside-body">
          <Row className="topic-meta edgy">
            <div className="col-sm-6 topic-date">
              <span>STARTED: </span>
              <time dateTime={course.started_at}>{course.started_at}</time>
            </div>
            <Col sm={6} className="social-wrap">
              <span>Share</span>
            </Col>
          </Row>
          <Row className="topic-content edgy">
            <Col sm={12}>
              <div className="thb-wrap">
                <a href={course.page_url} className="thb-title" target="_blank" rel="noopener">
                  <img src={logoUrl} alt={course.title} className="img-responsive"/>
                  <span>by {course.school_name}</span>
                </a>
                <p className="thb-link">
                  <a href={course.page_url} target="_blank" rel="noopener"><strong>Course Page</strong></a>
                </p>
              </div>
              <div className="topic-free-code">
                <h2>Description</h2>
                <p>{course.description}</p>
                <h2>Review</h2>
                <p>{course.review}</p>
              </div>
            </Col>
          </Row>
        </div>
        <footer className="inside-footer edgy">
          <TagList ids={course.tags} className="tag-list list-unstyled list-inline"/>
        </footer>
      </article>
    );
  }

  render() {
    const {tags} = this.props;
    const {courses} = this.props.learning ;
    const {course_id} = this.props.match.params;
    const course = courses[course_id];
    return (
      <main className="container-wrap inside-content">
        {this.generateCourseDetails(course, tags)}
      </main>
    )
  }
}

function mapStateToProps({learning}) {
  return {learning}
}

function mapDispatchToProps(dispatch) {
  return {
    addLearningCourse: course => dispatch(actions.addLearningCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
