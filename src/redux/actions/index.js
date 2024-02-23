
import { getUsers, getUserDetails } from '../../services/GitHubService';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USER_DETAILS_SUCCESS = 'FETCH_USER_DETAILS_SUCCESS';

export const fetchUsers = (searchText) => async (dispatch) => {
  try {
    const users = await getUsers(searchText);
    dispatch({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const fetchUserDetails = (username) => async (dispatch) => {
  try {
    const userDetails = await getUserDetails(username);
    dispatch({ type: FETCH_USER_DETAILS_SUCCESS, payload: userDetails });
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
};
