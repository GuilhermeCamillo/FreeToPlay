import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

export const ModalInfo = ({ onClose, isOpen }) => {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={true}>
        <View className="flex-1 items-center">
          <View className="mt-auto bg-sky-300 h-[60%] w-[100%] rounded-t-lg p-4">
            <Text>Hello World!</Text>
            <TouchableOpacity onPress={onClose()} className="bg-red-500">
              <Text>BATATA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
