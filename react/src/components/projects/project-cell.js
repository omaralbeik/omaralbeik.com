import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Button} from "react-bootstrap";
import links from '../../data/links';

class ProjectCell extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props;
    const projectLink = `${links.projects}/${project.id}`;
    return (
      <li className="col-md-4 col-lg-4">
        <div className="thumbnail">
          <Link to={projectLink} className="proj-blocklink"/>
          <div className="proj-thumb">
            <div className="proj-thumb-tint"></div>
          </div>
          <article className="caption">
            <h2 className="proj-title">{project.name}</h2>
            <time className="proj-date" dateTime={project.released_at}>{project.released_at}</time>
            <p className="proj-desc">{project.summary}</p>
            <footer>
              <LinkContainer to={projectLink}>
                <Button bsStyle="default" className="btn-wide">View Project</Button>
              </LinkContainer>
            </footer>
          </article>
        </div>
        <Link to={projectLink} className="blocklink"/>
      </li>
    );
  };
}

export default ProjectCell;
