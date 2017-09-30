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
  }

  fetchSliders() {
    APIHelper.fetchSliders().then(sliders => {
      this.props.loadSliders({type: actions.LOAD_SLIDERS, sliders});
    });
  }

  render() {
    const {sliders} = this.props;

    return (
      <div>
        <Slider sliders={arrayFromObject(sliders)}/>
        <AboutMe/>
        <LatestBlogPosts/>
        <LatestProjects/>
        <CurrentCourse/>
      </div>
    )
  }
}

function mapStateToProps({sliders}) {
  return {sliders}
}

function mapDispatchToProps(dispatch) {
  return {
    loadSliders: sliders => dispatch(actions.loadSliders(sliders))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
