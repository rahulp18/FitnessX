import { goals } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import React, { useRef } from "react";
import { View, Image, Text, Pressable, Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const { width: screenWidth } = Dimensions.get("window");

interface CarouselItemProps {
  item: {
    image: any;
    title: string;
    description: string;
  };
  index: number;
  currentIndex: number;
}

const CarouselComponent: React.FC = () => {
  const carouselRef = useRef(null);
  const PAGE_WIDTH = screenWidth;
  const PAGE_HEIGHT = 478;

  return (
    <View className="flex-1 justify-center items-center">
      <Carousel
        ref={carouselRef}
        loop={false}
        width={PAGE_WIDTH}
        height={PAGE_HEIGHT}
        data={goals}
        mode="parallax"
        scrollAnimationDuration={1000}
        renderItem={({ item, index }) => (
          <CarouselItem item={item} index={index} currentIndex={index} />
        )}
        modeConfig={{
          parallaxScrollingOffset: 20,
          parallaxScrollingScale: 0.9, // Central item smaller
          parallaxAdjacentItemScale: 0.8, // Adjacent items larger
        }}
      />
    </View>
  );
};

const CarouselItem: React.FC<CarouselItemProps> = ({
  item,
  index,
  currentIndex,
}) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(
      index,
      [currentIndex - 1, currentIndex, currentIndex + 1],
      [1.1, 0.9, 1.1] // 0.9 for active (central) item, 1.1 for adjacent
    );
    return {
      transform: [{ scale: scaleValue }],
    };
  }, [index]);

  return (
    <Pressable className="flex-1 justify-center items-center rounded-lg">
      <LinearGradient colors={["#9DCEFF", "#92A3FD"]} className="rounded-lg">
        <Animated.View
          style={animatedStyle}
          className="w-full h-full rounded-lg p-4 shadow-lg"
        >
          <View className="flex-1 items-center justify-center">
            <Image
              source={item.image}
              className="w-full h-[294px] rounded-lg mb-3"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text className="text-2xl text-center font-bold text-white">
              {item.title}
            </Text>
            <Text className="text-base text-white text-center mt-2">
              {item.description}
            </Text>
          </View>
        </Animated.View>
      </LinearGradient>
    </Pressable>
  );
};

export default CarouselComponent;
