// React
import React, {Component} from 'react';

// Redux
import {connect} from 'react-redux';
import * as actions from '../actions';

// Routing & Links
import {Link} from 'react-router-dom';

// helpers
import APIHelper from '../utils/api-helpers';

class TagDetails extends Component {
  constructor(props) {
    super(props);
    this.fetchTagProjects();
    this.fetchTagPosts();
    this.fetchTagSchools();
    this.fetchTagCourses();
    this.fetchTagQuotes();
    this.fetchTagBooks();
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  fetchTagProjects() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagProjects(tag_id).then(projects => {
      this.props.loadProjects({type: actions.LOAD_PROJECTS, projects});
    });
  }

  fetchTagPosts() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagPosts(tag_id).then(posts => {
      this.props.loadBlogPosts({type: actions.LOAD_BLOG_POSTS, posts});
    });
  }

  fetchTagSchools() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagSchools(tag_id).then(schools => {
      this.props.loadLearningSchools({type: actions.LOAD_LEARNING_SCHOOLS, schools});
    });
  }

  fetchTagCourses() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagCourses(tag_id).then(courses => {
      this.props.loadLearningCourses({type: actions.LOAD_LEARNING_COURSES, courses});
    });
  }

  fetchTagQuotes() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagQuotes(tag_id).then(quotes => {
      this.props.loadLearningQuotes({type: actions.LOAD_LEARNING_QUOTES, quotes});
    });
  }

  fetchTagBooks() {
    const {tag_id} = this.props.match.params;
    APIHelper.fetchTagBooks(tag_id).then(books => {
    });
  }

  generateTagDetails(tag) {
    if (!tag) {
      return;
    }
    return (
      <section className="container topic">
        <header className="inside-header row">
          <h1 className="content-title col-sm-12">#{tag.name}</h1>
          <ol className="breadcrumb col-sm-12">
            <li><Link to="/">Home</Link></li>
            <li>Tags</li>
            <li>#{tag.name}</li>
          </ol>
        </header>
      </section>
    );
  }

  render() {
    const {tags} = this.props;
    const {tag_id} = this.props.match.params;
    const tag = tags[tag_id];
    return (
      <main className="container-wrap inside-content">
        {this.generateTagDetails(tag)}
      </main>
    )
  }

}

function mapStateToProps({tags, blogPosts, projects, learning}) {
  return {tags, blogPosts, projects, learning}
}

function mapDispatchToProps(dispatch) {
  return {
    loadBlogPosts: posts => dispatch(actions.loadBlogPosts(posts)),
    loadProjects: projects => dispatch(actions.loadProjects(projects)),
    loadLearningSchools: schools => dispatch(actions.loadLearningSchools(schools)),
    loadLearningCourses: courses => dispatch(actions.loadLearningCourses(courses)),
    loadLearningQuotes: quotes => dispatch(actions.loadLearningQuotes(quotes)),
    loadLearningBooks: books => dispatch(actions.loadLearningBooks(books))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDetails);
