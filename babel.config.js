module.exports = {
  "presets" : [
    [
      "@babel/env",
      {
        "modules": false
      }
    ],
    "@babel/react",
  ],
  "plugins": [
    "ramda",
  ],
  "env": {
    "test": {
      "presets": [
        [
          "@babel/env",
        ],
        "@babel/react",
      ]
    }
  }
}
