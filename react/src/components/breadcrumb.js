// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Routing & Links
import {Link} from 'react-router-dom';
import {homeLink} from '../links';

class Breadcrumb extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired
  }

  render() {
    const {links} = this.props;
    return (
      <ol className="breadcrumb col-sm-12">
        <li key={0}><Link to={homeLink.url}>{homeLink.name}</Link></li>
        {links.map((l,i) => {
          if (i + 1 === links.length) {
            return (<li key={i+1}>{l.name}</li>);
          } else {
            return (<li key={i+1}><Link to={l.url}>{l.name}</Link></li>);
          }
        })}
      </ol>
    )
  }
}

export default Breadcrumb;
