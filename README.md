# Quiz Game

## Overview
The Quiz Game is an interactive web-based game where players answer multiple-choice questions. The game provides feedback on the player's score and displays the final score upon completion.

## Features
- Multiple-choice questions with four options each.
- Real-time score tracking.
- Incremental score updates based on correct or incorrect answers.
- Clear and simple user interface.
- Shuffle options for each question to enhance gameplay.

## How to Play
1. **Start the Game**: Open the game in a web browser. The first question appears on the screen.
2. **Answer the Question**: Click on the button corresponding to the answer you believe is correct.
3. **Score Feedback**: 
   - Correct Answer: Score increases by 1.
   - Incorrect Answer: Score decreases by 0.25.
4. **Next Question**: Click the "Next" button to move to the next question.
5. **Completion**: When all questions have been answered, the final score is displayed, and the game indicates the quiz is completed.

## File Structure
- **index.html**: Contains the structure of the game.
- **style.css**: Contains the styles for the game elements.
- **quiz.js**: Contains the game logic including question display, score updating, and handling user input.

## Installation
1. Clone the repository or download the zip file.
2. Extract the files to your desired location.
3. Open `index.html` in your web browser.

## Usage
- Open `index.html` in a web browser to start the game.
- Click on the answer options to select your answer.
- Click "Next" to proceed to the next question.

## Customization
You can customize the list of questions and options by modifying the `quesJSON` array in `quiz.js`. Each entry in the array should be an object with `question`, `options`, and `correctAnswer` properties.

Example:
```javascript
const quesJSON = [
  {
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question: "How many pieces of bun are in a McDonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  // Add more questions as needed
];
