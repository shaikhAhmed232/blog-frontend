import axiosInstance from "../axios";
import logoutHelper from "./logoutHelper";

const updateToken = async (setToken) => {
  console.log("update token ran");
  const res = await axiosInstance.post("token/refresh/", {
    refresh: localStorage.getItem("refresh_token"),
  });
  if (res.status === 200) {
    const data = await res.json();
    const access = data.access;
    const refresh = data.refresh;
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
    axiosInstance.defaults.headers["Authorizations"] = access;
    setToken(access);
  } else {
    console.log("something is went wrong");
    logoutHelper();
    setToken(null);
  }
};

export default updateToken;
