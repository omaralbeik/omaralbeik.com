import React, {Component} from 'react';
import {connect} from 'react-redux';
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import Slider from '../components/home/slider';
import AboutMe from '../components/home/about-me';
import LatestBlogPosts from '../components/home/latest-blog-posts';
import LatestProjects from '../components/home/latest-projects';
import CurrentCourse from '../components/home/current-course';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.fetchSliders();
    this.fetchBlogPosts();
    this.fetchProjects();
    this.fetchLearningCourses();
  }

  fetchSliders() {
    APIHelper.fetchSliders().then(sliders => {
      this.props.loadSliders({type: actions.LOAD_SLIDERS, sliders});
    });
  }

  fetchBlogPosts() {
    APIHelper.fetchLatestBlogPosts().then(posts => {
      this.props.loadBlogPosts({type: actions.LOAD_BLOG_POSTS, posts});
    });
  }

  fetchProjects() {
    APIHelper.fetchLatestProjects().then(projects => {
      this.props.loadProjects({type: actions.LOAD_PROJECTS, projects})
    })
  }

  fetchLearningCourses() {
    APIHelper.fetchLatestCourses().then(courses => {
      this.props.loadLearningCourses({type: actions.LOAD_LEARNING_COURSES, courses})
    })
  }

  render() {
    const {sliders, blogPosts, projects, learning} = this.props;
    return (
      <div>
        <Slider sliders={arrayFromObject(sliders)}/>
        <AboutMe/>
        <LatestBlogPosts posts={arrayFromObject(blogPosts)}/>
        <LatestProjects projects={arrayFromObject(projects)}/>
        <CurrentCourse/>
      </div>
    )
  }
}

function mapStateToProps({sliders, blogPosts, projects, learning}) {
  return {sliders, blogPosts, projects, learning}
}

function mapDispatchToProps(dispatch) {
  return {
    loadSliders: sliders => dispatch(actions.loadSliders(sliders)),
    loadBlogPosts: posts => dispatch(actions.loadBlogPosts(posts)),
    loadProjects: projects => dispatch(actions.loadProjects(projects)),
    loadLearningCourses: courses => dispatch(actions.loadLearningCourses(courses))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
