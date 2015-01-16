Angular.

ToDo MVC
http://todomvc.com/examples/angularjs/#/

Breaking down the wheel.

Why do just one tutorial...

~DO ALL THE TUTORIALS~
+ https://www.codeschool.com/courses/shaping-up-with-angular-js
+ https://scotch.io/tutorials/creating-a-single-page-todo-app-with-node-and-angular
+ http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
+ http://www.thinkful.com/learn/angularjs-tutorial-build-a-gmail-clone/Introduction
+ http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app
+ https://docs.angularjs.org/tutorial
+ https://thinkster.io/angulartutorial/a-better-way-to-learn-angularjs/

TDD
+ http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html
+ http://newtriks.com/2013/04/26/how-to-test-an-angularjs-directive/
+ https://github.com/DavidSouther/tdd-angular
+ http://angular.github.io/protractor/#/tutorial

mongoose
+ http://mongoosejs.com/docs/documents.html
+ http://blog.modulus.io/getting-started-with-mongoose

and much more...



Bugs?

In order for Express Router middleware to not conflict with ngResource, need to call app.get("/api/tasks") instead of app.use in order for the get request to "/api/tasks" to not be overridden by the "/" route.

This behavior may be due to Express Router's default path being set to '/' if no path is supplied and the way ngResource handles requests.

Changing app.use("/", tasksRouter) to app.get results allows GETs to the API but not POSTS.