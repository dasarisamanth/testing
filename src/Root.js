import React from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import {rootReducer} from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


export default ({children,initialState={}})=>{
    const store = createStore(rootReducer,initialState, composeWithDevTools( applyMiddleware(thunk)),
   );
    return(
    <Provider store={store}>
        {children}
    </Provider>
    )  
}
