import React, {Component} from 'react';

class CurrentCourse extends Component {
  render() {
    return (
      <div className="container-wrap bg-lighter" id="course-sec-wrap">
        <section className="container" id="course-sec">
          <header className="sec-header">
            <h1>
              <a href="course-listing.html">Current Course...</a>
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
            <a href="course-listing.html">Previous Courses</a>
          </footer>
        </section>
      </div>
    )
  }
}

export default CurrentCourse;
