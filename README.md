
# Products List Project

This project is a products list page. It runs on Express and React, and has Storybook installed for component development.

### Project Setup

**To set up the project:**
1. `git clone https://github.com/747823/products-list.git`
2. `cd products-list`
3. `npm install`

**To run storybook:**
`npm run storybook` and visit `localhost:6006` in your browser

**To run tests:**
`npm run test`

**To run linter:**
`npm run lint`

**To run the app in development mode:**
`npm run develop` and visit `localhost:3000` in your browser
When running in deveopment mode, webpack will watch the src folder and rebuild the server and/or client whenever it changes. Nodemon will restart the server any time this happens. Hot module reloading is not currently supported.

**To build production version of the app:**
`npm run build` will build the production version of the app in `dist` folder

**To run the production version of the app:**
`npm run production`

