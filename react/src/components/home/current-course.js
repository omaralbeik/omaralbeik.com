import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import links from '../../data/links';

class CurrentCourse extends Component {

  render() {
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
              <div className="col-sm-4 col-md-4 col-lg-3">
                <div className="course-emblem">
                  <picture></picture>
                </div>
              </div>
              <article className="col-sm-8 col-md-8 col-lg-9 "></article>
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

export default CurrentCourse;
