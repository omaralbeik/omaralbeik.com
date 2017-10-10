// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Time from 'react-time';
import Breadcrumb from '../components/breadcrumb';
import TagList from '../components/tag-list';
import SocialShareButtons from '../components/social-share-buttons';

// Routing & Links
import {Link} from 'react-router-dom';
import {projectsLink, projectLink} from '../links';

// Helpers
import APIHelper from '../utils/api-helpers';
import {mediaFileUrl} from '../utils/helpers';

// Media files
import githubIcon from '../images/social-gt.svg';
import websiteIcon from '../images/social-site.svg';

// Strings
import {projectsStrings, genericStrings} from '../strings';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchProject();
  }

  componentWillMount() {
    document.title = projectsLink.documentTitle;
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
        <li><Link to={project.github_url} title="See it on GitHub" target="_blank" rel="noopener"><img src={githubIcon} alt="See it on GitHub"></img></Link></li>
      );
    }
  }

  generateProjectWebsiteLink(project) {
    if (project.website_url) {
      return (
        <li><Link to={project.website_url} title="Visit the website" target="_blank" rel="noopener"><img src={websiteIcon} alt="Visit the website"></img></Link></li>
      );
    }
  }

  generateProjectLinks(project) {
    return (
      <div>
        <hr/>
        <h2>{projectsStrings.visitPage}</h2>
        <ul className="list-inline list-unstyled thb-icon-list selective-opacity transit-all">
          {this.generateProjectGithubLink(project)}
          {this.generateProjectWebsiteLink(project)}
        </ul>
      </div>
    );
  }

  generateProjectLogo(project) {
    const logo = project.logo_url;
    if (logo) {
      return (<img src={mediaFileUrl(logo)} alt={project.name} className="img-responsive topic-cover edgy"/>);
    }
  }

  generateProjectDetails(project, tags) {
    if (!project) {
      return;
    }
    document.title = projectLink(project).documentTitle;
    return (
      <article className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">{projectLink(project).title}</h1>
          <Breadcrumb links={[projectsLink, projectLink(project)]}/>
        </header>
        <div className="inside-body">
          {this.generateProjectLogo(project)}
          <Row className="topic-meta edgy">
            <Col sm={6} className="topic-date">
              <span>{`${genericStrings.released}: `}</span>
              <Time value={project.released_at} format="D/M/YYYY"/>
            </Col>
            <Col sm={6} className="social-wrap">
              <span>{genericStrings.share}</span>
              <SocialShareButtons url={window.location.href} title={project.name} summary={project.summary} tagIds={project.tags}/>
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
