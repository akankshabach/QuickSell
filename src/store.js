// import { configureStore } from '@reduxjs/toolkit';
// import { DataReducer, SelectDataReducer } from './Reducers/DataReducer';

// const store = configureStore({
//   reducer: {
//     DataReducer,
//     SelectDataReducer,
//   },
// });

// export default store;
// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers/Reducer'; // Assuming you have a file that combines your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
