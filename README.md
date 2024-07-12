# 2048 Game

A 2048 game created by Dipesh Ranjan.

## Technologies Used

- Next.js 14
- JavaScript
- Tailwind CSS
- Lodash (for deep cloning the grid)

## Game Algorithm

1. **Initialize Grid**
   - Create a 4x4 grid filled with zeros.
   - Add two random numbers (2 or 4) in random empty spots on the grid.

2. **Add a Number**
   - Find all empty spots on the grid.
   - Choose a random spot and place a 2 or 4 there.

3. **Move Left**
   - For each row:
     - Filter out zeros.
     - Combine adjacent equal numbers by adding them together and setting the next cell to zero.
     - Filter out zeros again.
     - Fill the remaining cells with zeros to maintain the grid size.

4. **Rotate Grid**
   - Rotate the grid 90 degrees clockwise.

5. **Move Right, Up, and Down**
   - Use the moveLeft logic by rotating the grid appropriately:
     - **moveRight**: Rotate 180 degrees, move left, rotate back 180 degrees.
     - **moveUp**: Rotate 270 degrees, move left, rotate back 90 degrees.
     - **moveDown**: Rotate 90 degrees, move left, rotate back 270 degrees.

6. **Check Game Over**
   - Check if there are any empty cells. If so, the game is not over.
   - Check if there are any possible moves by looking for adjacent equal cells horizontally and vertically. If found, the game is not over.
   - If no empty cells and no possible moves, the game is over.

7. **Check Game Won**
   - Check if any cell in the grid contains the number 2048.
   - If found, display a "Game Won" message and provide an option to restart the game.

8. **Handle Key Down Events**
   - Listen for keydown events for the arrow keys.
   - Depending on the key pressed, move the grid left, right, up, or down.
   - After a move, add a new number to the grid.
   - Check if the game is over or won after each move.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the development server using `npm run dev`.
