var variables={
  "name": "@ch-post-app-atg/mailpiece-sorting-stream-api",
  "version": "5.1.0",
  "description": "Mailpiece Sorting Stream API",
  "scripts": {
    "start": "apikana start src dist",
    "stop": "apikana stop",
    "create-sample": "apikana create-sample",
    "validate-samples": "apikana validate-samples",
    "test": "eslint src --ext .ts && apikana validate-samples",
    "lint": "eslint src --ext .ts",
    "lint-fix": "eslint src --ext .ts --fix"
  },
  "author": "Swiss Post Sorting System Development",
  "license": "Apache-2.0",
  "dependencies": {},
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.33.0",
    "@typescript-eslint/parser": "^4.33.0",
    "apikana": "^0.11.2",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.4.1",
    "prettier": "^2.8.8",
    "typescript": "^4.9.5"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "Swiss Post Sorting System Development",
    "namespace": "app.atg.mailpiece.sorting",
    "shortName": "mailpiece-sorting",
    "projectName": "mailpiece-sorting-stream-api",
    "title": "Mailpiece Sorting Stream API",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "dotnetNamespace": "Ch.Post.App.Atg.Mailpiece.Sorting.V1",
    "dotnetPackageId": "Ch.Post.App.Atg.Mailpiece.Sorting.StreamApi",
    "mqs": "MQTT"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}