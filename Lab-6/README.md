Lab 06 – Introduction to React
Exercise 1 – Understanding JSX Syntax in React

In Exercise 1, we learned the fundamentals of JSX, the syntax extension that allows developers to write HTML-like code directly within JavaScript. We began by creating a new React app using create-react-app and then replaced the default code in App.js with a simple JSX structure that included a heading and paragraph.

Next, we practiced embedding JavaScript expressions inside JSX by displaying the current year dynamically using the Date() object. We also introduced a boolean variable, isLoggedIn, and applied conditional rendering with a ternary operator to display different messages depending on its value. This exercise helped establish a foundational understanding of how JSX combines structure and logic in React components.

Exercise 2 – Creating Components and Using Props

In Exercise 2, we explored the concept of component-based architecture in React by creating three reusable components: Home, About, and Contact. Each component was built in its own file and rendered a simple message specific to its section.

We then imported these components into App.js and practiced passing data using props. Each component accepted a title and description prop, which were displayed dynamically as headings and paragraphs. This exercise reinforced how React components can communicate and reuse logic, promoting modularity and scalability in application design.

Exercise 3 – Rendering Lists and Modularization

In the final exercise, we focused on list rendering and code modularization. We created a new component called EngineeringTopics that contained an array of objects representing various engineering disciplines. Using the .map() method, we dynamically rendered each topic’s title and description as structured HTML elements.

Finally, we integrated this component into App.js to display the list on the main page. This exercise emphasized efficient rendering techniques and the importance of organizing components into separate files for clarity and maintainability.
