// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from './actions';

// Helmet
import {Helmet} from "react-helmet";

// Components
import NavigationBar from './components/navigation-bar';
import Footer from './components/footer';

// Routing & Links
import {withRouter} from 'react-router-dom';
import Routes from './routes';

// Stylesheets
import './styles/bootstrap.css';
import './styles/app.css';

// Strings
import {genericStrings, homeStrings} from './strings';

// Helpers
import APIHelper from './utils/api-helpers';

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
        <Helmet>
          <meta name="twitter:site" content={genericStrings.twitter}/>
          <meta name="twitter:creator" content={genericStrings.twitter}/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={genericStrings.name}/>
          <meta name="twitter:description" content={genericStrings.title}/>

          <meta property="og:url" content="https://omaralbeik.com"/>
          <meta property="og:title" content={genericStrings.name}/>
          <meta property="og:description" content={genericStrings.title}/>

          <meta name="description" content={homeStrings.bio}/>
          <meta name="keyword" content={genericStrings.keyword}/>

          <meta name="apple-mobile-web-app-title" content={genericStrings.name}/>
        </Helmet>
        <NavigationBar/>
        <Routes/>
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
