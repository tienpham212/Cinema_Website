import {message} from "antd";
import {userService} from "../../services/UserService";
import {STATUS, TOKEN, USER} from "../../util/settings/config";
import {TOGGLE_HEADER} from "../types/ToggleTypes";
import {SET_CURRENT_USER, SET_USER_PROFILE} from "../types/UserTypes";

export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const {data, status} = await userService.loginUser(user);
      console.log(data);
      if (status === STATUS.SUCCESS) {
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(
          USER,
          JSON.stringify({...data.content, accessToken: ""})
        );
        dispatch({
          type: TOGGLE_HEADER,
        });
        dispatch({
          type: SET_CURRENT_USER,
          payload: data.content,
        });
      }
    } catch (error) {
      message.error("Invalid username or password");
    }
  };
};
export const getUserProfile = (user) => {
  return async (dispatch) => {
    try {
      const {data, status} = await userService.getUserProfile();
      console.log(data);
      if (status === STATUS.SUCCESS) {
        dispatch({
          type: SET_USER_PROFILE,
          payload: data.content,
        });
      }
    } catch (error) {
      message.error("Invalid username or password");
    }
  };
};
export const editUserProfile = (userInfo) => {
  return async (dispatch) => {
    try {
      const {data, status} = await userService.editUserDetail(userInfo);
      console.log(data);
      // if (status === STATUS.SUCCESS) {
      //   dispatch({
      //     type: SET_USER_PROFILE,
      //     payload: data.content,
      //   });
      // }
    } catch (error) {
      // message.error("Invalid username or password");
    }
  };
};
