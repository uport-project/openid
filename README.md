# OpenID-Connect uPort Helper Page

## Installation

1. Install dependencies.
    ```javascript
    npm install 

2. Run the webpack server for front-end hot reloading.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run start
    ```
3. Jest is included for testing React components. 
    ```javascript
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```

8. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## FAQ

* __Where is my production build?__

    The production build will be in the build_webpack folder. This is because Truffle outputs contract compilations to the build folder.

* __Where can I find more documentation?__

    This is a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). 
