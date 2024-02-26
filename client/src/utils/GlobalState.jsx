// import { createContext, useContext, useReducer } from "react";
// import { reducer } from './reducers'

// const StoreContext = createContext();
// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     products: [],
//     cart: [],
//     cartOpen: false,
//     categories: [],
//     currentCategory: '',
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

//export { StoreProvider, useStoreContext };

import { Provider } from 'react-redux';
import store from './store';

export default function StoreProvider(props) {

  // The provider component will wrap all other components inside of it that need access to our global state
  return <Provider store = {store} {...props} />;
}

