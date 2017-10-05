export const homeLink = {
  name: 'Home',
  title: 'Home',
  url: '/'
}

export const blogLink = {
  name: 'Blog',
  title: 'Blog',
  url: '/blog'
};

export function postLink(p) {
  return {
    name: p.title,
    title: p.title,
    url: `${blogLink.url}/${p.id}`
  };
};

export const projectsLink = {
  name: 'Portfolio',
  title: 'Portfolio',
  url: '/projects'
};

export function projectLink(p) {
  return {
    name: p.name,
    title: p.name,
    url: `${projectsLink.url}/${p.id}`
  };
};

export const tagsLink = {
  name: 'Tags',
  title: 'Tags',
  url: '/tags'
};

export function tagLink(t) {
  return {
    name: t.title,
    title: t.title,
    url: `${tagsLink.url}/${t.id}`
  };
};

export const aboutLink = {
  name: 'About',
  title: 'About',
  url: '/about'
};

export const contactLink = {
  name: 'Contact',
  title: 'Get In Touch',
  url: '/contact'
};

export const learningLink = {
  name: 'Learning',
  title: 'Learning',
  url: '/learning'
};

export const coursesLink = {
  name: 'Courses',
  title: 'Courses',
  url: `${learningLink.url}/courses`
}

export function courseLink(c) {
  return {
    name: c.name,
    title: c.name,
    url: `${coursesLink.url}/${c.id}`
  };
}

export const quotesLink = {
  name: 'Quotes',
  title: 'Favorite Quotes',
  url: `${learningLink.url}/quotes`
}

export const booksLink = {
  name: 'Books',
  title: 'Favorite Books',
  url: `${learningLink.url}/books`
}

export function bookLink(b) {
  return {
    name: b.name,
    title: b.name,
    subtitle: b.author,
    url: `${booksLink.url}/${b.id}`
  };
}

export const repoLink = {
  name: 'Github',
  url: 'https://github.com/omaralbeik/omaralbeik.com'
};
