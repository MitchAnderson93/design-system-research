# UI lib starter (Demo for KR7)

#### How does this approach relate:
- Corresponds with Options 2/3. Re-write and migrate using handlebars and a test driven approach
- KR7 - Can support web component (agnostic) or framework specific (react) with little re-work (upon decision of Option 2 or 3)
- Any component work can be done using test driven approach (JEST/Jest axe and others)
- Governed by WP8 - Coded solution, internal developers can grow the project
- Components are designed to work in isolation (primary principle) 
- Layouts and grids should be seperate to component work (tested seperately)
- Global variables (utilities, mixins, colours)
- Processes can be better automated using the proposal/known requirement system
- Dependencies have been kept minimal/and should remain minimal

#### This demo repo uses (at the moment):
- Web component pattern (KR7)
- Storybook (KR8) 
- Jest (KR9)
- Jest-axe (KR10)
- Webpack (dev mode only/preview)
- Gulp (webpack dev server/file and scss utilities)

#### To run:
```
npm i
npm start
```

### How to contribute
- Consider unknown requirements that may not be included/covered in WP8
- Document a proposal (KRX - Description) under WP8/proposals (include reasoning notes and reference material)
- Create a new branch from master (KRX in description)
- PR to development for WP8 group

#### To do (if anyone wants to collaborate):
- Fix Storybook (openssl error on machine) and setup basic story in component folder (KR8) 
- Add to JEST tests to component folders (KR9)
- Setup JEST-axe or similar accessibility addon (KR10)
- Write storybook to preview accessibility violations (KR10, KR8)
- Split out webpack to dev and production mode, enable minification 


#### Repository setup:

```
├── .github (TBP)
├── pubic/index.html (/dist/ only test)
├── dist/
│   ├── bundle.js
│   ├── index.html
│   ├── styles.css
├── src/
│   ├── .storybook/
│   │   ├── main.js
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.js
│   │   │   ├── Button.test.js
│   │   │   ├── Button.stories.js
│   │   │   ├── Button.scss
│   │   │   ├── Button.json
│   │   ├── [...other components]
│   │   └── index.js
│   ├── tokens (future state)
│   │   ├── colors.js
│   │   ├── typography.js
│   │   ├── spacing.js
│   │   ├── layout.js
│   │   └── index.js
│   ├── utils (future state)
│   │   ├── formatDate.js
│   │   └── index.js
│   ├── index.js
├── package.json
├── lerna.json (TBP)
├── gulpfile.js
├── jest.config.js
├── webpack.config.js
├── README.md
```

#### Dependency list:
```
  "devDependencies": {
    "@babel/core": "^7.21.0",
    "@babel/preset-env": "^7.20.2",
    "@storybook/web-components": "^6.5.16",
    "babel-loader": "^9.1.2",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^8.0.0",
    "gulp-concat": "^2.6.1",
    "gulp-sass": "^5.1.0",
    "html-webpack-plugin": "^5.5.0",
    "jest": "^29.5.0",
    "sass": "^1.59.2",
    "webpack": "^5.76.1",
    "webpack-cli": "^5.0.1",
    "webpack-dev-server": "^4.11.1"
  },
  "dependencies": {
    "@webcomponents/webcomponentsjs": "^2.7.0"
  }
```
