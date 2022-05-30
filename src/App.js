import React, { Suspense, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './appRedux/Store';



const HomePage = React.lazy(() => import('./pages/HomePage'));
const VideoPage = React.lazy(() => import('./pages/VideoPage'));

const store = configureStore(/ provide initial state if any /);
// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 3000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}
function App() {
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Router>
          <Suspense fallback={<div></div>}>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route exact path="/playing/:id" component={VideoPage} />
            </Switch>
          </Suspense>
        </Router>
      </AlertProvider>
    </Provider>
  );
}

export default App;
