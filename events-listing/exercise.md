# apps_listing v0.1

It is up to you how much effort you put into it and exactly what you deliver; we would expect that you deliver at least a piece of working code that we'll be able to run on our machines* and that will solve the problem at hand.

It is also up to you whether there's any need for documentation (or anything else), depending on the problem you've been assigned or the method you chose to solve it.

## Exercise

Given the html template and the css stylesheet** we want you to build a working interface that has the following functionalities:

- List all the apps
- Paginate the list (page size = 3)
- Filter the apps as you type in the search bar
- Have all the existing categories in the left navigation sorted by alphabetic order
- Allow filtering of apps when we click on a category
- Apps should be sorted by ascending order of the sum of the plans price

## Input data

The input data should be fetched dynamically (like would you do if it was data from a REST API) from the provided json file that has a list of apps. 

Each app has:
- an identifier
- a name
- a descriptions
- one or more categories
- one or more subscriptions with a name and a price (in cents)

## Other notes

\* To build this prototype you can use React, Angular, Ember, Vue, jQuery, Backbone or just vanilla javascript. It is up to you to decide which framework/library you feel more confortable with.
The template provided is only an optional starting point that you may choose not to use or change it if you feel that you can improve it.

** you should have received the files "index.html", "styles.css" and "apps.json"; if you didn't, please request it.
