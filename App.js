import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigate from './Src/Navigate'; // Dosya yolunu kendi yapına göre ayarla

export default function App() {
  return (
    <NavigationContainer>
      <Navigate />
    </NavigationContainer>
  );
}
