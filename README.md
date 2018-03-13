![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 13: Single Resource Mongo and Express API
===

## Submission Instructions
* Fork this repository & create a new branch for your work
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Push to your repository
* Submit a pull request to this repository
* Submit a link to your PR in canvas
* Write a question and observation on canvas

## Learning Objectives  
* Students will gain experience configuring RESTful Express routes
* Students will gane experience working with MongoDB through Mongoose
* Students will use advanced Mongoose features like Sub-Documents, methods and
  Validation

## Requirements
#### Configuration
* `package.json`
* `.gitignore`
* `README.md`
  * your `README.md` should include detailed instructions on how to use your API

#### Feature Tasks
* Create an HTTP Server using `express`
* Create a resource **model** of your choice that uses `mongoose.Schema` and `mongoose.model`
* Use the `body-parser` express middleware to parse the `req` body on `POST` and `PUT` requests
* Use the express `Router` to create a route for doing **RESTful CRUD** operations against your _model_
* Configure your model to use two Schemas. Have one Schema be a Sub-Document
  inside the second Schema.
* Configure two properties to use Mongoose built-in validation.
* Configure one property to use custom Mongoose validaton.
* Attach one custom function to the `.methods` property on your Schema to add
  extra functionality.

## Server Endpoints
### `/api/resource-name`
* `POST` request
  * should pass data as stringifed JSON in the body of a post request to create a new resource

### `/api/resource-name/:id`
* `GET` request
  * should pass the id of a resource through the url endpoint to get a resource
    * **this should use `req.params`, not querystring parameters**
* `PUT` request
  * should pass data as stringifed JSON in the body of a put request to update a pre-existing resource
* `DELETE` request
  * should pass the id of a resource though the url endpoint to delete a resource
    * **this should use `req.params`**

### Tests
Write "sunny day" tests making sure your GET PUT POST and DELETE routes work
when they're given proper input. (Just test to make sure things work, don't
worry about writing tests to test all the ways things might not work.)

