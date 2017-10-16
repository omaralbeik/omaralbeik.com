// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {Row, Col, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

// Components
import TagList from '../tag-list';
import LazyLoad from 'react-lazy-load';

// Routing & Links
import {Link} from 'react-router-dom';
import {courseLink} from '../../links';

// Helpers
import {mediaFileUrl} from '../../utils/helpers';

// Media files
import placeholder from '../../images/placeholders/course-placeholder.svg';

// Strings
import {learningStrings} from '../../strings';

class CourseCell extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
  }

  render() {
    const {course} = this.props
    const logoUrl = course.logo_url ? mediaFileUrl(course.logo_url) : placeholder;

    return (
      <li className="course-item">
        <Row>
          <Col sm={4}>
            <div className="course-emblem">
              <LazyLoad>
                <picture className="hidden-xs">
                  <source srcSet={logoUrl} media="(min-width: 768px)"/>
                  <img srcSet={logoUrl} src={logoUrl} alt={course.title}/>
                </picture>
              </LazyLoad>
            </div>
          </Col>
          <article className="col-sm-8">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-subtitle">{course.school_name}: <Link to={course.page_url} target="_blank" rel="noopener">{course.subtitle}</Link></p>
            <div className="course-tags">
              <TagList ids={course.tags} className="tag-list list-unstyled list-inline"/>
            </div>
            <p className="course-desc">{course.description}</p>
            <LinkContainer to={courseLink(course).url}>
              <Button bsStyle="primary" className="btn-wide">{learningStrings.courseDetails}</Button>
            </LinkContainer>
          </article>
        </Row>
        </li>
    );
  };
}

export default CourseCell;
