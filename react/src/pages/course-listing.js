// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Components
import Breadcrumb from '../components/breadcrumb';
import CourseCell from '../components/learning/course-cell';

// Routing & Links
import {learningLink, coursesLink} from '../links';

// Helpers
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';

class CourseListing extends Component {
  constructor(props) {
    super(props);
    this.fetchLearningCourses();
  }

  componentWillMount() {
    document.title = coursesLink.documentTitle;
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
    const sortedCoursesArray = coursesArray.sort((c1, c2) => (c1.started_at < c2.started_at))
    return (
      <main className="container-wrap inside-content">
        <section className="container topic">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">{coursesLink.title}</h1>
            <Breadcrumb links={[learningLink, coursesLink]}/>
          </header>
          <ul className="list-unstyled courses-light">
            {sortedCoursesArray.map(c => (<CourseCell key={c.id} course={c}/>))}
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
