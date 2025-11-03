Lab 07 – Building a Tic-Tac-Toe Game in React

In this lab, we built a fully functional Tic-Tac-Toe game using React to reinforce core concepts like component structure, state management, and event handling

Exercise 1 – Setting Up the Project and Grid

We began by creating a new React app using create-react-app and designed the initial 3x3 game board. Using React components, we structured the game around three main parts: Square, Board, and calculateWinner. CSS was used to style the grid layout, and props were introduced to pass data between components.

Exercise 2 – Handling Events and State

Next, we made the squares interactive by adding click event handlers and introducing the useState hook to manage each square’s state. This allowed the board to display an “X” when clicked, ensuring each square maintained its own independent state.

Exercise 3 – Game Logic and Winner Calculation

Finally, we implemented turn-taking between “X” and “O” and built logic to determine a game winner. The calculateWinner() function checked all possible winning combinations, and the interface displayed a live status message showing either the next player or the winner. This exercise emphasized React’s unidirectional data flow, state lifting, and conditional rendering to produce a dynamic, user-driven interface.
