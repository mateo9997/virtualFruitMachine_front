# Virtual Fruit Machine Frontend

This is the frontend for the Virtual Fruit Machine project. The frontend provides a user interface for interacting with the backend and playing the game.

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Testing](#testing)

## Technologies

The frontend is built using:

- React
- Next.js
- Tailwind CSS
- Fetch API
- Selenium WebDriver (for testing)

## Setup

To set up the project, follow these steps:

1. Ensure you have Node.js (>= v14) and npm installed on your system.
2. Clone the repository.
3. Open a terminal and navigate to the project directory.
4. Run `npm install` to install the dependencies.
5. Run `npm run dev` to start the development server.

The development server will be running on `http://localhost:3000`.

## Features

The Virtual Fruit Machine frontend allows users to:

- Play the game by clicking the "Play" button.
- View the remaining money.
- View the outcome of each play (win or lose).
- See the colors in the slots for each play.

## Testing

Tests are written using Selenium WebDriver. To run the tests, ensure the frontend and backend servers are running, and then follow these steps:

1. Install [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) or [geckodriver](https://github.com/mozilla/geckodriver/releases) for your system and add it to your PATH.
2. Open a terminal and navigate to the project directory.
3. Run `node <path-to-your-test-file>.js` to execute the tests.

The tests cover various scenarios such as winning the jackpot, losing a round, and checking if the player can play with 0 money. Additional tests verify that the slots contain valid colors and that the money increases or decreases correctly.
