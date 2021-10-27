import * as cons from './person.const'

export default function (state = { person: null, isPerson: false }, action) {
    switch (action.type) {
      case cons.PERSON_DATA:
        return {
          ...state,
          person: action.payload,
        };

      case cons.STORE_TRUE:
        return {
          ...state,
          isPerson: true,
        };

      default:
        return state;
    }
  }
  