import { createStore, compose , applyMiddleware } from 'redux'
import reducers from '../redux';
import thunk from 'redux-thunk';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = compose;

export default function configureStore( initState ){

    const middleWare = [thunk];
    const store = createStore( 
        reducers , {
            root : { ...initState }
        },
        composeEnhancers(
            applyMiddleware(...middleWare)
        )
    );

    return store;
}