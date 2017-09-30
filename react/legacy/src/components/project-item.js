import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from "react-bootstrap";
import {connect} from 'react-redux';

class ProjectItem extends Component {
  static propTypes = {
    project: PropTypes.object.isRequired
  }

  render() {
    const {project} = this.props
    return (
      <li className="col-md-4 col-lg-4">
        <div className="thumbnail">
          <div className="proj-thumb">
            <div className="proj-thumb-tint"></div>
          </div>
          <article className="caption">
            <h2 className="proj-title">{project.name}</h2>
            <time className="proj-date" dateTime={project.released_at}>{project.released_at}</time>
            <p className="proj-desc">{project.summary}</p>
            <footer>
              <Button href="#" bsStyle="default" className="btn-wide">View Project</Button>
            </footer>
          </article>
        </div>
      </li>
    );
  };
}

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(ProjectItem);
