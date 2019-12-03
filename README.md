# Search UI - React Example

This is an example how to use [AddSearch Search UI Library](https://github.com/AddSearch/search-ui) with React. 
This example is based on the [create-react-app](https://github.com/facebook/create-react-app) project.

AddSearch UI library is a tool to create fast, mobile-friendy, and cross-browser compatible search solutions quickly and 
effortlessly.

## Components

All AddSearch UI components are wrapped to React components with corresponding names. 
Props passed to the React component are used for initializing Search UI components.

For example, the following React component:

```jsx
<SearchField ui={this.searchui}
           button="Search"
           searchAsYouType={true} />
```

is equal to:

```js
searchui.searchField({
  container: "searchfield",
  button: "Search",
  searchAsYouType: true
});
```

## How to run
```sh
npm install
npm run start
```

## Support
Feel free to send any questions, ideas and suggestions at [support@addsearch.com](mailto:support@addsearch.com) or visit
[addsearch.com](https://www.addsearch.com/) for more information.