export default function logoutHelper() {
  const response = axiosInstance.post("user/logout/blacklist/", {
    refresh_token: localStorage.getItem("refresh_token"),
  });
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  axiosInstance.defaults.headers.Authorization = null;
}
