import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Headers from '../../Components/Header';
import HomePageCart from "../../Components/HomePageCart";
import Altbar from "../../Components/Altbar/Altbar";
import DiscoverPage from "../DiscoverPage";
import { useNavigation, useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.container}>
      {/* Sabit Header */}
      <Headers />
      
      <ScrollView style={styles.scrollContainer}>
        <HomePageCart />
        <DiscoverPage navigation={navigation} route={route} />
      </ScrollView>
      <Altbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F3FE",
  },
  scrollContainer: {
  },
});

export default HomeScreen;
