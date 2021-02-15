import axios from 'axios';
import { SET_REPOSITORIES, SET_USERS } from './actionTypes';
const gitApiBaseUrl = '//api.github.com';

export const getUsers = searchText => async dispatch => {
    const response = await axios.get(`${gitApiBaseUrl}/search/users?q=${encodeURIComponent(`${searchText} in:login`)}`);
    dispatch({
        type: SET_USERS,
        payload: response.data.items
    });
};

export const getRepositories = searchText => async dispatch => {
    const response = await axios.get(`${gitApiBaseUrl}/search/repositories?q=${encodeURIComponent(`${searchText} in:name`)}`);
    dispatch({
        type: SET_REPOSITORIES,
        payload: response.data.items
    });
};