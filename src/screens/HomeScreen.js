import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { ModalInfo } from "../components/Modal";
import { Card } from "../components/Card";
import axios from "axios";

const HomeScreen = () => {
  const [games, setGames] = useState([]);
  const [list, setList] = useState(games);
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const texto = "GUibaz";

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

  useEffect(() => {
    setList(
      games.filter(
        (item) => item.title.toLowerCase().indexOf(text.toLowerCase()) > -1
      )
    );
  }, [text]);

  return (
    <>
      <SafeAreaView className="flex-1 bg-gray-600">
        <View className="flex-1 bg-gray-600 gap-y-6">
          <View className="w-auto p-4 gap-y-2">
            <Text className="text-white text-[36px] font-bold">
              Free to play
            </Text>
            <Text className="text-white text-[16px]">
              Conheça todos os jogos free to play
            </Text>
            <View className="bg-zinc-400 rounded-md p-2 flex-row items-center">
              <TextInput
                onChangeText={(text) => setText(text)}
                placeholder="Example: Fortnite"
                value={text}
                className="flex-1 mr-3"
              />
              <TouchableOpacity onPress={() => setText("")}>
                <Text className="font-bold text-[20px] mr-[8px]">X</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-1 px-2">
            <FlashList
              showsVerticalScrollIndicator={false}
              data={list}
              renderItem={({ item }) => (
                <Card
                  key={item.id}
                  data={item}
                  openModal={() => setIsOpen(true)}
                />
              )}
              estimatedItemSize={27}
            />
          </View>
        </View>
        <ModalInfo isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
