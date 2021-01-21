# Modern React with Redux [2020 Update]
## Course Description
Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!
## Course Link [https://www.udemy.com/course/react-redux/](https://www.udemy.com/course/react-redux/)
Each folder here is an application created during the course, and each has a short readme detailing what was worked on/learned in each case.

## Running Projects
Links to running versions of the projects I created and am hosting with Vercel:

### Project 11 - translate
A project created to understand the new context system in React, introduced in React 16. Also attempts to replace Redux with Context (even though it is not recommended).

There is not much interactive functionality in this app. Clicking the flags will change the form details to the language that they represent, but nothing is done with the user's input.

[Link](https://translate-bay.vercel.app/)

### Project 10 - streams
This project was created to go over navigation with React Router, handle Google OAuth authentication, handle forms with Redux Form, and create and use a video streaming REST API, similar to how Twitch works. Also uses redux. This was by far the largest project in the course.

The user can create different stream pages, complete with titles and descriptions, but only modify and delete the ones they created. Support for multiple users is available. Clicking on a stream brings you to that stream.

Unfortunately since this application requires someone to be actively streaming to fully function, it is not easily run. Therefore, it is not being hosted.

### Project 9 - blog
This project uses the jsonplaceholder API to list out a bunch of fake blog posts and authors. It was created to get some practice with async actions with redux-thunk.

[Link](https://blog-one-delta.vercel.app/)

### Project 8 - songs
A project created to get some practice with Redux and React-Redux.

There isn't much interactive functionality in this project, the user is just able to select one of the songs listed by title, and its title and duration will be displayed.

[Link](https://songs-eight.vercel.app/)

### Project 7 - videos-hooks
This takes the videos project (project 5), and converts it from using class based components, to function components. This requires the transition from state and lifecycle methods, to hooks. All functionality is the same as project 5.

[Link](https://videos-hooks-cs2t8pi53.vercel.app/)

### Project 6 - widgets
A project created to understand hooks in React. Routing is also implemented, without using a third party library.

The Accordion page is simply an accordion menu, there's not much functionality there.

The second page uses a user-input search term to query the Wikipedia API. It provides a short description of potential matches, and a link to their respective Wikipedia pages.

The third page is a custom dropdown implemented in React.

The fourth page uses the google translate API to translate English to the selected language. Note that due to the google translate API being a paid service, the translate page of this project will only work if you are running the project on "localhost:3000". So that portion will not work on the below link.

[Link](https://widgets-teal-ten.vercel.app/)

### Project 5 - videos
A project created to reinforce all of the React skills learned from the first 10 sections of the course.
Some topics covered include handling user input, state, using an API, creating lists of components, and manipulating the DOM in React.

Uses the Youtube API to allow the user to search for, select, and play videos. Also lists video descriptions.

[Link](https://videos-ecru-nine.vercel.app/)

### Project 4 - pics
A project created to show how to handle user input, how to make requests to external APIs using Axios and Fetch, and how to display the results from the APIs.

You are able to search through unsplash's api for the user supplied types of images.

[Link](https://pics-azure.vercel.app)

### Project 3 - seasons
A project created to learn the difference between function components and class components, as well as state and lifecycle.

This site will ask for your location. If you're in the northern hemisphere and it's between the start of April and the end of September, you'll see a screen indicating we should hit the beach. If you're in the northern hemisphere and it's between the start of October and the end of March, you'll see a screen indicating it's chily out. If you're in the southern hemisphere, the logic is reversed.

[Link](https://seasons-inky.vercel.app/)

### Project 2 - components
A project created to go over how components work in React. Uses faker.js for the images, but there is no interactive functionality.

[Link](https://components-xi.vercel.app/)

### Project 1 - jsx
A project created to go over the very basics of jsx. This is the first project of the course, and as such there's not really much to show here.

[link](https://jsx-flax.vercel.app/)
