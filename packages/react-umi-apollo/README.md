### Install

```bash
yarn
```

### Run for development

For development you may want to mock the authentication process. Check the `src/utils/auth.js` to see how we are doing it.

For Github API mocking, check `mock/apollo/resolvers.js` file.

To run with mocks, set the `MOCK` env to `true`.


```bash
MOCK=true yarn start
```

### Requirements for production

A firebase project with authentication resource is necessary to run this app. You may want to setup authentication for Google and Facebook.


### Run for production


```bash
export FIREBASE_API_KEY=<your firebase apiKey>
export FIREBASE_AUTH_DOMAIN=<your firebase auth domain>
yarn start
```
