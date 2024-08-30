import { View, Text, ScrollView, Image, Button, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import InputField from "@/components/TextInput";
import { LinearGradient } from "expo-linear-gradient";
import SelectInput from "@/components/SelectInput";
import DateInput from "@/components/DateInput";
import CustomButton from "@/components/CustomButton";
import Icons from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const initialData = {
  gender: "",
  dob: new Date(),
  weight: "",
  height: "",
};
const QuestionOne = () => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (key: string, value: string | Date) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };
  return (
    <SafeAreaView className="flex-1 bg-white  ">
      <ScrollView className="flex-1 px-5 py-4  ">
        <View className=" items-center justify-center">
          <Image
            source={images.q1}
            alt="Profile Image"
            className="w-full h-[350px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-extrabold">
            Let’s complete your profile
          </Text>
          <Text className="text-sm mt-2 font-Jakarta text-secondary-500">
            It will help us to know more about you!
          </Text>
        </View>

        <View className="mt-5">
          <SelectInput
            onChange={(value) => handleChange("gender", value)}
            label="Choose Gender"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            value={formData.gender}
          />
          <DateInput handleChange={handleChange} />
          {[
            { label: "weight", icon: "weight", placeholder: "Your Weight" },
            {
              label: "height",
              icon: "arrows-alt-v",
              placeholder: "Your Height",
            },
          ].map(({ label, icon, placeholder }) => (
            <View key={label} className="gap-x-1 flex-row items-center">
              <View className="flex-1">
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
              </View>
              <View>
                <LinearGradient
                  colors={["#C58BF2", "#EEA4CE"]}
                  className="  py-5 px-5 rounded-2xl text-white"
                >
                  <Text className="text-white font-semibold">
                    {label === "height" ? "CM" : "KG"}
                  </Text>
                </LinearGradient>
              </View>
            </View>
          ))}
          <CustomButton
            title="Next"
            className="my-10"
            onPress={() => router.push("/(auth)/questionTwo")}
            IconRight={<Icons name="right" size={22} color={"#fff"} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuestionOne;
