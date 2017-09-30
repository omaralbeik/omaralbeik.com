import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Tag from './tag-item';

class CurrentCourse extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired
  }

  render() {
    const {course, tags} = this.props;
    return (
      <div className="container-wrap bg-lighter" id="course-sec-wrap">
    <section className="container" id="course-sec">
      <header className="sec-header">
        <h1><a href="course-listing.html">Current Course...</a></h1>
      </header>

      <div className="sec-body">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-3">
            <div className="course-emblem">
                <picture>
                </picture>
            </div>
          </div>
          <article className="col-sm-8 col-md-8 col-lg-9 ">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-subtitle"><a href={course.page_url}>Udacity:</a> {course.subtitle}</p>
            <div className="course-tags">
              <ul className="tag-list list-unstyled list-inline">
                {course.tags.map(t => (<Tag key={t} tag={tags[t]}/>))}
              </ul>
            </div>
            <p className="course-desc">{course.description}</p>
            <p><a href="#" className="btn btn-wide btn-primary">Course Details</a></p>
          </article>
        </div>
      </div>

      <footer className="sec-footer"><a href="course-listing.html">Previous Courses</a></footer>
    </section>
  </div>
    )
  };
}

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(CurrentCourse);
