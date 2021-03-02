## Intro

This is a Readme file for React frontend development task. 
1. To visit the website demo please follow the URL bellow:  
   https://www.frontendyanwu.tk/
2. To test the project in localhost. Please follow the code bellow:  
  `git clone https://github.com/wuyan8908/frontend_task.git`
  - Open Terminal and Change to project folder using the command bellow:
    - `yarn install`
  - To test in localhost using:
    - `yarn start`
  - You also can run the project after build with:
    - `yarn build`
  - Add testing server:
    - `yarn global add serve`
  - Test the project build in localhost:
    - `serve -s build` 

## Task Check List

1. Login page with 'Formilk' and 'Yup'
2. User Index page: data showed in the table with View, Edit, Delete Button and Create Button bellow the table
3. Implement user detail page
4. Implement Create/edit page
5. Implement pagination and filters in user Index page.
6. Extra change to imporve the UX: 
  - Add redux store persist function to keep the data after refresh.
  - Add the auto increment of id for the post user API in mockServer to avoid duplicate id bug.

## Technology Used

1. Using 'react-redux' with 'redux-saga' middelware
2. Using 'react-router-dom' to set up routes.
3. Using Material ui framework for UI implement.
4. Adding 'redux-persist' to fix the data lost bug.

## Deploy 

1. Deployed to AWS S3 hosting with DNS server in route 53.
2. Enable custom ssl Cert from AWS Certificate Manager
3. Enable https and CDN with AWS CloudFront.
4. Enable CircleCI for the project.

## Project detail intro

- 'src' folder: All the Pages and Apis store in this folder
  - components: store the views for the website and some function components such as forms.
  - mockServer: provide the mock APIs for this project to test the functions in the frontend.
  - sagas: store the files that 'redux-saga' needs. 
    - handlers: for the API calling and data storing functions. 
    - requests: for the API request functions.
    - rootSaga: store the watchers of 'redux-saga'
  - store: store the 'redux' data.
  - APP.js: handle the Routers for the project.
  - history.js: provide history function for the project.
  - Index.js: provide store creating, saga setting and data persist.

## To Do List

1. UI improvment.
2. AWS CloudFront caching bug.
3. Function complexity reducing.


