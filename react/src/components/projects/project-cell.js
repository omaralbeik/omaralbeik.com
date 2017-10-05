// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from "react-bootstrap";

// Routing & Links
import {Link} from 'react-router-dom';
import {projectLink} from '../../links';

// Helpers
import {mediaFileUrl} from '../../utils/helpers';

//  Strings
import {projectsStrings} from '../../strings';

class ProjectCell extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props;
    const style = {
      backgroundImage: project.logo_url ? `url("${mediaFileUrl(project.logo_url)}")` : null
    }

    return (
      <li className="col-sm-12 col-md-4 col-lg-4">
        <div className="thumbnail">
          <Link to={projectLink(project).url} className="proj-blocklink"/>
          <div className="proj-thumb" style={style}>
            <div className="proj-thumb-tint"></div>
          </div>
          <article className="caption">
            <h2 className="proj-title">{project.name}</h2>
            <time className="proj-date" dateTime={project.released_at}>{project.released_at}</time>
            <p className="proj-desc">{project.summary}</p>
            <footer>
              <LinkContainer to={projectLink(project).url}>
                <Button bsStyle="default" className="btn-wide">{projectsStrings.viewProject}</Button>
              </LinkContainer>
            </footer>
          </article>
        </div>
        <Link to={projectLink(project).url} className="blocklink"/>
      </li>
    );
  };
}

export default ProjectCell;
