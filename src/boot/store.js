// @flow
import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";
import getPlacesReducer from "../reducers/placesReducers";

export default store = createStore(getPlacesReducer, 
  applyMiddleware(thunkMiddleware))
// export default function configureStore(onCompletion) {
// 	const enhancer = compose(
// 		applyMiddleware(thunk),
// 		devTools({
// 			name: "nativestarterkit",
// 			realtime: true,
// 		})
// 	);

// 	const store = createStore(reducer, enhancer);
// 	persistStore(store, { storage: AsyncStorage }, onCompletion);

// 	return store;
// }
