// React
import React, {Component} from "react";

// Routing & Links
import {Link} from 'react-router-dom';
import {
  stackOverflow,
  github,
  twitter,
  linkedin,
  medium
} from '../social-links';

class SocialLinks extends Component {
  render() {
    return (
      <ul className="list-unstyled inline-list">
        <li key={0}>
          <Link to={stackOverflow.url} target="_blank" rel="noopener">
            <img src={stackOverflow.icon} alt={stackOverflow.name}/>
          </Link>
        </li>
        <li key={1}>
          <Link to={github.url} target="_blank" rel="noopener">
            <img src={github.icon} alt={github.name}/>
          </Link>
        </li>
        <li key={2}>
          <Link to={twitter.url} target="_blank" rel="noopener">
            <img src={twitter.icon} alt={twitter.name}/>
          </Link>
        </li>
        <li key={3}>
          <Link to={linkedin.url} target="_blank" rel="noopener">
            <img src={linkedin.icon} alt={linkedin.name}/>
          </Link>
        </li>
        <li key={4}>
          <Link to={medium.url} target="_blank" rel="noopener">
            <img src={medium.icon} alt={medium.name}/>
          </Link>
        </li>
      </ul>
    );
  };
}

export default SocialLinks;
