import { UserManager } from "oidc-client";
import { storeUserError, storeUser } from "store/infra/auth.actions";
import { setAuthHeader } from "utils/axiosHeaders";
import axios from "axios";
import store from "store/store";
const config = {
  authority: "https://localhost:8021",
  client_id: "VklSQV9mcm9udF9qbWpqa2doa2xrcmozNDU2NTY3MjM0",
  redirect_uri: "http://localhost:3000/signin-oidc",
  response_type: "code",
  scope: "openid profile vira_api_scope",
  post_logout_redirect_uri: "http://localhost:3000/signout-oidc",
  filterProtocolClaims: true,
  loadUserInfo: true,
};

const userManager = new UserManager(config);

export async function loadUserFromStorage(store) {
  try {
    let user = await userManager.getUser();
    if (!user) {
      return store.dispatch(storeUserError());
    }
    getPermissions(user).then((result) => {
      user = {
        ...user,
        permissions : result.activeRole.permissions,
        activeRole : result.activeRole.title
      };
      store.dispatch(storeUser(user));
    });
  } catch (e) {
    console.error(`User not found: ${e}`);
    store.dispatch(storeUserError());
  }
}

export function signinRedirect() {
  return userManager.signinRedirect();
}

export function signinRedirectCallback() {
  return userManager.signinRedirectCallback().then((user) => {
    debugger;
    getPermissions(user).then((result) => {
      user = {
        ...user,
        permissions : result.activeRole.permissions,
        activeRole : result.activeRole.title
      };
      store.dispatch(storeUser(user));
    });
    debugger;
  });
}

export function signoutRedirect() {
  userManager.clearStaleState();
  userManager.removeUser();
  return userManager.signoutRedirect();
}

export function signoutRedirectCallback() {
  userManager.clearStaleState();
  userManager.removeUser();
  return userManager.signoutRedirectCallback();
}

async function getPermissions(user) {
  setAuthHeader(user.access_token);
  let response = await axios.get(
    "https://localhost:44350/api/Auth/Auth/GetRolePermissions"
  );
  return response.data.data;
}

export default userManager;
