// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Bootstrap components
import {Row, Col} from 'react-bootstrap';

// Components
import Breadcrumb from '../components/breadcrumb';

// Routing & Links
import {Link} from 'react-router-dom';
import {tagsLink, tagLink} from '../links';

// Helper
import {arrayFromObject} from '../utils/helpers';
import APIHelper from '../utils/api-helpers';

class TagListing extends Component {
  constructor(props) {
    super(props);
    this.fetchTags();
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  fetchTags() {
    APIHelper.fetchTags().then(tags => {
      this.props.loadTags({type: actions.LOAD_TAGS, tags})
    })
  }

  render() {
    const {tags} = this.props;
    const tagsArray = arrayFromObject(tags)
    return (
      <main className="container-wrap inside-content">
        <section className="container topic">
          <header className="inside-header row">
            <h1 className="content-title col-sm-12">{tagsLink.title}</h1>
            <Breadcrumb links={[tagsLink]}/>
          </header>
          <div className="inside-body">
            <Row className="topic-content edgy">
              <Col sm={12}>
                <ul className="list-unstyled quote-listing tags-listing">
                  {tagsArray.map(t => (<li key={t.id}><Link to={tagLink(t).url}>#{t.name}</Link></li>))}
                </ul>
              </Col>
            </Row>
          </div>
        </section>
      </main>
    )
  }
}

function mapStateToProps({tags}) {
  return {tags}
}

function mapDispatchToProps(dispatch) {
  return {
    loadTags: tags => dispatch(actions.loadTags(tags))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagListing);
