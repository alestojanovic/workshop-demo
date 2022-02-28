# Getting Started with Create React App

We will demonstrate on this webpack what you can remove/edit to setup your starter application. Hopefully it will help you understand environment in which you are working as well which technologies are involved and how they interact with eachother.

## Available Scripts

First we will delete `package-lock.json` file and run `yarn` command to switch to different package manager. Then in the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### Further webpack modifications

We can safely remove `reportWebVitals.ts` and also in `index.tsx` everything below line 12 as well as import for `reportWebVitals.ts`.\
In `index.html` we can remove a lot of code that is commented out and we can replace favicon on line 5 as well as logo on line 9 with our custom images if we wish to do so. Further we can replace description on line 8 and change title on line 13.\
If we decide to use custom resources we can do so by replacing `.png` the files that we have in public folder and `logo.svg` in src folder.\
At this point we can start working on our app and all following changes to the webpack will depend on what we are planning to make.
