import {store} from './store';
import {changeStatus} from './actions/status';

/**
 * as ações são despachadas através da função store.dispatch(), onde recebe
 * uma action.
 */

const statusParaph = document.querySelector ('.status');

document.querySelector ('.userName').oninput = event => {
  const userName = event.target.value;
  /** `código antigo`
   * statusParaph.textContent = userName
   * ? `${event.target.value} está digitando`
   * : '';
  */

  // disparamos nossa action `changeStatus` que recebe o username vindo do input
  store.dispatch (changeStatus (userName));
};

// recebendo os dados da store em real time com subscribe do Redux

store.subscribe (() => {
  const state = store.getState (); // retorna o estado da aplicação
  statusParaph.textContent = state.status; // status está vindo de nosso reducer
});
