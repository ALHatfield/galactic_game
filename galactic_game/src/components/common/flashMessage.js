
import { ADD_MESSAGE, REMOVE_MESSAGE } from './actionTypes';

const flashMessage = (state = {}, action = {}) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [action.message.id]: {
          id: action.message.id,
          type: action.message.type,
          text: action.message.text
        }
      }
    case REMOVE_MESSAGE:      
      // eslint-disable-next-line
      const { [action.id]:message, ...newState } = state;
      return newState;
    default:
      return state;
  }
}

export default flashMessage;