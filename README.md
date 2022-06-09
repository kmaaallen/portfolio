# Portfolio

A project to build an online portfolio using React.

# Tools

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It uses [Firebase](https://firebase.google.com/) as the database to store portfolio data.

# Features

# Deployment

## To run this project locally

### Set up

1. Clone repository
2. Run <code>npm install</code> to install project dependencies

### Connect to Firestore

3. In local project create .env.local file at project root
4. Go to [Firebase](https://firebase.google.com/) and set up a project using Firestore
5. Add following environment variables to your .env.local file from your Firebase config:
   <code>
   REACT_APP_API_KEY
   REACT_APP_AUTH_DOMAIN
   REACT_APP_DATABASE_URL
   REACT_APP_PROJECT_ID
   REACT_APP_STORAGE_BUCKET
   REACT_APP_MESSAGING_SENDER_ID
   REACT_APP_APP_ID
   </code>
6. Create a collection within Firestore that contains a details document with the following fields: title, position, blurb and add the following environment variables to your .env file accordingly:
   <code>
   REACT_APP_DETAILS_COLLECTION
   REACT_APP_DETAILS_DOC
   </code>

### Run

7. Run <code>npm start</code> to launch project in local browser

# Testing
