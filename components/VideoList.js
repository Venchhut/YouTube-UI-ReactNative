import { View, Text, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

const VideoList = ({ list }) => {
  return (
    <View>
      <View className="mt-3 ">
        <Image source={list.thumbnail} className=" h-50" />
      </View>
      <View className="flex items-end mr-3 -mt-5">
        <View className=" bg-black rounded-full">
          <Text className="text-white text-xs">{list.duration}</Text>
        </View>
      </View>

      <View className="flex-row mt-2 justify-between items-center pb-2 space-x-3 mx-2">
        <Image source={list.avatar} className=" h-10  w-10 rounded-full" />

        <View className=" flex-1 -mx-1 space-x-5">
          <Text>{list.title}</Text>
          <Text className="text-xs">
            {list.channelTitle} .{list.viewCount} .{list.publishedText}
          </Text>
        </View>
        <View>
          <Icon.MoreVertical stroke="black" strokeWidth={2} />
        </View>
      </View>
    </View>
  );
};

export default VideoList;
