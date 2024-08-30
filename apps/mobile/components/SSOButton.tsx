import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SSOButtonProps } from "@/types/type";
import Icons from "@expo/vector-icons/FontAwesome6";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";

WebBrowser.maybeCompleteAuthSession();
const SSOButton = ({ icon, interStyle, color }: SSOButtonProps) => {
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState("");
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
  });
  useEffect(() => {
    handleSignIn();
  }, [response, token]);
  const handleSignIn = async () => {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (
        response &&
        response?.type === "success" &&
        response?.authentication
      ) {
        setToken(response.authentication.accessToken);
        getUserInfo(response?.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  };

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };
  const getUserInfo = async (token: string | null | undefined) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
      console.log(error);
    }
  };
  console.log({ request, response });
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          promptAsync();
        }}
        className={`rounded-3xl border border-secondary-200  h-12 w-12 flex items-center justify-center  ${interStyle}`}
      >
        <Icons name={icon} size={24} color={color} />
        {userInfo && <Text>{userInfo?.name}</Text>}
      </TouchableOpacity>
      <Button
        title="remove local store"
        onPress={async () => await AsyncStorage.removeItem("@user")}
      />
    </View>
  );
};

export default SSOButton;
