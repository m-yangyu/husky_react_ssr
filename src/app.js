import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'STORE';
import routerConfig from 'ROUTER';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import './sass';

const store = configureStore();
const keys = Object.keys(routerConfig);

const App = (props) => (

   <Provider store={store}>
      <BrowserRouter>
        <div>
            <Switch>
                { 
                    keys.map( item => <Route 
                        key={routerConfig[item].name}
                        path={item}
                        component={routerConfig[item].component}
                        exact={true}
                        ></Route> )
                }
            </Switch>
        </div>
      </BrowserRouter>
   </Provider>

)

export default App;