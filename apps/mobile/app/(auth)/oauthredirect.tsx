import React from "react";
import { Redirect } from "expo-router";

const Oauthredirect = () => {
  return <Redirect href={"/(auth)/questionOne"} />;
};

export default Oauthredirect;
