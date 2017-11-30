import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

let middleware;

if (process.env.NODE_ENV === 'test') {
  middleware = applyMiddleware(thunkMiddleware);
} else {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})));
}

export default middleware;
