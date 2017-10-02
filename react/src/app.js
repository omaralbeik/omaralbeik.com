import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import './styles/bootstrap.css';
import './styles/app.css';

import APIHelper from './utils/api-helpers';
import * as actions from './actions';
import NavigationBar from './components/navigation-bar';
import Footer from './components/footer';
import links from './data/links';

import Home from './pages/home';

import BlogPostListing from './pages/blog-post-listing';
import BlogPostDetails from './pages/blog-post-details';

import ProjectListing from './pages/project-listing';
import ProjectDetails from './pages/project-details';

import CourseListing from './pages/course-listing';
import CourseDetails from './pages/course-details';

import BookListing from './pages/book-listing';
import BookDetails from './pages/book-details';

import QuoteListing from './pages/quote-listing';

import Tag from './pages/tag';
import About from './pages/about';
import Contact from './pages/contact';
import Error from './pages/error';

class App extends Component {
  constructor(props) {
    super(props);
    this.fetchTags();
  }

  fetchTags() {
    APIHelper.fetchTags().then(tags => {
      this.props.loadTags({type: actions.LOAD_TAGS, tags});
    });
  }

  render() {
    return (
      <div id="main" className="omaralbeik">
        <NavigationBar/>
        <Switch>
          <Route exact path='/' component={Home}/>

          <Route exact path={links.blog} component={BlogPostListing}/>
          <Route exact path={`${links.blog}/:post_id`} component={BlogPostDetails}/>

          <Route exact path={links.projects} component={ProjectListing}/>
          <Route exact path={`${links.projects}/:project_id`} component={ProjectDetails}/>

          <Route exact path={links.learning} render={() => (<Error error="Page under construction" />)}/>

          <Route exact path={links.courses} component={CourseListing}/>
          <Route exact path={`${links.courses}/:course_id`} component={CourseDetails}/>

          <Route exact path={links.books} component={BookListing}/>
          <Route exact path={`${links.books}/:book_id`} component={BookDetails}/>

          <Route exact path={links.quotes} component={QuoteListing}/>

          <Route exact path={`${links.tags}/:tag_id`} component={Tag}/>

          <Route exact path={links.about} component={About}/>
          <Route exact path={links.contact} component={Contact}/>
          <Route render={() => (<Error error="Page Not Found. aka 404" />)}/>

        </Switch>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps({tags}) {
  return {tags}
}

function mapDispatchToProps(dispatch) {
  return {
    loadTags: tags => dispatch(actions.loadTags(tags))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
