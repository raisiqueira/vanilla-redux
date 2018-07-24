import {actionTypes} from '../constants/actionTypes';

// estado inicial
const initialState = {status: ''};

export const statusReducer = (state = initialState, action) => {
  // pegamos o valor que foi passado para nossa action
  const status = action.payload;

  /**
     * fazemos um switch para verificar qual action está sendo usada
     * e atualiza o estado da aplicação
    */
  switch (action.type) {
    case actionTypes.CHANGE_STATUS:
      return {
        ...state,
        status,
      };
    default:
      return state;
  }
};
