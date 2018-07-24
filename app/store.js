/**
 * A root Store é responsável por importar todas as reducers contem o estado
 * referente à cada reducer.
 * Nessa store, importamos alguns middlewares(logger — do redux-logger,
 * thunk — do redux-thunk e o composeWithDevTools — do redux-devtools-extension).
 * criamos um array com todos os middlewares e passamos os middlewares citados.
 * 
 * a variável devTools recebe a função composeWithDevTools que recebe o 
 * applyMiddleware com todos os middlewares e são repassados para a função
 * createStore com o/os reducers e os Middlewares.
 */

import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {statusReducer} from './reducers/statusReducer';

// Array com todos os middlewares
const middlewares = [logger, thunk];

// Integração com Redux devTools
const devTools = composeWithDevTools (applyMiddleware (...middlewares));

// exportamos a variável store criando nossa store
export const store = createStore (statusReducer, devTools);
