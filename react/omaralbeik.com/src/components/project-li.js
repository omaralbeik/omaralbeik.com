import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import TagLi from './tag-li';

class ProjectLi extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
  }

  render() {
    const {project, tags} = this.props
    return (
      <div>
        <h2>{project.name}</h2>
        <p>{project.summary}</p>
        <a target="_blank" href={project.website_url}>Website</a>
        <br/>
        <a target="_blank" href={project.github_url}>Github</a>
        <br/>
        <ol>
          {project.tags.map(t => (<TagLi key={t} tag={tags[t]}/>))}
        </ol>
      </div>
    );
  };
}


function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(ProjectLi);
