import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import InputField from "@/components/TextInput";
import CustomButton from "@/components/CustomButton";
import SSOButton from "@/components/SSOButton";
import { SignUpFormTypes } from "@/types/type";

const initialData = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  isAgree: false,
};

const SignIn = () => {
  const [formData, setFormData] = useState<SignUpFormTypes>(initialData);

  const handleChange = (key: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSSOPress = async (type: string) => {
    // Handle SSO press
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-col h-screen bg-white px-5 py-3">
          <View className="items-center justify-center mt-8">
            <Text className="font-medium">Hey There,</Text>
            <Text className="text-xl font-bold">Welcome Back !</Text>
          </View>
          <View className="  mt-5">
            {[
              { label: "email", icon: "envelope", placeholder: "Email" },
              { label: "password", icon: "lock", placeholder: "Password" },
            ].map(({ label, icon, placeholder }) => (
              <InputField
                key={label}
                label={label}
                icon={icon}
                placeholder={placeholder}
                // @ts-ignore
                value={formData[label]}
                keyboardType="default"
                onChangeText={(value) => handleChange(label, value)}
              />
            ))}

            <View className="flex-row items-start justify-start gap-1  ">
              <Pressable
                className={`w-5 h-5 justify-center items-center border rounded-md ${
                  formData.isAgree ? "bg-[#ADA4A5]" : "border-[#ADA4A5]"
                }`}
                onPress={() =>
                  setFormData((prevState) => ({
                    ...prevState,
                    isAgree: !prevState.isAgree,
                  }))
                }
              >
                {formData.isAgree && (
                  <Ionicons name="checkmark" size={14} color="white" />
                )}
              </Pressable>
              <Text className="flex-1 text-sm text-secondary-500">
                By continuing you accept our Privacy Policy and{" "}
                <Text className="underline">Term of Use</Text>
              </Text>
            </View>
          </View>
          <View>
            <CustomButton
              title="Log In"
              onPress={() => router.push("/(auth)/questionOne")}
              className="mt-6 bg-gradient-to-r from-indigo-400 to-cyan-400"
            />
            <View className="flex-row items-center justify-center mt-4 gap-x-3">
              <View className="flex-1 h-[1px] bg-general-100" />
              <Text className="text-base text-secondary-600">Or</Text>
              <View className="flex-1 h-[1px] bg-general-100" />
            </View>
            <View className="flex-row items-center justify-center mt-4 gap-x-3">
              {[
                { icon: "google", color: "#DB4437", type: "google" },
                { icon: "linkedin", color: "#0072b1", type: "linkedIn" },
              ].map(({ icon, color, type }) => (
                <SSOButton
                  key={type}
                  icon={icon}
                  color={color}
                  interStyle="mx-2"
                />
              ))}
            </View>
            <Link
              className="text-lg text-center text-general-200 mt-10"
              href={"/sign-up"}
            >
              <Text>Don't have an account?</Text>
              <Text className="text-primary-500"> Register</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
