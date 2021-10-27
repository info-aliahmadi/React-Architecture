import { setAuthHeader } from 'utils/axiosHeaders'

/**********CONST*************/
export const STORE_USER = 'STORE_USER'
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'
export const USER_EXPIRED = 'USER_EXPIRED'
export const STORE_USER_ERROR = 'STORE_USER_ERROR'
export const LOADING_USER = 'LOADING_USER'

/**********END*************/

export function storeUser(user) {
  setAuthHeader(user.access_token)
  return {
    type: STORE_USER,
    payload: user
  }
}

export function loadingUser() {
  return {
    type: LOADING_USER
  }
}

export function storeUserError() {
  return {
    type: STORE_USER_ERROR
  }
}

export function userExpired() {
  return {
    type: USER_EXPIRED
  }
}

export function userSignedOut() {
  return {
    type: USER_SIGNED_OUT
  }
}

