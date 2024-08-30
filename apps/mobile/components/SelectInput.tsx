import { View, Text } from "react-native";
import React, { useState } from "react";
import { SelectInputProps } from "@/types/type";
import Icons from "@expo/vector-icons/FontAwesome5";
import { Picker } from "@react-native-picker/picker";

const SelectInput = ({
  label,
  options,
  value,
  className,
  icon = "users", // You can pass the icon name as a prop, default is "users"
  iconStyle,
  onChange,
}: SelectInputProps) => {
  return (
    <View className="relative flex flex-row items-center bg-[#F7F8F8] px-4 py-2 rounded-xl">
      {/* Left Icon */}
      <Icons name={icon} size={18} color="#7B6F72" style={iconStyle} />

      {/* Picker */}
      <View className="flex-1 ml-3">
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onChange(itemValue)}
          style={{ height: 40, color: "#7B6F72" }} // Adjust style as needed
        >
          {options.map((option) => (
            <Picker.Item
              label={option.label}
              value={option.value}
              key={option.value}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default SelectInput;
