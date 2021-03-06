/**
 * NPM import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';

/**
 * Code
 */

// DevTools - optionnels
const devTools = [];
if (window.devToolsExtension) {
  // On configure l'extension Redux pour Chrome/Firefox.
  devTools.push(window.devToolsExtension());
}

// Middlewares - optionnels


// On prépare tous les enhancers pour notre Store.
// Attention : l'ordre a une importance !
const enhancers = compose(...devTools);

const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
