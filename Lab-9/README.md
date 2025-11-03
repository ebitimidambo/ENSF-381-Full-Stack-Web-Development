Lab 09 – Full-Stack Application with React and Flask

This lab focused on designing a full-stack rental price prediction app using React for the frontend and Flask for the backend

Exercise 1 – Frontend Development (React)

We built two main React pages: a Login Page and a House Price Predictor Page. The login form included input validation, error handling, and styled components. The predictor page allowed users to input house details (e.g., city, province, bedrooms, square footage) and submit them to the backend. The layout was styled for clarity and user-friendliness, incorporating clean UI practices and responsive design.

Exercise 2 – Backend Development (Flask)

On the backend, we developed two RESTful API endpoints:

/validate_login: authenticated users using predefined credentials

/predict_house_price: accepted house parameters, ran them through a Random Forest Regressor model, and returned a rental price prediction.

We used Flask’s CORS for cross-origin communication and joblib to load the trained ML model.

Exercise 3 – Frontend-Backend Integration

Finally, we connected the React frontend with the Flask backend through asynchronous API requests. Valid login attempts redirected to the prediction page, and successful predictions were displayed dynamically below the form. This brought together skills in frontend interaction, backend logic, and machine learning integration.
