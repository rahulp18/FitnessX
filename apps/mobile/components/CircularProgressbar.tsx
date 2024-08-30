import { View, Image, TouchableOpacity, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";
import { icons } from "@/constants";

const CircularProgressbar = ({
  progress,
  onPress,
}: {
  progress: number;
  onPress: any;
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: progress / 100, // Normalize to 0-1
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false, // Set to false since we're animating non-transform properties
    }).start();
  }, [progress]);

  const rotateInterpolate = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View className={"items-center absolute right-2 bottom-2 justify-center"}>
      <View className={"w-32 h-32 items-center justify-center"}>
        {/* Background Circle */}
        <View
          className={
            "absolute w-[50px] h-[50px] rounded-full bg-white border-4 border-gray-200"
          }
        />
        {/* Animated Progress Circle */}
        <Animated.View
          className={`absolute w-[50px] h-[50px] rounded-full border-4`}
          style={{
            borderColor: "rgba(0, 122, 255, 0.4)", // Adjust based on your color theme
            transform: [{ rotate: rotateInterpolate }],
            borderTopColor: "transparent",
            borderRightColor: "transparent",
            borderLeftColor: "rgba(0, 122, 255, 0.4)",
          }}
        />
        {/* Center Button */}
        <TouchableOpacity
          className={
            "bg-blue-400 w-12 h-12 rounded-full items-center justify-center"
          }
          onPress={onPress}
        >
          <Image
            source={icons.arrowRight} // Update with your actual image path
            alt="Arrow"
            className="h-8 w-8 object-contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CircularProgressbar;
