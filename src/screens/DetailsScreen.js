import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DetailsScreen = ({ route }) => {
  const { data } = route.params;
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 gap-y-3">
        <Image
          source={{ uri: data.thumbnail }}
          className="w-auto h-[210] rounded-t-md border border-stone-300"
        />
        <View className="p-4">
          <Text>Title: {data.title}</Text>
          <Text>Description: {data.short_description}</Text>
          <Text>Genre: {data.genre}</Text>
          <Text>Platform: {data.platform}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
