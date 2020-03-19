import React from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import Bot from "./src/components/Bot";
const App = () => {
  return (
    <View>
      <Header />
      <AlbumList />
      
    </View>
  );
};

export default App;
