import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import ProjectCell from '../components/projects/project-cell';

class ProjectListing extends Component {
  constructor(props) {
    super(props);
    this.fetchProjects();
  }

  fetchProjects() {
    APIHelper.fetchProjects().then(projects => {
      this.props.loadProjects({type: actions.LOAD_PROJECTS, projects})
    })
  }

  render() {
    const {projects} = this.props;
    const projectsArray = arrayFromObject(projects)
    return (
      <main className="container-wrap inside-content">
        <section className="container">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">Blog</h1>
            <ol className="breadcrumb col-sm-12">
              <li><Link to="/">Home</Link></li>
              <li>Portfolio</li>
            </ol>
          </header>
          <div className="inside-body">
            <Row>
              <Col sm={12}>
                <ul className="list-unstyled list-inline row thumbnails-hfixed transit-all">
                  {projectsArray.map(p => (<ProjectCell key={p.id} project={p}/>))}
                </ul>
              </Col>
            </Row>
          </div>
        </section>
      </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectListing);
