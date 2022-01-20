# XXXLutz Search Page

## Dependencies

To run this project is recommended `node 14 or superior`

## How to run this APP

### Install

```
yarn
```

or

```
npm install
```

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

Since this is a Search Page, states related to the product list are concentrate on the URL. The ideia is to allow the users to share their results with other people if they want. For a precise control of this URL states I am using the Hook system that we have in the latest React Router release.

All the components are developed by me, since I decided to not use any usual library for it (Bootstrap, Material UI, etc). The motivation behind it was the need of very few components and, also, a way to provide more code to be analysed.

Thank you for the opportunity and I hope you enjoy.
