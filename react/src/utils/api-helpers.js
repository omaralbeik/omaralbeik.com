import {API_AUTH_TOKEN} from '../data/constants';

/**
 * Common API helper functions.
 */
class APIHelper {

  static get BASE_URL() {
    return 'https://api.omaralbeik.com'
  }

  static get API_URL() {
    return 'https://api.omaralbeik.com/v1/';
  }

  static get PROJECTS_URL() {
    return `${this.API_URL}projects/`;
  }

  static get LATEST_PROJECTS_URL() {
    return `${this.PROJECTS_URL}latest/`;
  }

  static get TAGS_URL() {
    return `${this.API_URL}tags/`;
  }


  static get BLOG_URL() {
    return `${this.API_URL}blog/`;
  }

  static get BLOG_POSTS_URL() {
    return `${this.API_URL}blog/posts/`;
  }

  static get LATEST_BLOG_POSTS_URL() {
    return `${this.BLOG_POSTS_URL}latest/`;
  }


  static get LEARNING_URL() {
    return `${this.API_URL}learning/`;
  }

  static get SCHOOLS_URL() {
    return `${this.LEARNING_URL}schools/`;
  }

  static get COURSES_URL() {
    return `${this.LEARNING_URL}courses/`;
  }

  static get CURRENT_COURSES_URL() {
    return `${this.COURSES_URL}current/`;
  }

  static get QUOTES_URL() {
    return `${this.LEARNING_URL}quotes/`;
  }

  static get BOOKS_URL() {
    return `${this.LEARNING_URL}books/`;
  }

  static get SLIDERS_URL() {
    return `${this.API_URL}sliders/`;
  }

  /**
   * Get all projects.
   */
  static fetchProjects() {
    return this._fetchObject(this.PROJECTS_URL);
  }

  /**
   * Get latest 3 projects.
   */
  static fetchLatestProjects() {
    return this._fetchObject(this.LATEST_PROJECTS_URL);
  }

  /**
   * Get a project by id.
   */
  static fetchProject(project_id) {
    return this._fetchObject(this.PROJECTS_URL, project_id);
  }

  /**
   * Get all tags for a project.
   */
  static fetchProjectTags(project_id) {
    return this._fetchObject(this.PROJECTS_URL, project_id, 'tags');
  }


  /**
   * Get all blog posts.
   */
  static fetchBlogPosts() {
    return this._fetchObject(this.BLOG_POSTS_URL);
  }

  /**
   * Get latest 2 blog posts.
   */
  static fetchLatestBlogPosts() {
    return this._fetchObject(this.LATEST_BLOG_POSTS_URL);
  }

  /**
   * Get a blog post by id.
   */
  static fetchBlogPost(post_id) {
    return this._fetchObject(this.BLOG_POSTS_URL, post_id);
  }

  /**
   * Get all tags for a blog post.
   */
  static fetchBlogPostTags(post_id) {
    return this._fetchObject(this.BLOG_POSTS_URL, post_id, 'tags');
  }

  /**
   * Get all schools.
   */
  static fetchSchools() {
    return this._fetchObject(this.SCHOOLS_URL);
  }

  /**
   * Get a school by id.
   */
  static fetchSchool(school_id) {
    return this._fetchObject(this.SCHOOLS_URL, school_id);
  }

  /**
   * Get all courses for a school.
   */
  static fetchSchoolCourses(school_id) {
    return this._fetchObject(this.SCHOOLS_URL, school_id, 'courses');
  }

  /**
   * Get all tags for a school.
   */
  static fetchSchoolTags(school_id) {
    return this._fetchObject(this.SCHOOLS_URL, school_id, 'tags');
  }


  /**
   * Get all courses.
   */
  static fetchCourses() {
    return this._fetchObject(this.COURSES_URL);
  }

  /**
   * Get all current courses.
   */
  static fetchCurrentCourses() {
    return this._fetchObject(this.CURRENT_COURSES_URL);
  }

  /**
   * Get a course by id.
   */
  static fetchCourse(course_id) {
    return this._fetchObject(this.COURSES_URL, course_id);
  }

  /**
   * Get course's school info.
   */
  static fetchCourseSchool(course_id) {
    return this._fetchObject(this.COURSES_URL, course_id, 'school');
  }

  /**
   * Get all tags for a course.
   */
  static fetchCourseTags(course_id) {
    return this._fetchObject(this.COURSES_URL, course_id, 'tags');
  }


  /**
   * Get all Quotes.
   */
  static fetchQuotes() {
    return this._fetchObject(this.QUOTES_URL);
  }

  /**
   * Get a quote by id.
   */
  static fetchQuote(quote_id) {
    return this._fetchObject(this.QUOTES_URL, quote_id);
  }

  /**
   * Get all tags for a quote.
   */
  static fetchQuoteTags(quote_id) {
    return this._fetchObject(this.QUOTES_URL, quote_id, 'tags');
  }


  /**
   * Get all books.
   */
  static fetchBooks() {
    return this._fetchObject(this.BOOKS_URL);
  }

  /**
   * Get a book by id.
   */
  static fetchBook(book_id) {
    return this._fetchObject(this.BOOKS_URL, book_id);
  }

  /**
   * Get all tags for a book.
   */
  static fetchBookTags(book_id) {
    return this._fetchObject(this.BOOKS_URL, book_id, 'tags');
  }

  /**
   * Get all home page slider's slids.
   */
  static fetchSliders() {
    return this._fetchObject(this.SLIDERS_URL);
  }

  /**
   * Get a home page slider's slide by id.
   */
  static fetchSlider(slider_id) {
    return this._fetchObject(this.SLIDERS_URL, slider_id);
  }

  /**
   * Get all tags.
   */
  static fetchTags() {
    return this._fetchObject(this.TAGS_URL);
  }

  /**
   * Get a tag by id.
   */
  static fetchTag(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id);
  }

  /**
   * Get all projects for a tag.
   */
  static fetchTagProjects(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'projects');
  }

  /**
   * Get all blog posts for a tag.
   */
  static fetchTagPosts(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'posts');
  }

  /**
   * Get all schools for a tag.
   */
  static fetchTagSchools(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'schools');
  }

  /**
   * Get all courses for a tag.
   */
  static fetchTagCourses(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'courses');
  }

  /**
   * Get all quotes for a tag.
   */
  static fetchTagQuotes(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'quotes');
  }

  /**
   * Get all books for a tag.
   */
  static fetchTagBooks(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'books');
  }


  /**
   * Helper function to fetch object/s from a URL.
   */
  static _fetchObject(url, id = null, child = null) {
    return new Promise(function(resolve, reject) {
      let completeUrl = url;
      if (id) {
        completeUrl += id;
      }
      if (child) {
        completeUrl += `/${child}/`
      }
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `Token ${API_AUTH_TOKEN}`);

      var init = { method: 'GET', headers: headers};
      fetch(completeUrl, init).then((response) => {
        return response.json();
      }).then((data) => {
        // response is an array of objects
        if (Array.isArray(data)) {
          resolve(data);
          return;
        }

        // response has pagination and results
        const {results} = data;
        if (results) {
          resolve(results);
          return;
        }

        // response is a single object
        if (data.id) {
          resolve(data);
          return;
        }

        // response is not valid
        reject('No Results');

      }).catch((error) => {
        reject(error);
      });
    });
  }

}

export default APIHelper;
