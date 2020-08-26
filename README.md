## Practice application

- Use useState for basic and simple/small size applications.

- Use useState + useReducer + useContext for advanced/medium size applications.

- Use useState/useReducer + Redux for complex/large size applications.

    // "start": "npm run watch:css & react-scripts start",
    // "build": "npm run build:css react-scripts build",

### Technologies

1. styled-components:
- allows for clean JSX rendered components, easy to read and use in function components

2. tailwind:
- Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

tailwind classes can be quite long, and it causes our components to have some readability issues. Maintaining them can be tough. Styled-components are great but it can be long winded to write out all of the css

- now you can use these classes to rapidly build components with tailwind and use regular styled components syntax when you need to deal with more complex pseudo states and transitions / animations etc.

3. twin-macro:
- allows the addition of tailwind classes to styled components

4. babel:
- React uses JSX syntax. Babel is a transpiler which converts the JSX to vanilla JavaScript. You can view babel as an intermediate step between your code and "executable" code.

- React also uses ES6, which is not supported by most of the browsers. Babel converts the ES6 code to a code which is compatible with the browsers.

- The best combination for a mature React project would be React+babel+Webpack

5. webpack
A static module bundler for JavaScript applications

— it takes all the code from your application and makes it usable in a web browser by bundling and optimizing front-end assets (JS, CSS, and Images).

- webpack uses a configuration file to determine how specific things are loaded into your application
