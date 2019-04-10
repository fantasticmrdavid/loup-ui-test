module.exports = {
  verbose: false,
  transform: {
    ".*": "babel-jest"
  },
  "moduleNameMapper": {
    "^Constants(.*)$": "<rootDir>/src/constants$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^containers(.*)$": "<rootDir>/src/containers$1",
    "^actions(.*)$": "<rootDir>/src/actions$1",
    "^reducers(.*)$": "<rootDir>/src/reducers$1",
    "^helpers(.*)$": "<rootDir>/src/helpers$1",
    "^store(.*)$": "<rootDir>/src/store$1",
    "^styles(.*)$": "<rootDir>/src/styles$1",
    "^data(.*)$": "<rootDir>/src/data$1",
  },
  setupFiles: [
    "<rootDir>/src/setupTests.js"
  ],
  "transformIgnorePatterns": [
    "node_modules/(?!lodash-es|redux-persist)"
  ]
};
