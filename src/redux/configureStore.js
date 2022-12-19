import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Greetings from './Greetings/Greetings';

const store = configureStore({
  reducer: {
    Greetings,
  },
  middleware: [thunk],
});

export default store;
