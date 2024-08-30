import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GoalCarousel from "@/components/GoalCarousel";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const QuestionTwo = () => {
  return (
    <SafeAreaView className="flex-1  bg-white">
      <View className="mt-5 flex items-center justify-center">
        <Text className="text-2xl font-JakartaBold text-center">
          What is your goal ?
        </Text>
        <Text className="text-base text-[#7B6F72] font-Jakarta text-center w-[250px]">
          It will help us to choose a best program for you
        </Text>
      </View>
      {/* Slider or Swipe */}
      <GoalCarousel />
      <View className="px-5">
        <CustomButton
          title="Confirm"
          className="my-10"
          onPress={() => router.push("/(auth)/questionTwo")}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuestionTwo;
