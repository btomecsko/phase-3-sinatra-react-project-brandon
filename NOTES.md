1. Use Active Record to interact with a database.
2 .Have at least two models with a one-to-many relationship.
3. At a minimum, set up the following API routes in Sinatra:
    a. create and read actions for both models
    b.full CRUD capability for one of the models
4.Build a separate React frontend application that interacts with the API to perform CRUD actions.
5. Implement proper front end state management. You should be updating state using a setState function after receiving your response from a POST, PATCH, or DELETE request. You should NOT be relying on a GET request to update state.
6. Use good OO design patterns. You should have separate classes for each of your models, and create instance and class methods as necessary.
7. Routes in your application (both client side and back end) should follow RESTful conventions.
8. Use your back end optimally. Pass JSON for related associations to the front end from the back end. You should use active record methods in your controller to grab the needed data from your database and provide as JSON to the front end. You should NOT be relying on filtering front end state or a separate fetch request to retrieve related data.