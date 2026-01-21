// step 1: 
// npm install @reduxjs/toolkit react-redux

// step 2:
// Create a redux folder inside src. Inside redux folder create store.js file.

// step 3:
// In store.js file, import configureStore from @reduxjs/toolkit and create the store using configureStore method.
// import { configureStore } from '@reduxjs/toolkit';
// export const store = configureStore({
//   reducer: {},
// });

// step 4:
// In main.jsx file, import Provider from react-redux and store from redux/store.js file.
// import { Provider } from 'react-redux';
// import { store } from './redux/store.js';
// Wrap the <App /> component with <Provider> and pass the store as a prop to Provider.
// <Provider store={store}>
//   <App />
// </Provider>

// step 5:
// Create a slice using createSlice method from @reduxjs/toolkit.
// folder herarchy
// src
//  └── redux
//      └── features
//          └── <feature-name>
//              └── <feature-name>Slice.js

// step 6:
// In store.js file, import the reducer from the slice file and add it to the reducer object in configureStore method.
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice.jsx';

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });