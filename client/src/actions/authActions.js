/**
 * This is a module that exports two functions, `addToken` and `addError`, which return objects with a
 * `type` property and either a `data` property containing a token or an error message.
 * @param token - The token parameter is a piece of data that represents an authentication token or a
 * security token that is used to verify the identity of a user or a device. It is typically a string
 * of characters that is generated by an authentication server and is used to grant access to a
 * specific resource or service. In this
 */
import types from "./index";

export const addToken = (token) => ({
  type: types.ADD_TOKEN,
  data: token,
});

export const addError = (error) => ({
  type: types.ADD_TOKEN,
  data: error,
});
