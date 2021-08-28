// import { configureStore } from '@reduxjs/toolkit';
// import contactReducer from '../redux/reducer';

// const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
// });

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from '../redux/reducer';
import authReducer from './auth/slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

 const store = configureStore({
     reducer: {
    contacts: contactReducer,
    auth: persistReducer(authPersistConfig, authReducer),
},
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

const contactStore = { store, persistor };

export default contactStore ;