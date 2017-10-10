// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {LinkContainer} from 'react-router-bootstrap';
import {Button, Grid} from 'react-bootstrap';

// Helpers
import {mediaFileUrl} from '../../utils/helpers';

// Strings
import {DOMAIN_NAME} from '../../data/constants';

class Slide extends Component {
  static propTypes = {
    slider: PropTypes.object.isRequired
  }

  generateButton(slider) {
    if (!slider.button_url) {
      return null;
    }
    if (slider.button_url.startsWith(DOMAIN_NAME)) {
      const url = slider.button_url.replace(DOMAIN_NAME, "");
      return (
        <LinkContainer to={url}>
          <Button bsStyle="primary" className="btn-wide">{slider.button_title}</Button>
        </LinkContainer>);
    } else {
      return (<Button href={slider.button_url} target="is_blank" rel="noopener" bsStyle="primary" className="btn-wide">{slider.button_title}</Button>);
    }
  }

  render() {
    const {slider} = this.props;
    const style = {
      backgroundImage: `url("${mediaFileUrl(slider.image_url)}")`
    };
    return (
      <div className="slide-item" style={style}>
        <Grid>
          <div className="slide-text">
            <h2>{slider.title}</h2>
            <p>{slider.subtitle}</p>
            {this.generateButton(slider)}
          </div>
        </Grid>
      </div>
    );
  };
}

export default Slide;
