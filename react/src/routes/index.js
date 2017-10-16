// React
import React, {Component} from 'react';

// Routing & Links
import {Switch, Route} from 'react-router-dom';
import * as links from '../links';

// Google Analytics
import ReactGA from 'react-ga';
import {GA_TRACKING_NUMBER} from '../data/constants';

// Pages
import Home from '../pages/home';
import BlogPostListing from '../pages/blog-post-listing';
import BlogPostDetails from '../pages/blog-post-details';
import ProjectListing from '../pages/project-listing';
import ProjectDetails from '../pages/project-details';
import Learning from '../pages/learning';
import CourseListing from '../pages/course-listing';
import CourseDetails from '../pages/course-details';
import BookListing from '../pages/book-listing';
import BookDetails from '../pages/book-details';
import QuoteListing from '../pages/quote-listing';
import TagListing from '../pages/tag-listing';
import TagDetails from '../pages/tag-details';
import About from '../pages/about';
import Contact from '../pages/contact';
import Error from '../pages/error';

// Strings
import {errorStrings} from '../strings';

// Initilize Google Analytics
/**
 * Add this to enable debugging messages in the console
 *
 * ReactGA.initialize(GA_TRACKING_NUMBER, {
 *  cookieDomain: 'auto',
 *  debug: true
 * });
 *
 **/
ReactGA.initialize(GA_TRACKING_NUMBER);


class Routes extends Component {

  logPageView() {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
    return null;
  }

  render() {
    return (
      <div>
        <Route path={links.homeLink.url} component={this.logPageView} />
        <Switch>
        <Route exact path={links.homeLink.url} component={Home}/>

        <Route exact path={links.blogLink.url} component={BlogPostListing}/>
        <Route exact path={`${links.blogLink.url}/:post_id`} component={BlogPostDetails}/>

        <Route exact path={links.projectsLink.url} component={ProjectListing}/>
        <Route exact path={`${links.projectsLink.url}/:project_id`} component={ProjectDetails}/>

        <Route exact path={links.learningLink.url} component={Learning}/>

        <Route exact path={links.coursesLink.url} component={CourseListing}/>
        <Route exact path={`${links.coursesLink.url}/:course_id`} component={CourseDetails}/>

        <Route exact path={links.booksLink.url} component={BookListing}/>
        <Route exact path={`${links.booksLink.url}/:book_id`} component={BookDetails}/>

        <Route exact path={links.quotesLink.url} component={QuoteListing}/>

        <Route exact path={links.tagsLink.url} component={TagListing}/>
        <Route exact path={`${links.tagsLink.url}/:tag_id`} component={TagDetails}/>

        <Route exact path={links.aboutLink.url} component={About}/>
        <Route exact path={links.contactLink.url} component={Contact}/>
        <Route render={() => (<Error error={errorStrings.notFound}/>)}/>

      </Switch>
      </div>
    );
  }
}

export default Routes;
