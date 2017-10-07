// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Routing & Links
import {Link} from 'react-router-dom';
import {postLink, projectLink, courseLink, bookLink} from '../../links';

class TagItemCell extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  }

  render() {
    const {item} = this.props;

    var title, summary, link;

    switch (item.type) {
      case 'post':
        title = item.title;
        summary = item.summary;
        link = postLink(item);
        break;
      case 'project':
        title = item.name;
        summary = item.summary;
        link = projectLink(item);
        break;
      case 'course':
        title = item.title;
        summary = item.subtitle;
        link = courseLink(item);
        break;
      case 'book':
        title = item.name;
        summary = `by ${item.author}`;
        link = bookLink(item);
        break;
      case 'quote':
        title = item.quote;
        summary = `~ ${item.author}`;
        link = null;
        break;
      default:
        title = null;
        summary = null;
        link = null;
    }
    var titleComponent = link ? (<Link to={link.url}>{title}</Link>) : title;

    return (
      <li className="trl-item">
        <div className="trl-item-type">{item.type.toUpperCase()}</div>
        <h2 className="trl-item-title">{titleComponent}</h2>
        <p className="trl-item-desc">{summary}</p>
      </li>
    );
  };
}

export default TagItemCell;
