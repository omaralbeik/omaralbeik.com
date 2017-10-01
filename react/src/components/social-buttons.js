import React, {Component} from "react";
import links from "../data/links";

import stackOverflow from '../images/social-so.svg';
import github from '../images/social-gt.svg';
import twitter from '../images/social-tw.svg';
import linkedin from '../images/social-in.svg';
import medium from '../images/social-md.svg';


class SocialLinks extends Component {
  render() {
    return (
      <ul className="list-unstyled inline-list">
        <li key={0}>
          <a href={links.stackOverflow} target="_blank" rel="noopener"><img src={stackOverflow} alt="Stack Overflow"/></a>
        </li>
        <li key={1}>
          <a href={links.github} target="_blank" rel="noopener"><img src={github} alt="Github"/></a>
        </li>
        <li key={2}>
          <a href={links.twitter} target="_blank" rel="noopener"><img src={twitter} alt="Twitter"/></a>
        </li>
        <li key={3}>
          <a href={links.linkedin} target="_blank" rel="noopener"><img src={linkedin} alt="LinkedIn"/></a>
        </li>
        <li key={4}>
          <a href={links.medium} target="_blank" rel="noopener"><img src={medium} alt="Medium"/></a>
        </li>
      </ul>
    );
  };
}

export default SocialLinks;
