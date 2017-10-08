![omaralbeik.com client logo](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/assets/logo_client.png)

# omaralbeik.com | Web Client
Single page web application with React and Redux.

## Main Features

- Single page application using React.
- Client-side routing using React router.
- State management using Redux.
- Fully responsive design with the help of Bootstrap.

### Pages
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

### React Components structure
![React Components structure](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/assets/react_components.png)


## Before Starting
- Make sure Django local server is running before starting the React application. [more info](https://github.com/omaralbeik/omaralbeik.com/blob/master/django/README.md)
- Replace `API_AUTH_TOKEN` in [**data/constants.js**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/src/data/constants.js) with the one you created from Django admin.


## Running Instructions

### React Setup
1. This app requires **npm** to build, if **Node** and **npm** are not installed on your device, you should install them first [more info here](https://docs.npmjs.com/getting-started/installing-node)
2. Move to project directory and install required npm packages
``` bash
npm i
```

### Start React development server
Run React server
```bash
npm run start
```

### Create a production build
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

## Dependencies
This project is built using React JS, Redux and other dependencies.

Complete list of 3rd party dependencies can be found in [**package.json**](https://github.com/omaralbeik/omaralbeik.com/blob/master/react/package.json)


## Get involved
Your feedback is always appreciated and welcomed. If you find a bug in the source code or a mistake in the documentation, you can help me by submitting an issue [**here**](https://github.com/omaralbeik/omaralbeik.com/issues). Even better you can submit a Pull Request with a fix :)
