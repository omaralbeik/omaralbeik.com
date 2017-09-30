import React, {Component} from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helper';
import * as actions from '../actions';

import ProjectItem from '../components/project-item';

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.fetchProjects();
  }

  fetchProjects() {
    APIHelper.fetchProjects().then(projects => {
      this.props.loadProjects({type: actions.LOAD_PROJECTS, projects});
    });
  }

  render() {
    const {projects} = this.props;
    const projectsArray = arrayFromObject(projects);
    return (
      <div>
        <h1>Portfolio</h1>
        <ol>
          {projectsArray.map(project => (<ProjectItem key={project.id} project={project}/>))}
        </ol>
      </div>
    )
  }
}

function mapStateToProps({projects}) {
  return {projects}
}

function mapDispatchToProps(dispatch) {
  return {
    loadProjects: projects => dispatch(actions.loadProjects(projects))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PortfolioPage));
