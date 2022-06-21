import React, { useEffect } from "react";

import { useRouter } from "next/router";

import axiosInstance from "../axios";
import logoutHelper from "../utils/logoutHelper";

export default function Logout() {
  const router = useRouter();
  useEffect(() => {
    logoutHelper();
    router.push("/login");
  });
  return <h1>logout</h1>;
}
