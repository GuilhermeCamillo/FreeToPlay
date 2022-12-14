import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export const Card = ({ data, openModal }) => {
  return (
    <TouchableOpacity onPress={openModal} className="rounded-md mb-2 bg-white">
      <View>
        <Image
          source={{ uri: data.thumbnail }}
          className="w-auto h-[210] rounded-t-md border border-stone-300"
        />
      </View>
      <View className="p-4 gap-y-2">
        <View>
          <Text className="font-bold">{data.title}</Text>
          <Text className="font-medium">{data.short_description}</Text>
        </View>
        <View>
          <Text className="font-light">Publisher: {data.publisher}</Text>
          <Text className="font-light">Genre: {data.genre}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
