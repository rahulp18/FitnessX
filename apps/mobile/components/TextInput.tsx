import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { InputFieldProps } from "@/types/type";
import FontAwesomeIcon from "@expo/vector-icons/FontAwesome5";
const InputField = ({
  label,
  icon,
  secureTextEntry = false,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}: InputFieldProps) => {
  const [isShow, setIsShow] = useState(secureTextEntry || false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          className={`flex flex-row my-2 gap-x-2 justify-start items-center px-4 relative bg-[#F7F8F8] rounded-2xl border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
        >
          {icon && <FontAwesomeIcon name={icon} size={20} color="#7B6F72" />}
          <TextInput
            secureTextEntry={isShow}
            className={`  text-[#7B6F72] p-3 py-4  font-JakartaSemiBold text-[15px] flex-1  ${inputStyle}`}
            {...props}
          />
          <TouchableOpacity onPress={() => setIsShow((prev) => !prev)}>
            {label === "password" &&
              (isShow ? (
                <FontAwesomeIcon name={"eye-slash"} size={20} color="#7B6F72" />
              ) : (
                <FontAwesomeIcon name={"eye"} size={20} color="#7B6F72" />
              ))}
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
