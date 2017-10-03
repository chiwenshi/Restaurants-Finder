# yingbin-liang-webdev-project

@Author: Yingbin Liang

This is a simple app for searching restaurants vis Google Maps APIs and saving your favorite restaurants under your profile

!!!! Please follow these steps in order to user the app !!!!
1. Add the folloing extension to chrome, this is for calling my third party APIs to work
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

2. Open Heroku App in Chrome: https://dashboard.heroku.com/apps/yingbin-liang-webdev-project

There are two types of users: admin, regular user
admin credential:
  -username: admin
  -password: admin
regular user credential:
  -username: a
  -password: a
  
Walkthrough for admin:
  click "log in" 
  => see all users 
  => click the cross sign on either one of the user
  => the user is deleted
  => click profile-icon on bottom-right corner
  => see admin's editable profile
  => update if you want, then click ok-icon on top-right corner
  => changes are saved to database
  => logout
  
Walkthrough for regular user:
  click "log in" 
  => see "find my restaurants" form
  => enter 'pizza', '-33.8670,151.1957', '2000' respectively for the three input boxes, then click search
  => get a list of nearby restaurants, and their ratings and addresses
  => click the one or more star-icon on your favorite restaurants to save them to your profile
  => restaurant(s) are saved
  => click profile-icon
  => see editable user profile
  => click "My Restaurants"
  => see your saved favorite restaurants
  => click cross-icon to remove saved restaurants
  
