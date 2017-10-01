import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import APIHelper from '../utils/api-helpers';
import * as actions from '../actions';
import links from '../data/links';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchProject();
  }

  fetchProject() {
    const {project_id} = this.props.match.params;
    APIHelper.fetchProject(project_id).then(project => {
      this.props.addProject({type: actions.ADD_PROJECT, project});
    });
  }

  generateTags(tagIds, tags) {
    if (tagIds && tags) {
      return tagIds.map(id => {
        const tag = tags[id];
        if (tag) {
          return (<li key={id}><a href="/">#{tag.name}</a></li>);
        } else {
          return null;
        }
      });
    }
  }

  generateProjectDetails(project, tags) {
    if (!project) {
      return;
    }
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{project.name}</h1>
          <ol className="breadcrumb col-sm-12">
            <li><Link to="/">Home</Link></li>
            <li><Link to={links.projects}>Portfolio</Link></li>
            <li>{project.name}</li>
          </ol>
        </header>
        <div className="inside-body">
          <Row className="topic-meta edgy">
            <Col sm={6} className="topic-date">
              <span>Released: </span>
              <time dateTime={project.released_at}>{project.released_at}</time>
            </Col>
            <Col sm={6} className="social-wrap">
              <span>Share</span>
              <ul className="list-unstyled list-inline social-share selective-opacity transit-quick-all"></ul>
            </Col>
          </Row>
          <Row className="topic-content edgy">
            <Col sm={12}>
              <div
                className="topic-free-code"
                dangerouslySetInnerHTML={{__html: project.html_text}}/>
            </Col>
          </Row>
        </div>
        <footer className="inside-footer edgy">
          <ul className="tag-list list-unstyled list-inline">
            {this.generateTags(project.tags, tags)}
          </ul>
        </footer>
      </article>
    );
  }

  render() {
    const {projects, tags} = this.props;
    const {project_id} = this.props.match.params;

    const project = projects[project_id];

    return (
      <main className="container-wrap inside-content">
        {this.generateProjectDetails(project, tags)}
      </main>
    )
  }
}

function mapStateToProps({projects, tags}) {
  return {projects, tags}
}

function mapDispatchToProps(dispatch) {
  return {
    addProject: project => dispatch(actions.addProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
