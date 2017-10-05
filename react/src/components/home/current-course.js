// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {LinkContainer} from 'react-router-bootstrap';
import {Row, Col, Button} from 'react-bootstrap';

// Components
import TagList from '../tag-list';

// Routing & Links
import {Link} from 'react-router-dom';
import {coursesLink, courseLink} from '../../links';

// Helpers
import {mediaFileUrl} from '../../utils/helpers';

// Media files
import placeholder from '../../images/placeholders/course-placeholder.svg';

class CurrentCourse extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired
  }

  render() {
    const {course} = this.props;
    const logoUrl = course.logo_url ? mediaFileUrl(course.logo_url) : placeholder;

    return (
      <div className="container-wrap bg-lighter" id="course-sec-wrap">
        <section className="container" id="course-sec">
          <header className="sec-header">
            <h1><Link to={coursesLink.url}>Current Course...</Link></h1>
          </header>
          <div className="sec-body">
            <Row>
              <Col sm={4} md={4} lg={3}>
                <div className="course-emblem">
                  <picture>
                    <source srcSet={logoUrl} media="(min-width: 768px)"/>
                    <img srcSet={logoUrl} src={logoUrl} alt={course.title} className="hidden-xs"/>
                  </picture>
                </div>
              </Col>
              <Col sm={8} md={8} lg={9}>
                <h2 className="course-title">{course.title}</h2>
                <p className="course-subtitle">{course.school_name}: <a href={course.page_url} target="_blank" rel="noopener">{course.subtitle}</a></p>
                <div className="course-tags">
                  <TagList ids={course.tags} className="tag-list list-unstyled list-inline"/>
                </div>
                <p className="course-desc">{course.description}</p>
                <p>
                  <LinkContainer to={courseLink(course).url}>
                    <Button bsStyle="primary" className="btn-wide">Course Details</Button>
                  </LinkContainer>
                </p>
              </Col>
            </Row>
          </div>
          <footer className="sec-footer">
            <Link to={coursesLink.url}>Previous Courses</Link>
          </footer>
        </section>
      </div>
    )
  }
}

export default CurrentCourse;
