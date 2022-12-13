import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import axios from "axios";
import { XCircle } from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../components/Card";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState([]);
  const [list, setList] = useState(games);

  useEffect(() => {
    try {
      axios.get(`https://www.freetogame.com/api/games`).then((res) => {
        const game = res.data;
        setGames(game);
        setList(game);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleSearch = (text) => {
    setList(
      games.filter(
        (item) => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1
      )
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-600">
      <View className="flex-1 bg-gray-600 gap-y-6">
        <View className="w-auto p-4 gap-y-2">
          <Text className="text-white text-[36px] font-bold">Free to play</Text>
          <Text className="text-white text-[16px]">
            Conheça todos os jogos free to play
          </Text>
          <View className="bg-zinc-400 rounded-md p-2">
            <TextInput
              onChangeText={(text) => handleSearch(text)}
              placeholder="Exemplo: Fortnite"
            />
            <XCircle size="16" color="#000" />
          </View>
        </View>
        <View className="flex-1 px-2">
          <FlashList
            showsVerticalScrollIndicator={false}
            data={list}
            renderItem={({ item, index }) => <Card key={item.id} data={item} />}
            estimatedItemSize={27}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
