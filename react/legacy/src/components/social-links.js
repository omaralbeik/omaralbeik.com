import React, {Component} from "react";
import FontAwesome from "react-fontawesome";
import links from "../data/social-links";

class SocialLinks extends Component {
  render() {
    return (
      <ul className="list-unstyled inline-list">
        <li key={0}>
          <a href={links.stackOverflow} target="_blank"><FontAwesome name="stack-overflow" title="Stack Overflow" size="2x"/></a>
        </li>
        <li key={1}>
          <a href={links.github} target="_blank"><FontAwesome name="github" title="Github" size="2x"/></a>
        </li>
        <li key={2}>
          <a href={links.twitter} target="_blank"><FontAwesome name="twitter" title="Twitter" size="2x"/></a>
        </li>
        <li key={3}>
          <a href={links.linkedin} target="_blank"><FontAwesome name="linkedin" title="linkedin" size="2x"/></a>
        </li>
        <li key={4}>
          <a href={links.medium} target="_blank"><FontAwesome name="medium" title="Medium" size="2x"/></a>
        </li>
      </ul>
    );
  };
}

export default SocialLinks;
