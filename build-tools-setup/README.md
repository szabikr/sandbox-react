# build-tools-setup

### Initial project setup

Let's start by excluding `node_modules` and `build` folders from the git repo:

`$ touch .gitignore`
```
node_modules
build

```

`$ npm init`

`$ mkdir public`

`$ touch public/index.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="favicon.png"/>
  <title>React Boilerplate</title>
</head>
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>

  <!--
    To start with we include the script tag here
    but once the HtmlWebpackPlugin is configured we can get rid of it
   -->
  <script src="bundle.js"></script>
</body>
</html>

```

### React and React-DOM setup

`$ npm install react react-dom`

`$ mkdir src`

`$ touch src/app.jsx`
```
import React from 'react'

export default function App() {
  return (
    <div>
      <h1>React Boilerplate</h1>
      <div>a <strong>School of Code</strong> exercise</div>
    </div>
  )
}

```

`$ touch src/index.js`
```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))

```

## Development environment setup

Add `dev` script to `package.json`
```
{
  ...
  scripts: {
    "dev": "webpack serve"
  },
  ...
}

```

### Install and configure webpack

`$ npm install --save-dev webpack webpack-cli webpack-dev-server`

`$ touch webpack.config.js`
```
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'], // helps to leave out file extension when importing modules
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // where the static files are
    },
    port: 8080,
    hot: true, // hot module replacement
    open: true, // open browser window when dev server starts
  },
};

```

### Install babel dependencies

`$ npm install --save-dev @babel/core @babel/preset-react babel-loader`

`$ touch .babelrc`
```
{
  "presets": [
    "@babel/preset-react"
  ]
}

```

### Configure babel in webpack.config

Extend `webpack.config` with the following rule
```
...
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex for selecting javascript files
        exclude: /node_modules/, // we don't want node_modules to be transpiled as they already should be
        use: ['babel-loader'], // using the babel loader which looks for its setup in .babelrc file
      },
    ],
  },
  ...
};

```

### Add global CSS and CSS module

`$ mkdir src/styles`

#### global.css

`$ touch src/styles/global.css`
```
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700;900&display=swap');

body {
  background-color: darkslategray;
  color: #EEEEEE;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}

```

Import this `global.css` file in `src/index.js`
```
...
import '.styles/global.css'
...

```

#### app.module.css

`$ touch src/styles/app.module.css`
```
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.subtitle {
  color: #AAAAAA;
  font-weight: 300;
  font-size: 1.2rem;
}

.subtitle strong {
  color: #EEEEEE;
}

```

Change `scr/app.jsx` in order to make use of `app.module.css`
```
import React from 'react'
import styles from './styles/app.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <h1>React Boilerplate</h1>
      <div className={styles.subtitle}>a <strong>School of Code</strong> exercise</div>
    </div>
  )
}

```

### Install and configure CSS loaders

`$ npm install --save-dev style-loader css-loader`

Extend `webpack.config.js` with the following rule
```
...
module.exports = {
  ...
  module: {
    rules: [
      ...
      {
        test: /\.(sa|sc|c)ss$/i, // Regex for selecting all css files
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};

```

## Prepare for Deployment

So far we have created a development environment and made use of the hot module replacement so that we can implement features quickly. Once we have all the desired functionality developed for our website, we need to bundle up our modules and build static files (html, js, css) that can be deployed to a hosting service such as Netlify or Vercel.

We already specified in `webpack.config.js` (the `output` property) that the `build` folder will have all our build files now we just need to setup a `build` script in `package.json` and extand the `webpack.config.js` to support this.

Add `build` script to `package.json`
```
{
  ...
  scripts: {
    "build": "webpack",
    ...
  },
  ...
}

```

### Install and configure HtmlWebpackPlugin

This plugin will take our `public/index.html` as a template and add the `bundle.js` script tag to its `<head>` so now we can remove the script tag from `public/index.html`

Lines to remove in `public/index.html`:
```
<!--
  To start with we include the script tag here
  but once the HtmlWebpackPlugin is configured we can get rid of it
-->
<script src="bundle.js"></script>

```

`$ npm install --save-dev html-webpack-plugin`

Extend `webpack.config.js` with HtmlWebpackPlugin
```
...
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // tells the plugin to inject the index.html to `build` folder
      template: 'public/index.html', // path to the file
    }),
  ],
  ...
}

```

### Build the project

`$ npm run build`

At this point a `build` folder should appear in the root of the project directory containing `index.html` and `bundle.js` (includes js and css features) and this `build` folder can be deployed to any static website hosting service and the React project should work with all its features and styles.
