import { ReactNode } from "react";
import { TextInputProps, TouchableOpacityProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: ReactNode;
  IconRight?: ReactNode;
  className?: string;
}

declare interface SSOButtonProps extends TouchableOpacityProps {
  icon: string;
  interStyle?: string;
  color?: string;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}
declare interface SelectInputProps {
  label: string;
  icon?: any;
  options: {
    label: string;
    value: string;
  }[];
  value: string;
  onChange: (value: string) => void;
  iconStyle?: string;
  className?: string;
}

declare interface SignUpFormTypes {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isAgree: bolean;
}
