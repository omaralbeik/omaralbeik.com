import React, {Component} from 'react';

import {Switch, Route, withRouter} from 'react-router-dom';

import NavigationBar from './components/navigation-bar';
import Footer from './components/footer';

import HomePage from './pages/home';
import PortfolioPage from './pages/portfolio';
import BlogPage from './pages/blog';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';

import {connect} from 'react-redux';

import APIHelper from './utils/api-helper';
import * as actions from './actions';

import './styles/bootstrap.scss';
import './styles/app.scss';

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
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/portfolio' component={PortfolioPage}/>
          <Route exact path='/blog' component={BlogPage}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/contact' component={ContactPage}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps() {}

function mapDispatchToProps(dispatch) {
  return {
    loadTags: tags => dispatch(actions.loadTags(tags))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
