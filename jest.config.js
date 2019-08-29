module.exports = {
  "jest": {
    "verbose": true,
    "clearMocks": true,
    "collectCoverage": true,
    "setupTestFrameworkScriptFile": "<rootDir>/spec",
    "snapshotSerializers": [
      "enzyme-to-json/serializer"
    ],
    "transform": {
        "^.+\\.js$": "babel-jest"
    },
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
  }
}
