// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from './actions';

// Components
import NavigationBar from './components/navigation-bar';
import Footer from './components/footer';

// Routing & Links
import {withRouter} from 'react-router-dom';
import Routes from './routes';

// Stylesheets
import './styles/bootstrap.css';
import './styles/app.css';

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
