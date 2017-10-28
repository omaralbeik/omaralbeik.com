// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {LinkContainer} from 'react-router-bootstrap';
import {Row, Col, Button} from 'react-bootstrap';

// Components
import TagList from '../tag-list';
import ReactLoading from 'react-loading';

// Routing & Links
import {Link} from 'react-router-dom';
import {coursesLink, courseLink} from '../../links';

// Helpers
import {mediaFileUrl} from '../../utils/helpers';

// Media files
import placeholder from '../../images/placeholders/course-placeholder.svg';

// Strings
import {homeStrings} from '../../strings';

class CurrentCourse extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired
  }

  generateBody(course, logoUrl) {
    if (!course) {
      return <ReactLoading type="bubbles" color="#aaa" className="loading"/>;
    } else {
      return (
        <Row>
          <Col sm={4} md={4} lg={3}>
            <div className="course-emblem">
              <picture  className="hidden-xs">
                <source srcSet={logoUrl} media="(min-width: 768px)"/>
                <img srcSet={logoUrl} src={logoUrl} alt={course.title}/>
              </picture>
            </div>
          </Col>
          <Col sm={8} md={8} lg={9}>
            <h2 className="course-title">{course.title}</h2>
            <p className="course-subtitle">{course.school_name}: <Link to={course.page_url} target="_blank" rel="noopener">{course.subtitle}</Link></p>
            <div className="course-tags">
              <TagList ids={course.tags} className="tag-list list-unstyled list-inline"/>
            </div>
            <p className="course-desc">{course.description}</p>
            <p>
              <LinkContainer to={courseLink(course).url}>
                <Button bsStyle="primary" className="btn-wide">{homeStrings.courseDetails}</Button>
              </LinkContainer>
            </p>
          </Col>
        </Row>
      )
    }
  }

  render() {
    const {course} = this.props;
    const logoUrl = course.logo_url ? mediaFileUrl(course.logo_url) : placeholder;

    return (
      <div className="container-wrap bg-lighter" id="course-sec-wrap">
        <section className="container" id="course-sec">
          <header className="sec-header">
            <h1><Link to={coursesLink.url}>{homeStrings.currentCourse}</Link></h1>
          </header>
          <div className="sec-body">
            {this.generateBody(course, logoUrl)}
          </div>
          <footer className="sec-footer">
            <Link to={coursesLink.url}>{homeStrings.previousCourses}</Link>
          </footer>
        </section>
      </div>
    )
  }
}

export default CurrentCourse;
