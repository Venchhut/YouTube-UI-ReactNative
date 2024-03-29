import { View, Text, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

const ShortVideoCard = ({ item }) => {
  return (
    <View className="relative h-60 w-40 mr-2 flex justify-between">
      <Image
        source={item.image}
        className="h-full w-full rounded-xl absolute"
      />
      <View className="flex-row justify-end pt-2 pr-0.5">
        <Icon.MoreVertical stroke={"white"} strokeWidth={1.3} height={25} />
      </View>
      <View className="p-3">
        <Text className="text-white shadow-lg font-bold text-sm">
          {item.title}
        </Text>
        <Text className="text-white shadow-md text-sm">{item.viewCount}</Text>
      </View>
    </View>
  );
};

export default ShortVideoCard;
