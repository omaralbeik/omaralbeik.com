<p align="center">
  <img src="https://cdn.rawgit.com/omaralbeik/omaralbeik.com/client/react/assets/client-banner.svg" title="Client logo">
</p>



## Table of Contents

- [**Features**](#features)
- [**Structure**](#structure)
  - [Pages](#pages)
  - [Components](#components)
- [**Before Starting**](#before-starting)
- [**Getting Started**](#getting-started)
- [**Make it Yours**](#make-it-yours)
- [**Contributing**](#contributing)
- [**License**](#license)



## Features

- Single page web application using React.
- Progressive web app (PWA).
- Fully Written in ES6.
- Client-side routing using React router.
- State management using Redux.
- Google Analytics support.
- Customizable design.
- Fully responsive design with the help of Bootstrap.

## Structure

#### [Pages](https://github.com/omaralbeik/omaralbeik.com/tree/master/react/src/pages)
- Home
- BlogListing
- BlogDetails
- ProjectListing
- ProjectDetails
- CourseListing
- CourseDetails
- BookListing
- BookDetails
- TagListing
- TagDetails
- About
- Contact
- Error

#### [Components](https://github.com/omaralbeik/omaralbeik.com/tree/master/react/src/components)
- NavigationBar
- Breadcrumb
- Home
  - Slider
  - Slide
  - AboutMe
  - LatestBlogPosts
  - LatestProjects
  - CurrentCourse
- Blog
  - PostCell
- Projects
  - ProjectCell
- Learning
  - CourseCell
  - BookCell
  - QuoteCell
- Tags
  - TagItemCell
- TagList
- SocialButtons
- Footer

#### Dependencies
This project is built using React JS, Redux and other dependencies.

Complete list of 3rd party dependencies can be found in [**package.json**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/package.json)




## Before Starting
- Make sure Django local server is running before starting the React application. [more info](https://github.com/omaralbeik/omaralbeik.com/blob/master/django/README.md)
- Replace `API_AUTH_TOKEN` in [**data/constants.js**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/src/data/constants.js) with the one you created from Django admin.



## Getting Started

#### React Setup
1. This app requires **npm** to build, if **Node** and **npm** are not installed on your device, you should install them first [more info here](https://docs.npmjs.com/getting-started/installing-node)
2. Move to project directory and install required npm packages
``` bash
npm i
```

#### Start React development server
Run React server
```bash
npm run start
```

#### Create a production build
To create a production build, use:
```bash
npm run build
```



## Make it yours!

- Customize website look and feel by changing [**app.css**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/src/styles/app.css).
- Change the language or localize the app by updating [**strings/index.js**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/src/strings/index.js).
- Update social links in [**social-links/index.js**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/src/social-links/index.js).
- Add your email in [**data/constants.js**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/src/data/constants.js).
- Add your Google Analytics tracking code in [**public/index.html**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/public/index.html).



## Contributing

Your feedback is always appreciated and welcomed. If you find a bug in the source code or a mistake in the documentation, you can help me by submitting an issue [**here**](https://github.com/omaralbeik/omaralbeik.com/issues). Even better you can submit a Pull Request with a fix :)



## License

This repo is released under the [MIT License](https://github.com/omaralbeik/omaralbeik.com/blob/master/LICENSE).
