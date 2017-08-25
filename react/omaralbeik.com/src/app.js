import React, {Component} from 'react';

import {Switch, Route, withRouter} from 'react-router-dom';
import HomePage from './pages/home';

import {connect} from 'react-redux';

import APIHelper from './utils/api-helper';
import * as actions from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchBlogPosts();
    this.fetchProjects();
    this.fetchLearning();
    this.fetchTags();
  }

  fetchBlogPosts() {
    APIHelper.fetchBlogPosts().then(posts => {
      this.props.loadBlogPosts({type: actions.LOAD_BLOG_POSTS, posts});
    });
  }

  fetchProjects() {
    APIHelper.fetchProjects().then(projects => {
      this.props.loadProjects({type: actions.LOAD_PROJECTS, projects});
    });
  }

  fetchLearning() {
    APIHelper.fetchBooks().then(books => {
      this.props.loadLearningBooks({type: actions.LOAD_LEARNING_BOOKS, books});
    });

    APIHelper.fetchSchools().then(schools => {
      this.props.loadLearningSchools({type: actions.LOAD_LEARNING_SCHOOLS, schools});
    });

    APIHelper.fetchCourses().then(courses => {
      this.props.loadLearningCourses({type: actions.LOAD_LEARNING_COURSES, courses});
    });

    APIHelper.fetchQuotes().then(quotes => {
      this.props.loadLearningQuotes({type: actions.LOAD_LEARNING_QUOTES, quotes});
    });
  }

  fetchTags() {
    APIHelper.fetchTags().then(tags => {
      this.props.loadTags({type: actions.LOAD_TAGS, tags});
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps() {}

function mapDispatchToProps(dispatch) {
  return {
    loadBlogPosts: posts => dispatch(actions.loadBlogPosts(posts)),
    loadProjects: projects => dispatch(actions.loadProjects(projects)),
    loadLearningBooks: books => dispatch(actions.loadLearningBooks(books)),
    loadLearningSchools: schools => dispatch(actions.loadLearningSchools(schools)),
    loadLearningCourses: courses => dispatch(actions.loadLearningCourses(courses)),
    loadLearningQuotes: quotes => dispatch(actions.loadLearningQuotes(quotes)),
    loadTags: tags => dispatch(actions.loadTags(tags))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
