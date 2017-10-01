import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import links from '../data/links';
import CourseCell from '../components/learning/course-cell';

class CourseListing extends Component {
  constructor(props) {
    super(props);
    this.fetchLearningCourses();
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  fetchLearningCourses() {
    APIHelper.fetchCourses().then(courses => {
      this.props.loadLearningCourses({type: actions.LOAD_LEARNING_COURSES, courses});
    });
  }

  render() {
    const {courses} = this.props.learning;
    const coursesArray = arrayFromObject(courses)
    return (
      <main className="container-wrap inside-content">
        <section className="container topic">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">Courses</h1>
            <ol className="breadcrumb col-sm-12">
              <li><Link to="/">Home</Link></li>
              <li><Link to={links.learning}>Learning</Link></li>
              <li>Courses</li>
            </ol>
          </header>
          <ul className="list-unstyled courses-light">
            {coursesArray.map(c => (<CourseCell key={c.id} course={c}/>))}
          </ul>
        </section>
      </main>
    )
  }

}

function mapStateToProps({learning}) {
  return {learning}
}

function mapDispatchToProps(dispatch) {
  return {
    loadLearningCourses: courses => dispatch(actions.loadLearningCourses(courses))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseListing);
