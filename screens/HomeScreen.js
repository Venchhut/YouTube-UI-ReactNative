import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from "../constants/constant";
import ShortVideoCard from "../components/ShortVideoCard";
import VideoList from "../components/VideoList";
const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <ScrollView>
      <SafeAreaView className="flex-row justify-between mx-3">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../assets/icons/youtubeIcon.png")}
            className="h-7 w-11"
          />
          <Text className=" text-xl tracking-tighter">YouTube</Text>
        </View>
        <View className="flex-row items-center space-x-3 ">
          <Icon.Cast stroke="black" />
          <Icon.Bell stroke="black" />
          <Icon.Search stroke="black" />
          <Image
            source={require("../assets/picture/avatar1.jpg")}
            className="h-7 w-7 rounded-full"
          />
        </View>
      </SafeAreaView>

      {/* category */}
      <ScrollView className="flex-1 mt-6" showsVerticalScrollIndicator={false}>
        <View className="py-2 pb-3">
          <ScrollView
            className="px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((category, index) => {
              let isActive = category == activeCategory;
              let textClass = isActive ? "text-white" : "text-black";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(category)}
                  key={index}
                  style={{
                    backgroundColor: isActive
                      ? "#344955"
                      : "rgb(168, 162, 158)",
                  }}
                  className="p-2 px-2 mr-3 rounded-lg"
                >
                  <Text className={textClass}>{category}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>

      <VideoList list={videos[4]} l />
      {/* short video */}
      <View className="mt-2 space-y-2 border-t-zinc-700 border-b-zinc-700">
        <View className=" mx-4 flex-row text-xl mt-3">
          <Image
            source={require("../assets/icons/shortsIcon.png")}
            className="h-7 w-11"
          />
          <Text className="text-xl">Shorts</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {shortVideos.map((item, index) => (
            <ShortVideoCard item={item} key={index} />
          ))}
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {videos.map((list, index) => (
          <VideoList list={list} key={index} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;
