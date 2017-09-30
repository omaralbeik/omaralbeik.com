import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import links from '../../data/links';
import ProjectCell from '../projects/project-cell';

class LatestProjects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired
  }

  render() {
    const {projects} = this.props;

    return (
      <div className="container-wrap">
        <section id="projects-sec" className="container">
          <header className="sec-header">
            <h1>
              <Link to={links.projects}>Latest Projects...</Link>
            </h1>
          </header>
          <div className="sec-body">
            <ul className="home-project-list list-unstyled list-inline row thumbnails-hfixed transit-all">
              {projects.map(p => (<ProjectCell key={p.id} project={p}/>))}
            </ul>
          </div>
          <footer className="sec-footer">
            <Link to={links.projects}>More Projects</Link>
          </footer>
        </section>
      </div>
    )
  }
}

export default LatestProjects;
