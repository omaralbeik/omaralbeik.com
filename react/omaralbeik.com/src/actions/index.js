/**
 * Actions
 */
export const LOAD_BLOG_POSTS = 'LOAD_BLOG_POSTS';
export const ADD_BLOG_POST = 'ADD_BLOG_POST';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const ADD_PROJECT = 'ADD_PROJECT';

export const LOAD_LEARNING_BOOKS = 'LOAD_LEARNING_BOOKS';
export const ADD_LEARNING_BOOK = 'ADD_LEARNING_BOOK';

export const LOAD_LEARNING_SCHOOLS = 'LOAD_LEARNING_SCHOOLS';
export const ADD_LEARNING_SCHOOL = 'ADD_LEARNING_SCHOOL';

export const LOAD_LEARNING_COURSES = 'LOAD_LEARNING_COURSES';
export const ADD_LEARNING_COURSE = 'ADD_LEARNING_COURSE';

export const LOAD_LEARNING_QUOTES = 'LOAD_LEARNING_QUOTES';
export const ADD_LEARNING_QUOTE = 'ADD_LEARNING_QUOTE';

export const LOAD_TAGS = 'LOAD_TAGS';
export const ADD_TAG = 'ADD_TAG'


/**
 * Action Creators
 */
export function loadBlogPosts({posts}) {
  return {type: LOAD_BLOG_POSTS, posts};
}

export function addBlogPost({post}) {
  return {type: ADD_BLOG_POST, post};
}

export function loadProjects({projects}) {
  return {type: LOAD_PROJECTS, projects};
}

export function addProject({project}) {
  return {type: ADD_PROJECT, project};
}

export function loadLearningBooks({books}) {
  return {type: LOAD_LEARNING_BOOKS, books};
}

export function addLearningBook({book}) {
  return {type: ADD_LEARNING_BOOK, book};
}

export function loadLearningSchools({schools}) {
  return {type: LOAD_LEARNING_SCHOOLS, schools};
}

export function addLearningSchool({school}) {
  return {type: ADD_LEARNING_SCHOOL, school};
}

export function loadLearningCourses({courses}) {
  return {type: LOAD_LEARNING_COURSES, courses};
}

export function addLearningCourse({course}) {
  return {type: ADD_LEARNING_COURSE, course};
}

export function loadLearningQuotes({quotes}) {
  return {type: LOAD_LEARNING_QUOTES, quotes};
}

export function addLearningQuote({quote}) {
  return {type: ADD_LEARNING_QUOTE, quote};
}

export function loadTags({tags}) {
  return {type: LOAD_TAGS, tags};
}

export function addTag({tag}) {
  return {type: ADD_TAG, tag};
}
