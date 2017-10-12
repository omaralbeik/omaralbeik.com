// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Time from 'react-time';
import Breadcrumb from '../components/breadcrumb';
import TagList from '../components/tag-list';
import SocialShareButtons from '../components/social-share-buttons';

// Routing & Links
import {Link} from 'react-router-dom';
import {learningLink, coursesLink, courseLink} from '../links';

// Helpers
import APIHelper from '../utils/api-helpers';
import {mediaFileUrl} from '../utils/helpers';

// Media files
import placeholder from '../images/placeholders/course-placeholder.svg';

// Strings
import {genericStrings, learningStrings} from '../strings';

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchCourse();
  }

  componentWillMount() {
    document.title = coursesLink.documentTitle;
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

  generateReview(review) {
    if (!review) {
      return;
    }
    return (
      <div>
        <h2>{learningStrings.review}</h2>
        <p>{review}</p>
      </div>
    )
  }

  generateSummaryLink(url) {
    if (!url) {
      return;
    }
    return (
      <div>
        <h2>{learningStrings.summary}</h2>
        <Link to={url} target="_blank" rel="noopener">{url}</Link>
      </div>
    );
  }

  generateCourseDetails(course, tags) {
    if (!course) {
      return;
    }
    document.title = courseLink(course).documentTitle;
    const logoUrl = course.logo_url ? mediaFileUrl(course.logo_url) : placeholder;
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{courseLink(course).title}</h1>
          <p className="content-subtitle col-sm-12">{courseLink(course).subtitle}</p>
          <Breadcrumb links={[learningLink, coursesLink, courseLink(course)]}/>
        </header>
        <div className="inside-body">
          <Row className="topic-meta edgy">
            <div className="col-sm-6 topic-date">
              <span>{`${genericStrings.started}: `}</span>
              <Time value={course.started_at} format="D/M/YYYY"/>
            </div>
            <Col sm={6} className="social-wrap">
              <span>{genericStrings.share}</span>
              <SocialShareButtons url={window.location.href} title={course.title} summary={course.subtitle} tagIds={course.tags}/>
            </Col>
          </Row>
          <Row className="topic-content edgy">
            <Col sm={12}>
              <div className="thb-wrap">
                <Link to={course.school_url} className="thb-title" target="_blank" rel="noopener">
                  <img src={logoUrl} alt={course.title} className="img-responsive"/>
                  <span>{`${genericStrings.by} `}{course.school_name}</span>
                </Link>
                <p className="thb-link">
                  <Link to={course.page_url} target="_blank" rel="noopener"><strong>{learningStrings.coursePage}</strong></Link>
                </p>
              </div>
              <div className="topic-free-code">
                <h2>{genericStrings.description}</h2>
                <p>{course.description}</p>
                {this.generateReview(course.review)}
                <br/>
                {this.generateSummaryLink(course.summary_url)}
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
