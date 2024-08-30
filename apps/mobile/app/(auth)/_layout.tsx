import React, { ReactNode } from "react";
import { Stack } from "expo-router";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />

      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="questionOne" options={{ headerShown: false }} />
      <Stack.Screen name="questionTwo" options={{ headerShown: false }} />
      <Stack.Screen name="oauthredirect" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayout;
