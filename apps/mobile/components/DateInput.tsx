import { View, Text, Platform, Pressable } from "react-native";
import React, { useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Icons from "@expo/vector-icons/FontAwesome";
import moment from "moment";
const DateInput = ({ handleChange }: { handleChange: any }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    handleChange("dob", currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };
  return (
    <View className="mt-4">
      <Pressable
        className="   bg-[#F7F8F8] px-4 py-5 gap-x-2 rounded-2xl flex-row items-center"
        onPress={showDatepicker}
      >
        <Icons color="#7B6F72" name="calendar" size={18} />
        <Text className="  flex-1 h-full">
          {" "}
          {moment(date, "mm/dd/yyyy").format("MM/DD/YYYY")}
        </Text>
      </Pressable>
      {show && (
        <DateTimePicker
          value={date}
          mode="date" // Only show the date picker
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateInput;
