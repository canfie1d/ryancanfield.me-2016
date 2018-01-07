import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, renderDevTools } from './utils/devTools';
import routes from './routes';
import reducers from './reducers/reducers';
import { responsiveStoreEnhancer } from 'redux-responsive';

const store = createStore(reducers, responsiveStoreEnhancer);

class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
          <Provider store={store}>
            <Router history={browserHistory}>
                {routes}
            </Router>
          </Provider>
          {renderDevTools()}
      </div>
    );
  }
}

export default App;
