// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from "react-bootstrap";

// Components
import Time from 'react-time';

// Routing & Links
import {Link} from 'react-router-dom';
import {projectLink} from '../../links';

// Helpers
import {mediaFileUrl} from '../../utils/helpers';

//  Strings
import {projectsStrings} from '../../strings';

// Media files
import placeholder from '../../images/placeholders/project-placeholder.svg';

class ProjectCell extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props;
    const logo = project.logo_url ? mediaFileUrl(project.logo_url) : placeholder
    const style = {
      backgroundImage: `url("${logo}")`
    }

    return (
      <li className="col-sm-12 col-md-4 col-lg-4">
        <div className="thumbnail">
          <Link to={projectLink(project).url} className="proj-blocklink"/>
          <div className="proj-thumb" style={style}>
            <div className="proj-thumb-tint"></div>
          </div>
          <article className="caption">
            <Link to={projectLink(project).url}><h2 className="proj-title">{project.name}</h2></Link>
            <Time className="proj-date" value={project.released_at} format="D/M/YYYY"/>
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
