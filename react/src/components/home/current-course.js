import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Col, Button} from 'react-bootstrap';
import links from '../../data/links';

import placeholder from '../../images/placeholders/course-placeholder.svg';

class CurrentCourse extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired
  }

  generateTags(tagIds, tags) {
    if (tagIds && tags) {
      return tagIds.map(id => {
        const tag = tags[id];
        if (tag) {
          return (<li key={id}><Link to={`${links.tags}/${tag.id}`}>#{tag.name}</Link></li>)
        } else {
          return null;
        }
      });
    }
  }

  render() {
    const {course, tags} = this.props;
    const courseLink = `${links.courses}/${course.id}`;

    return (
      <div className="container-wrap bg-lighter" id="course-sec-wrap">
        <section className="container" id="course-sec">
          <header className="sec-header">
            <h1>
              <Link to={links.courses}>Current Course...</Link>
            </h1>
          </header>
          <div className="sec-body">
            <div className="row">
              <Col sm={4} md={4} lg={3}>
                <div className="course-emblem">
                  <picture>
                    <source srcSet={placeholder} media="(min-width: 768px)"/>
                    <img srcSet={placeholder} src={placeholder} alt={course.title} className="hidden-xs"/>
                  </picture>
                </div>
              </Col>
              <article className="col-sm-8 col-md-8 col-lg-9 ">
                <h2 className="course-title">{course.title}</h2>
                <p className="course-subtitle">{course.school_name}: <a href={course.page_url} target="_blank" rel="noopener">{course.subtitle}</a></p>
                <div className="course-tags">
                  <ul className="tag-list list-unstyled list-inline">
                    {this.generateTags(course.tags, tags)}
                  </ul>
                </div>
                <p className="course-desc">{course.description}</p>
                <p>
                  <LinkContainer to={courseLink}>
                    <Button bsStyle="primary" className="btn-wide">Course Details</Button>
                  </LinkContainer>
                </p>
              </article>
            </div>
          </div>
          <footer className="sec-footer">
            <Link to={links.courses}>Previous Courses</Link>
          </footer>
        </section>
      </div>
    )
  }
}

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(CurrentCourse);
