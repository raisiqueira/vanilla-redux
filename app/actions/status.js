/**
 * Nossa action está simulando uma chamada assíncrona (tipo requisição) de API,
 * onde recebe um parâmetro e retorna uma função — thunk (do redux-thunk),
 * que recebe o type e o payload passado pelo `changeStatus`.
 */

import {actionTypes} from '../constants/actionTypes';

export const changeStatus = userName => dispatch => {
  setTimeout (() => {
    dispatch ({
      type: actionTypes.CHANGE_STATUS,
      payload: `${userName} está digitando`,
    });
  }, 1000);
};
