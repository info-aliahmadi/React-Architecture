import * as action from './person.const'
  

  export function setToTrue() {
    return {
      type: action.STORE_TRUE
    }
  }
  
  export function storePerson() {
    return {
      type: action.PERSON_DATA
    }
  }
  