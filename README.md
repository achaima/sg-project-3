Sparta Global Webdev4 Project 3: Angular SPA

Synopsis

This App allows users to create an account and browse through events. It allows them to look at events within a certain time frame and a location of their desire. It also allows them to save and remove events from their profile.

This project is a MEAN app that uses a rMVC approach and utilises HTTP requests. It utilises Node/Express server-side, and AngularJS client-side and an external API to create a single page application.

A demo of this app is available on Heroku.

Motivation

This project was undertaken to solidify understand of HTTP methods and how this works server side and client side. It was also built in an attempt to understand how API's work and how they can be used in an App.
Installation

To use this app:

Clone the repository
In the command line npm install (this will install all the necessary dependencies stored in the package.json file)
In order to spin up the server the following command must be inputted to the terminal npm run nodemon.
Functions

This project uses Firebase to create new users, signing in and signing out.
The user can search through a pre-assembled list of events populated by the Eventful Data Base API data and filter results by adding their desired location and timeframe.
The user also has the ability to add and remove events from their profile.


##Technologies Used

The server is running with node.js
The client side also referred to the frontend of the App is built using AngularJs which controls the states through ui-routing and the logic to create a single page app.
The users events will also be saved onto MongoDB
The app is built with HTML, CSS and JavaScript
The styling is done by CSS and Bootstrap
