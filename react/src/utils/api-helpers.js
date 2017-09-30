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

  static get AUTH_TOKEN() {
    return 'f3916548fc183f4f9c6eacd4cb5f7fb693de8a99';
  }

  static get PROJECTS_URL() {
    return `${this.API_URL}projects/`;
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


  static get LEARNING_URL() {
    return `${this.API_URL}learning/`;
  }

  static get SCHOOLS_URL() {
    return `${this.LEARNING_URL}schools/`;
  }

  static get COURSES_URL() {
    return `${this.LEARNING_URL}courses/`;
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

  static fetchProjects() {
    return this._fetchObject(this.PROJECTS_URL);
  }

  static fetchProject(project_id) {
    return this._fetchObject(this.PROJECTS_URL, project_id);
  }

  static fetchProjectTags(project_id) {
    return this._fetchObject(this.PROJECTS_URL, project_id, 'tags');
  }



  static fetchBlogPosts() {
    return this._fetchObject(this.BLOG_POSTS_URL);
  }

  static fetchBlogPost(post_id) {
    return this._fetchObject(this.BLOG_POSTS_URL, post_id);
  }

  static fetchBlogPostTags(post_id) {
    return this._fetchObject(this.BLOG_POSTS_URL, post_id, 'tags');
  }



  static fetchSchools() {
    return this._fetchObject(this.SCHOOLS_URL);
  }

  static fetchSchool(school_id) {
    return this._fetchObject(this.SCHOOLS_URL, school_id);
  }

  static fetchSchoolCourses(school_id) {
    return this._fetchObject(this.SCHOOLS_URL, school_id, 'courses');
  }

  static fetchSchoolTags(school_id) {
    return this._fetchObject(this.SCHOOLS_URL, school_id, 'tags');
  }



  static fetchCourses() {
    return this._fetchObject(this.COURSES_URL);
  }

  static fetchCourse(course_id) {
    return this._fetchObject(this.COURSES_URL, course_id);
  }

  static fetchCourseSchool(course_id) {
    return this._fetchObject(this.COURSES_URL, course_id, 'school');
  }

  static fetchCourseTags(course_id) {
    return this._fetchObject(this.COURSES_URL, course_id, 'tags');
  }



  static fetchQuotes() {
    return this._fetchObject(this.QUOTES_URL);
  }

  static fetchQuote(quote_id) {
    return this._fetchObject(this.QUOTES_URL, quote_id);
  }

  static fetchQuoteTags(quote_id) {
    return this._fetchObject(this.QUOTES_URL, quote_id, 'tags');
  }



  static fetchBooks() {
    return this._fetchObject(this.BOOKS_URL);
  }

  static fetchBook(book_id) {
    return this._fetchObject(this.BOOKS_URL, book_id);
  }

  static fetchBookTags(book_id) {
    return this._fetchObject(this.BOOKS_URL, book_id, 'tags');
  }


  static fetchSliders() {
    return this._fetchObject(this.SLIDERS_URL);
  }

  static fetchSlider(slider_id) {
    return this._fetchObject(this.SLIDERS_URL, slider_id);
  }


  static fetchTags() {
    return this._fetchObject(this.TAGS_URL);
  }

  static fetchTag(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id);
  }

  static fetchTagProjects(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'projects');
  }

  static fetchTagPosts(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'posts');
  }

  static fetchTagSchools(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'schools');
  }

  static fetchTagCourses(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'courses');
  }

  static fetchTagQuotes(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'quotes');
  }

  static fetchTagBooks(tag_id) {
    return this._fetchObject(this.TAGS_URL, tag_id, 'books');
  }


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
      headers.append('Authorization', `Token ${APIHelper.AUTH_TOKEN}`);

      var init = { method: 'GET', headers: headers};

      fetch(completeUrl, init).then((response) => {
        return response.json();
      }).then((data) => {
        const {results} = data;
        if (results) {
          resolve(results);
        } else {
          reject('No Results');
        }
      }).catch((error) => {
        reject(error);
      });
    });
  }

}

export default APIHelper;
