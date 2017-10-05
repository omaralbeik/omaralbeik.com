// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {Row, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// Components
import TagList from '../tag-list';

// Routing & Links
import {coursesLink} from '../../links';

// Helpers
import APIHelper from '../../utils/api-helpers';

// Media files
import placeholder from '../../images/placeholders/course-placeholder.svg';

class CourseCell extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
  }

  render() {
    const {course} = this.props
    const courseLink = `${coursesLink}/${course.id}`;
    const logoUrl = course.logo_url ? `${APIHelper.BASE_URL}${course.logo_url}` : placeholder;

    return (
      <li className="course-item">
        <Row>
          <Col sm={4}>
            <div className="course-emblem"><picture className="hidden-xs">
              <source srcSet={logoUrl} media="(min-width: 768px)"/>
              <img srcSet={logoUrl} src={logoUrl} alt={course.title}/>
            </picture></div>
          </Col>
          <article className="col-sm-8">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-subtitle">{course.school_name}: <a href={course.page_url} target="_blank" rel="noopener">{course.subtitle}</a></p>
            <div className="course-tags">
              <TagList ids={course.tags} className="tag-list list-unstyled list-inline"/>
            </div>
            <p className="course-desc">{course.description}</p>
            <LinkContainer to={courseLink}>
              <Button bsStyle="primary" className="btn-wide">Course Details</Button>
            </LinkContainer>
          </article>
        </Row>
        </li>
    );
  };
}

export default CourseCell;
