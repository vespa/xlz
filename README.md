# XXXLutz Search Page

## Dependencies

To run this project you need `node 14 or superior`

## How to run this APP

### Local API

```
yarn server-up
```

or

```
npm run server-up
```

### Start UI

```
yarn start
```

or

```
npm start
```

### Tests

```
yarn test
```

or

```
npm run test
```

### About App Architeture

#### Main stack

- React
- PropTypes
- Sass
- React router 6
- Jest / React test library for unit testing
- json-server to emulate API

Since this is a Search Page (and also literally one page) states related with the product list are concentrate on the URL. It is expected that the user could want to share the results so there is no better place to concentrate it. For a precise control of this URL states I am using the Hook system that we have inside of the latest React Router release.

The components in this application are all developed by me (some of them I already use at other projects). I avoided to use libraries as Bootstrap, material UI or any other just because for the main structure I only needed very few elements.
