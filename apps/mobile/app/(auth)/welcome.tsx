import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images, onboarding } from "@/constants";
import Swiper from "react-native-swiper";
import { router } from "expo-router";
import CircularProgressbar from "@/components/CircularProgressbar";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  // Calculate progress percentage
  const progressPercentage = (activeIndex + 1) / onboarding.length;

  return (
    <View>
      <StatusBar animated={true} />
      <View className=" h-screen  ">
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className="w-[32px] h-[4px]  mx-1 bg-[#E2E8F0] rounded-full" />
          }
          activeDot={
            <View className="w-[32px] h-[4px] mx-1  bg-[#0286FF] rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboarding.map((item) => (
            <View key={item.id}>
              <Image
                source={item.image}
                alt="on1"
                className="h-[406px] w-full   object-contain"
              />
              <View className="mt-10 px-6 py-5">
                <Text className="text-3xl font-bold">{item.title}</Text>
                <Text className="text-base mt-5 text-[#7B6F72] font-normal">
                  {item.description}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>
      </View>

      <CircularProgressbar
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        progress={progressPercentage}
      />
    </View>
  );
};

export default Welcome;
