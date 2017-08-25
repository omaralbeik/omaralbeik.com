import React, {Component} from 'react';

import {connect} from 'react-redux';

import {arrayFromObject} from '../utils/helpers';

class HomePage extends Component {

  render() {
    const {tags} = this.props
    const tagsArray = arrayFromObject(tags);
    return (
      <div>
        <h1>All Tags</h1>
        <ol>
          {tagsArray.map(t => (<li key={t.id}>{t.name}</li>))}
        </ol>
      </div>
    )
  }
}

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(HomePage);
