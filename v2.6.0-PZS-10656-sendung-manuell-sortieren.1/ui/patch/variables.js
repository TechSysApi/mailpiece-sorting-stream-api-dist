var variables={
  "name": "@ch-post/mailpiece-sorting-stream-api",
  "version": "2.6.0-PZS-10656-sendung-manuell-sortieren.1",
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
    "apikana": "^0.11.0",
    "apikana-defaults": "0.0.96",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^7.1.0",
    "eslint-plugin-prettier": "^3.4.1",
    "prettier": "^2.7.1",
    "typescript": "^4.7.4"
  },
  "customConfig": {
    "type": "stream-api",
    "domain": "post.ch",
    "author": "Swiss Post Sorting System Development",
    "namespace": "logistics.mailpiece.sorting",
    "shortName": "mailpiece-sorting",
    "projectName": "mailpiece-sorting-stream-api",
    "npmPackage": "@ch-post/mailpiece-sorting-stream-api",
    "title": "Mailpiece Sorting Stream API",
    "plugins": [
      "dotnet",
      "readme"
    ],
    "dotnetNamespace": "Ch.Post.Logistics.Mailpiece.Sorting.StreamApi",
    "dotnetPackageId": "Ch.Post.Logistics.Mailpiece.Sorting.StreamApi",
    "mqs": "MQTT"
  },
  "_": [
    "start",
    "src",
    "dist"
  ]
}