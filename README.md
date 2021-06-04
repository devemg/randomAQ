# randomAQ

RandomAQ is a question and answer game for mobile platforms.

It is a solution consisting of a mobile application and an administration web application.

The mobile application allows you to view a set of categories to select from. When selecting a category, a short description and the option to start are displayed.
At the start of the game, a random question within the selected category is displayed and a 30-second countdown begins to answer correctly.

On the other hand, the administration web application allows users to create an account and allows them to create the categories and questions that are used in the game.

## Getting Started

### Backend

First, you need start the backend that provide the APIs to handle the categories and questions stored in database. 
The application is developed in nodejs with express and uses dynamodb as database, so if you want to replicate the backend locally, you must create an account in aws and create the following tables in the dynamodb section.
- randomaq-users
- randomaq-categories
- randomaq-questions

**Note: the identificator of the table must be a string named id.**

Go to `backend-app` folder and run `npm install` to install the dependencies.

Then, create a .env file with the follow values: 
- aws_dynamo_acces_key
- aws_dynamo_secret_key
- jwt_secret_key

Finally, run `npm run dev` to run in develop mode and you can find the endpoints in `http://localhost:3000/`. 

### Angular Admin App

This project was generated with Angular CLI version 12.0.1.

#### Dependencies
Go to `frontend-app` and install dependencies with `npm install`

#### Development server

Go to `frontend-app` run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

The app will automatically reload if you change any of the source files.

You can find a limited edition running in this link [https://random-aq.herokuapp.com/](https://random-aq.herokuapp.com/).

### Ionic App

This project was generated with Ionic CLI version 6.15.0.

To build the project run `ionic build android` or `ionic build ios`. In order for you to build an iOS app, you need to run on MacOS.

#### Dependencies
Go to `ionic-app` and install dependencies with `npm install`

#### Development server

Go to `ionic-app` and run `npm install` to install all dependencies.

Run `ionic serve` to start the development environment. Navigate to `http://localhost:8100/`. 

The app will automatically reload if you change any of the source files.

## Bugs and Issues
Have a bug or an issue? 
Open a new issue here on Github.

## Creator
The template was created by and is maintained by Emely Garcia.

## Copyright and License
Copyright 2021 Emely Garcia. Code released under the MIT license.
