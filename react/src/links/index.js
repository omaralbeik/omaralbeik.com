import {genericStrings} from '../strings';

export const homeLink = {
  name: 'Home',
  title: 'Home',
  url: '/',
  documentTitle: `${genericStrings.name} | ${genericStrings.title}`
}

export const blogLink = {
  name: 'Blog',
  title: 'Blog',
  url: '/blog',
  documentTitle: `Blog | ${genericStrings.name}`
};

export function postLink(p) {
  return {
    name: p.title,
    title: p.title,
    url: `${blogLink.url}/${p.url_title}`,
    documentTitle: `${p.title} | ${genericStrings.name}`
  };
};

export const projectsLink = {
  name: 'Portfolio',
  title: 'Portfolio',
  url: '/projects',
  documentTitle: `Portfolio | ${genericStrings.name}`
};

export function projectLink(p) {
  return {
    name: p.name,
    title: p.name,
    url: `${projectsLink.url}/${p.url_name}`,
    documentTitle: `${p.name} | ${genericStrings.name}`
  };
};

export const tagsLink = {
  name: 'Tags',
  title: 'Tags',
  url: '/tags',
  documentTitle: `Tags | ${genericStrings.name}`
};

export function tagLink(t) {
  return {
    name: t.name,
    title: `#${t.name}`,
    url: `${tagsLink.url}/${t.url_name}`,
    documentTitle: `${t.name} | ${genericStrings.name}`
  };
};

export const aboutLink = {
  name: 'About',
  title: 'About',
  url: '/about',
  documentTitle: `About | ${genericStrings.name}`
};

export const contactLink = {
  name: 'Contact',
  title: 'Get In Touch',
  url: '/contact',
  documentTitle: `Contact | ${genericStrings.name}`
};

export const learningLink = {
  name: 'Learning',
  title: 'Learning',
  url: '/learning',
  documentTitle: `Learning | ${genericStrings.name}`
};

export const coursesLink = {
  name: 'Courses',
  title: 'Courses',
  url: `${learningLink.url}/courses`,
  documentTitle: `Courses | ${genericStrings.name}`
}

export function courseLink(c) {
  return {
    name: c.title,
    title: c.title,
    subtitle: c.subtitle,
    url: `${coursesLink.url}/${c.url_title}`,
    documentTitle: `${c.title} | ${genericStrings.name}`
  };
}

export const quotesLink = {
  name: 'Quotes',
  title: 'Favorite Quotes',
  url: `${learningLink.url}/quotes`,
  documentTitle: `Favorite Quotes | ${genericStrings.name}`
}

export const booksLink = {
  name: 'Books',
  title: 'Favorite Books',
  url: `${learningLink.url}/books`,
  documentTitle: `Favorite Books | ${genericStrings.name}`
}

export function bookLink(b) {
  return {
    name: b.name,
    title: b.name,
    subtitle: b.author,
    url: `${booksLink.url}/${b.url_name}`,
    documentTitle: `${b.name} | ${genericStrings.name}`
  };
}

export const repoLink = {
  name: 'Github',
  url: 'https://github.com/omaralbeik/omaralbeik.com'
};
