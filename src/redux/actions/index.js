import { LOADER, USERS, USER } from "../types";
// Get all users
export const fetchUsers = () => ({type: USERS.GET});
// Delete user
export const deleteUser = id => ({type: USER.DELETE, id});
// Create new user
export const createUser = data => ({type: USER.POST, data});
// Edit user
export const editUser = (id, data) => ({type: USER.PUT, ...{id, data}});

// Show "Loading..." text
export const showLoader = () => dispatch => dispatch({type: LOADER.SHOW});
// Hide "Loading..." text
export const hideLoader = () => dispatch => dispatch({type: LOADER.HIDE});
