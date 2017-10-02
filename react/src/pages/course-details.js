import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import links from '../data/links';

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

  generateCourseDetails(course, tags) {
    if (!course) {
      return;
    }
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{course.title}</h1>
          <p className="content-subtitle col-sm-12">{course.subtitle}</p>
          <ol className="breadcrumb col-sm-12">
            <li><Link to="/">Home</Link></li>
            <li><Link to={links.learning}>Learning</Link></li>
            <li><Link to={links.courses}>Courses</Link></li>
            <li>{course.title}</li>
          </ol>
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
                  <img src={placeholder} alt={course.title} className="img-responsive"/>
                  <span>by {course.school_name}</span>
                </a>
                <p class="thb-link">
                  <a href={course.page_url} target="_blank" rel="noopener"><strong>Course Page</strong></a>
                </p>
              </div>
              <div class="topic-free-code">
                <h2>Description</h2>
                <p>{course.description}</p>
                <h2>Review</h2>
                <p>{course.review}</p>
              </div>
            </Col>
          </Row>
        </div>
        <footer className="inside-footer edgy">
          <ul className="tag-list list-unstyled list-inline">
            {this.generateTags(course.tags, tags)}
          </ul>
        </footer>
      </article>
    );
  }

  render() {
    const {tags} = this.props;
    const {courses} = this.props.learning ;
    const {course_id} = this.props.match.params;
    const course = courses[course_id];
    console.log(course_id);
    return (
      <main className="container-wrap inside-content">
        {this.generateCourseDetails(course, tags)}
      </main>
    )
  }
}

function mapStateToProps({learning, tags}) {
  return {learning, tags}
}

function mapDispatchToProps(dispatch) {
  return {
    addLearningCourse: course => dispatch(actions.addLearningCourse(course))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
