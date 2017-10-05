// React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Bootstrap components
import {Button, Grid} from 'react-bootstrap';

// Helpers
import {mediaFileUrl} from '../../utils/helpers';

class Slide extends Component {
  static propTypes = {
    slider: PropTypes.object.isRequired
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
            <Button href={slider.button_url} target="is_blank" rel="noopener" bsStyle="primary" className="btn-wide">{slider.button_title}</Button>
          </div>
        </Grid>
      </div>
    );
  };
}

export default Slide;
