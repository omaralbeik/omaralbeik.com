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
import BlogListing from './pages/blog-listing';
import ProjectListing from './pages/project-listing';
import ProjectDetails from './pages/project-details';

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
          <Route exact path={links.blog} component={BlogListing}/>
          <Route exact path={links.projects} component={ProjectListing}/>
          <Route exact path={`${links.projects}/:project_id`} component={ProjectDetails}/>
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
