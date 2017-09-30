import React, {Component} from "react";
import {connect} from "react-redux";
import {arrayFromObject} from "../utils/helpers";
import APIHelper from "../utils/api-helper";
import * as actions from "../actions";

import Slider from "../components/slider";
import AboutMe from "../components/about-me";
import PostList from "../components/posts-list";
import ProjectsList from "../components/projects-list";
import CurrentCourse from "../components/current-course";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.fetchSliders();
    this.fetchBlogPosts();
    this.fetchProjects();
    this.fetchCourses();
  }

  fetchSliders() {
    APIHelper.fetchSliders().then(sliders => {
      this.props.loadSliders({type: actions.LOAD_SLIDERS, sliders});
    });
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

  fetchCourses() {
    APIHelper.fetchCourses().then(courses => {
      this.props.loadLearningCourses({type: actions.LOAD_LEARNING_COURSES, courses});
    });
  }

  generateCurrentCourse(course) {
    if (course.tags) {
      return <CurrentCourse course={course}/>
    }
  }

  render() {
    const {sliders, blogPosts, projects, learning} = this.props;
    const {courses} = learning;
    const currentCourse = arrayFromObject(courses)[0] || {};
    return (
      <div>
        <Slider sliders={arrayFromObject(sliders)}/>
        <AboutMe/>
        <PostList posts={arrayFromObject(blogPosts)} isHome={true}/>
        <ProjectsList projects={arrayFromObject(projects)}/>
        {this.generateCurrentCourse(currentCourse)}
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
    loadLearningCourses: courses => dispatch(actions.loadLearningCourses(courses)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
