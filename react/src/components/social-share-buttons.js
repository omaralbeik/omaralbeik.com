// React
import React, {Component} from "react";
import PropTypes from 'prop-types';

// Redux
import {connect} from 'react-redux';

// Components
import {
  ShareButtons,
  generateShareIcon,
} from 'react-share';


// Social buttons
const {
  FacebookShareButton,
  TwitterShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,
} = ShareButtons;

// Social button icons
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const RedditIcon = generateShareIcon('reddit');
const EmailIcon = generateShareIcon('email');


class SocialShareButtons extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    summary: PropTypes.string,
    tagIds: PropTypes.array
  }

  render() {
    const buttonSize = 28
    const {url, title, summary, tagIds, tags} = this.props;
    const hashtags = tagIds.map(i => tags[i].url_name);

    const emailSummary = `${title}\n${summary}\n\n${url}`;
    return (
      <ul className="list-unstyled list-inline social-share selective-opacity transit-quick-all">
        <li key="Facebook share button">
          <FacebookShareButton className="share-button" url={url} quote={title}>
            <FacebookIcon size={buttonSize} round/>
          </FacebookShareButton>
        </li>
        <li key="Twitter share button">
          <TwitterShareButton className="share-button" url={url} title={title} hashtags={hashtags}>
            <TwitterIcon size={buttonSize} round/>
          </TwitterShareButton>
        </li>
        <li key="Google Plus share button">
          <GooglePlusShareButton className="share-button" url={url}>
            <GooglePlusIcon size={buttonSize} round/>
          </GooglePlusShareButton>
        </li>
        <li key="LinkedIn share button">
          <LinkedinShareButton className="share-button" url={url} title={title} description={summary} windowWidth={750} windowHeight={600}>
            <LinkedinIcon size={buttonSize} round/>
          </LinkedinShareButton>
        </li>
        <li key="Reddit share button">
          <RedditShareButton className="share-button" url={url} title={title} windowWidth={660} windowHeight={460}>
            <RedditIcon size={buttonSize} round />
          </RedditShareButton>
        </li>
        <li key="Email share button">
          <EmailShareButton className="share-button" url={url} subject={title} body={emailSummary}>
            <EmailIcon size={buttonSize} round />
          </EmailShareButton>
        </li>
      </ul>
    );
  };
}

function mapStateToProps({tags}) {
  return {tags}
}

export default connect(mapStateToProps)(SocialShareButtons);
