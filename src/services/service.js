import axios from "axios";

export const getUserList = () => {
  return axios.get("https://api.github.com/users");
};

const BaseService = {
  getUserList,
};
export default BaseService;
