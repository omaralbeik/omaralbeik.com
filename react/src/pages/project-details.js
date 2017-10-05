// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';
import TagList from '../components/tag-list';

// Routing & Links
import {projectsLink, projectLink} from '../links';

// Helpers
import APIHelper from '../utils/api-helpers';
import {mediaFileUrl} from '../utils/helpers';

// Media files
import githubIcon from '../images/social-gt.svg';
import websiteIcon from '../images/social-site.svg';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchProject();
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchProject() {
    const {project_id} = this.props.match.params;
    APIHelper.fetchProject(project_id).then(project => {
      this.props.addProject({type: actions.ADD_PROJECT, project});
    });
  }

  generateProjectText(project) {
    if (project.html_text) {
      return (
        <div>
          <br/>
          <div dangerouslySetInnerHTML={{__html: project.html_text}}/>
        </div>
      );
    }
  }

  generateProjectGithubLink(project) {
    if (project.github_url) {
      return (
        <li><a href={project.github_url} title="See it on GitHub" target="_blank" rel="noopener"><img src={githubIcon} alt="See it on GitHub"></img></a></li>
      );
    }
  }

  generateProjectWebsiteLink(project) {
    if (project.website_url) {
      return (
        <li><a href={project.website_url} title="Visit the website" target="_blank" rel="noopener"><img src={websiteIcon} alt="Visit the website"></img></a></li>
      );
    }
  }

  generateProjectLinks(project) {
    return (
      <div>
        <hr/>
        <h2>Visit project pages</h2>
        <ul className="list-inline list-unstyled thb-icon-list selective-opacity transit-all">
          {this.generateProjectGithubLink(project)}
          {this.generateProjectWebsiteLink(project)}
        </ul>
      </div>
    );
  }

  generateProjectDetails(project, tags) {
    if (!project) {
      return;
    }
    const coverUrl = mediaFileUrl(project.logo_url) || null;
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{projectLink(project).title}</h1>
          <Breadcrumb links={[projectsLink, projectLink(project)]}/>
        </header>
        <div className="inside-body">
          <img src={coverUrl} alt={project.name} className="img-responsive topic-cover edgy"/>
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
              <div className="topic-free-code">
                <h1>{project.name}</h1>
                <h3>{project.summary}</h3>
                {this.generateProjectText(project)}
                {this.generateProjectLinks(project)}
              </div>
            </Col>
          </Row>
        </div>
        <footer className="inside-footer edgy">
          <TagList ids={project.tags} className="tag-list list-unstyled list-inline"/>
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

function mapStateToProps({projects}) {
  return {projects}
}

function mapDispatchToProps(dispatch) {
  return {
    addProject: project => dispatch(actions.addProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetails);
