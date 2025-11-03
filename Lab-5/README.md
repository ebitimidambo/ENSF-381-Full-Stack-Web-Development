Lab 05 – DOM Manipulation and Mock API Integration
Exercise 1 – DOM Manipulation with Event Listeners

In this exercise, we created an interactive webpage to practice dynamic element updates using the Document Object Model (DOM) and the addEventListener method. The webpage contained a textbox, a label, and five buttons, each designed to change the label’s font color when clicked.

When a user typed text in the textbox and pressed the Enter key, the input text was displayed inside the label, and the textbox was cleared. Each button updated the label’s text color to one of five colors — red, blue, green, orange, or purple. This exercise demonstrated event handling for both keyboard and mouse events, while reinforcing the separation of structure (HTML) and behavior (JavaScript) through modular, event-driven programming.

Exercise 2 – Creating a Mock API Using MockAPI.io

In Exercise 2, we learned to create and configure a mock RESTful API using MockAPI.io
. The objective was to understand how to simulate backend functionality and generate realistic test data for frontend development.

We created a new project called “FullStackLab” and added a resource named users_api. Two key fields were defined — first_name (using Faker.js to generate random names) and user_group (a numeric field representing user categories). We configured the API to return 30 users per request, providing consistent, realistic data for later use in Exercise 3. This step introduced the concept of backend simulation, preparing us for API integration and asynchronous data retrieval in web applications.

Exercise 3 – Displaying Dynamic Content from an API

In the final exercise, we integrated frontend interactivity with backend data by fetching user information from the mock API created in Exercise 2. The webpage was enhanced to accept a user ID, retrieve the corresponding record from the API, and display the information dynamically on the page.

An asynchronous retrieveData() function was implemented to fetch and process all user data, filtering results based on the entered ID. When a valid ID was entered, the label displayed the user’s details in the format:
ID: <id>, Name: <first_name>, Group: <user_group>
If an invalid ID was provided, an error message appeared instead. The color-changing functionality from Exercise 1 was preserved, allowing dynamic style updates through event listeners. This exercise showcased the integration of DOM manipulation, asynchronous data fetching, and dynamic styling, forming the foundation of interactive full-stack web applications.
