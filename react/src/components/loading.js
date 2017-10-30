// React
import React, {Component} from 'react';

// Components
import ReactLoading from 'react-loading';

class Loading extends Component {
  render() {
    return <ReactLoading type="bubbles" color="#aaa" className="loading"/>;
  }
}

export default Loading;
