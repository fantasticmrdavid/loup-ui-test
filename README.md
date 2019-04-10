# Loup React UI Exercise by David Li

## Setup
1. Run `npm install`

## Running the mock JSON server
1. Run `npm run server`
2. Visit `http://localhost:3000/filters` or `http://localhost:3000/recipes` for JSON data

## Running the app
1. Run `npm start`
2. Visit `http://localhost:8080`

## Testing (esLint + Jest)
1. Run `npm run test`

## Tech Stack
- React + Redux
- Styled-Components
- Redux-Persist
- React-Router
- WebPack
- esLint
- Jest
- json-server

## Assumptions & Dev Notes
- API fetch tests have been omitted for this demo as data is simply fed unmodified directly to state. If data required a normalisation step, a test should be added to test for correct transformation of the data object in the Redux state.
- If no filters are selected, the list will default to displaying all recipes.
- Mission Gothic font has been substituted with Nanum Gothic Google font.
