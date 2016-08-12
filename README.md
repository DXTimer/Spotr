[![Coverage Status](https://coveralls.io/repos/github/rahulrama/Brim_final/badge.svg?branch=master)](https://coveralls.io/github/rahulrama/Brim_final?branch=master)  [![Build Status](https://travis-ci.org/rahulrama/Brim_final.svg?branch=master)](https://travis-ci.org/rahulrama/Brim_final)


This is one of the two repos for the Final project carried out by students at Makers Academy.
This file is WIP and will be updated continually during the course of the project.

AUTHORS:
-------

Team Spotr: Ben Stein, Ivan Bakalov, Max Provin, Rahul Ramakrishna

INTRODUCTION:
------------

The aim of the project is to create an application that can search through Instagram (and other sources in the future) for images by location, hashtag and reverse image searching.

USER STORIES:
------------

```
As a user,
So that I can use the website,
I want to be able to sign up via Instagram.

As a user,
So that I am able to search images,
I want to be able to see the latest images from Instagram.

As a user,
So that I can choose images based on location,
I want to be able to see the images as thumbnails on a map.

As a user,
So that I can decide whether I can decide whether to view it on Instagram or not,
I want to be able to see more details when I click on the thumbnail on the map.

As a user,
So that I can narrow down my search,
I want to be able to filter my search by hashtags and /or date.

As a user,
So that I can further narrow down my search,
I want to be able to chain multiple hashtags.

As a user,
So that I know what I last searched for,
I want my search history to be loaded by default on my landing page.
```

DOMAIN MODEL
------------

![Domain Model](https://github.com/rahulrama/brimserver/blob/master/public/images/Brim.png)

MOCKUP
------

![Mockup](https://github.com/rahulrama/brimserver/blob/master/public/images/LandingPageMockup.png)

![Mockup](https://github.com/rahulrama/brimserver/blob/master/public/images/MapImageDetailMockup.png)


TECHNOLOGIES
------------

A range of technologies have been used:
- Rails - to develop the Backend server side framework
- Angular - to develop the Frontend client side framework
- Rspec - to test in the Rails environment
- Karma, Protractor - to test in the Angular environment
- Travis-ci - to check the continuous integration
- Coveralls - to check test coverage

INSTALLATION
------------

Clone repo to a local directory, then run bundle to update your gems. The next step is to install PostgresSQL.

DATABASE SETUP
--------------

Run rake db:create to create the databases, followed by rake db:migrate. You may also need to run rake db:migrate RAILS_ENV='test' if your test database does not get migrated with the previous command.

TEST
----

Server side: Type rspec into the commandline and this will run the tests. Below is an example of one of these tests:
Client side: Type npm run test for the unit tests and npm run protractor for the feature tests.

HEROKU
------

Spotr can be found here: https://spotr.herokuapp.com. It is currently in Sandbox mode and usage is restricted only to authorised users. If you would like to try it, please get in touch with any members of the team and we can provide you with temporary access for the same.
