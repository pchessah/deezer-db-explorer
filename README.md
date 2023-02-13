#Deezer DB Explorer
Deezer is an internet-based music streaming service. You are required to implement an Angular app to explore its database.

Users should be able to search for artists. For every artist found show the artist's picture and the number of fans they have. On bigger screens, with more available space, also include the total number of albums.

Clicking/tapping the artist must allow users to see basic information about them, like its total number of fans. Also show its top 5 tracks along with a list of all their albums. For every album include the year in which it was released.

Be sure to follow best practices and to demonstrate the skills you've learnt to develop a modern web app. Keep in mind that our team intends to add more features to your code and that they expect this to be quick and easy for them to do.


We encourage you to add more assets as necessary and to enhance content with colour and imagery, wherever it makes sense, so users may enjoy using your app. This is equally important to us when reviewing your assessment.


Please make sure that all unit tests and linting are passing as this can affect your marking.


You can also deploy your application to a free hosting service such as Heroku or Github Page using CI/CD pipeline as bonus point.


IMPORTANT
Most browsers enforce the same-origin restriction which may prevent HTTP calls to the Deezer API. To circumvent this problem and to enable CORS (Cross-origin resource sharing) in your app, you can use this two solutions:


Simply forward requests through a public CORS proxy that adds the Access-Control-Allow-Origin header to any OPTIONS pre-flight response. For example, when using the https://cors-anywhere.herokuapp.com/ proxy, then a call intended to https://api.deezer.com/search?q=eminem must become a call to https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem in your code. Do not forget to activate Heroku permission to use the proxy by clicking on the button Request temporary access to the demo server from this URL https://cors-anywhere.herokuapp.com/corsdemo

You can also use the Angular proxy configuration to circumvent CORS issue https://angular.io/guide/build#proxying-to-a-backend-server.

The project was bootstrapped with Angular CLI 11.2.8 using this command: ng new musicdb-app


You are also welcome to create a fresh Angular Project from your local environment, publish it on GitHub and share the link with us.


Deezer API reference https://developers.deezer.com/api


EXAMPLE

Below are some illustrations to help inspire your implementation.


Artists view [Desktop]

https://raw.githubusercontent.com/DVT/musicdb-app-angular/master/wireframes/artist-web-view.png


Artists view [Mobile]

https://raw.githubusercontent.com/DVT/musicdb-app-angular/master/wireframes/artist-mobile-view.png


Artist details view [Desktop]

https://raw.githubusercontent.com/DVT/musicdb-app-angular/master/wireframes/artist-details-web-view.png


Artist details view [Mobile]

https://raw.githubusercontent.com/DVT/musicdb-app-angular/master/wireframes/artist-details-mobile.PNG
