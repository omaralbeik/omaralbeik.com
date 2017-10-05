// React
import React, {Component} from "react";

// Routing & Links
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
          <a href={stackOverflow.url} target="_blank" rel="noopener">
            <img src={stackOverflow.icon} alt={stackOverflow.name}/>
          </a>
        </li>
        <li key={1}>
          <a href={github.url} target="_blank" rel="noopener">
            <img src={github.icon} alt={github.name}/>
          </a>
        </li>
        <li key={2}>
          <a href={twitter.url} target="_blank" rel="noopener">
            <img src={twitter.icon} alt={twitter.name}/>
          </a>
        </li>
        <li key={3}>
          <a href={linkedin.url} target="_blank" rel="noopener">
            <img src={linkedin.icon} alt={linkedin.name}/>
          </a>
        </li>
        <li key={4}>
          <a href={medium.url} target="_blank" rel="noopener">
            <img src={medium.icon} alt={medium.name}/>
          </a>
        </li>
      </ul>
    );
  };
}

export default SocialLinks;
