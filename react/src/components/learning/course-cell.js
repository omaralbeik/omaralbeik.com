import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {Row, Col} from 'react-bootstrap';
import {Button} from "react-bootstrap";
import links from '../../data/links';

import courseImg from '../../images/course-img.jpg';

class CourseCell extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
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

  render() {
    const {course, tags} = this.props
    const courseLink = `${links.courses}/${course.id}`;

    return (
      <li className="course-item">
        <Row>
          <Col sm={4}>
            <div className="course-emblem"><picture className="hidden-xs">
              <source srcSet={courseImg} media="(min-width: 768px)"/>
              <img srcSet={courseImg} src={courseImg} alt="Course Emblem"/>
            </picture></div>
          </Col>
          <article className="col-sm-8">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-subtitle"><a href={course.page_url} target="_blank" rel="noopener">{course.subtitle}</a></p>
            <div className="course-tags">
              <ul className="tag-list list-unstyled list-inline">
                {this.generateTags(course.tags, tags)}
              </ul>
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

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(CourseCell);
