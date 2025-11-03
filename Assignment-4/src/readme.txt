Group: 3
Member 1: Ebitimi Dambo (30207054)
Member 2: Erin Kim (30211474)

-------------------------------------------------------------------------------------------
As a group, we decided to design this project to be as modular as possible. This is why you 
see more components than requested for. We will make sure to add all the dependencies in this 
document.
-------------------------------------------------------------------------------------------
First we have the LoginForm.js file (This is the main component of the login page)
It depends on:
1) Header
2) LoginFormComp
3) Footer

LoginFormComp is located in the components folder as a function within LoginForm.js.

LoginForm further depends on AuthMessage.js which is also located in the components
folder. AuthMessage actually handles the data fetching and authentication using states
and contexts.

Finally AuthMessage is dependent on DisplayMessage which renders the error or success
styled messages.

With this structure, we have accomplished the required components asked of us in the 
instructions. We have also ensured to pass data and props accordingly as expected. 

Note: We used useState to manage the form state by adding an onChange function in inputs
which fires the useState function and updates the variable with the current state of the 
input. We believe this is what that instruction was implying.
-------------------------------------------------------------------------------------------
Next we have CoursePage.js (This is the main component of the Course page)
It depends on:
1) Header
2) CourseCatalog
3) EnrollmentList
4) Footer

CourseCatalog further depends on the CourseItem.js component. EnrollmentList further depends on 
EnrolledCourse.js. 

With this structure, we have accomplished the required components asked of us 
in the instructions. We have also ensured to pass data and props accordingly as expected. 
-------------------------------------------------------------------------------------------
Finally we have the HomePage.js component (Main component of the homepage)
It depends on:
1) Header
2) MainSection
3) Footer

MainSection further depends on TestimonialRender.js and CourseRender.js. To make the program
modular, we decided to add these two components. They have their own functions (rendering the 
courses or testimonials and then passing it back to the main MainSection)
-------------------------------------------------------------------------------------------

Installation Command: npm install react-router-dom

Important: You may run into an issue with useRef when running our app. This is due to your 
react-router-dom version.You can fix it and run our program by typing this command in your terminal: 

npm install react-router-dom@6.30.0

This comman should only be run if you have trouble compiling our program. It has been tested and 
proven to work.

Note: There is no index.js in this project, so we included our names in this file. We will also
include it in App.js.(Nevermind, we have included it)

Note: We also determined that the Courses link in the header defeats the whole purpose of the 
login page, but we just left it in to make the project easier to assess (so you don't have to
keep logging in to see the course page). Thank you!