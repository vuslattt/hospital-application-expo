import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DiscoverCard from '../../Components/Discover/DiscoverCard';
import Altbar from "../../Components/Altbar/Altbar"; // ✅ Altbar Eklendi

const HospitalsPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#1A237E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hastane Hizmetleri</Text>
        <TouchableOpacity>
          <Feather name="search" size={24} color="#1A237E" />
        </TouchableOpacity>
      </View>
      
      {/* Filter & Sort Buttons */}
      <View style={styles.filterSortContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <FontAwesome name="filter" size={18} color="#1A237E" />
          <Text style={styles.filterText}>Filtrele</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Feather name="sliders" size={18} color="#1A237E" />
          <Text style={styles.filterText}>Sırala</Text>
        </TouchableOpacity>
      </View>

      {/* ScrollView içinde DiscoverCard ve Hospital Listesi */}
      <ScrollView style={styles.hospitalList} contentContainerStyle={{ paddingBottom: 80 }}>
        
        {/* Ortalanmış DiscoverCard (Artık ScrollView içinde) */}
        <View style={styles.discoverContainer}>
          <DiscoverCard />
        </View>

        {/* Hospital Cards */}
        {[1, 2, 3].map((hospital, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card}
            onPress={() => navigation.navigate('HospitalInfoPage', { hospitalId: index })}
          >
            <View style={styles.cardHeader}>
              <Image source={require('../../Assets/Medicana1.png')} style={styles.hospitalImage} />
              <View style={styles.cardTextContainer}>
                <Text style={styles.hospitalName}>Başkent Üniversitesi Hastanesi</Text>
                <Text style={styles.location}>Başkent Üniversitesi Hastanesi - ANKARA</Text>
              </View>
              <View style={styles.favoriteContainer}>
                <FontAwesome name="heart-o" size={22} color="#1A237E" />
                <Text style={styles.favoriteCount}>5</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>

      {/* Altbar - Ekranın En Altına Sabitlendi */}
      <View style={styles.altbarContainer}>
        <Altbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 40
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 16,
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A237E",
  },
  filterSortContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#1A237E",
    borderRadius: 8,
    flex: 0.48,
    justifyContent: "center",
  },
  filterText: {
    marginLeft: 8,
    color: "#1A237E",
    fontWeight: "bold",
  },
  discoverContainer: {
    left :-20,
    marginBottom: 16,
  },
  hospitalList: {
    flex: 1,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: "row",
  },
  hospitalImage: {
    width: 80,
    height: 110,
    marginRight: 10,
  },
  cardTextContainer: {
    flex: 1,
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A237E",
    paddingBottom: 30,
  },
  location: {
    fontSize: 12,
    color: "#616161",
    paddingBottom: 10,
  },
  favoriteContainer: {
    alignItems: "center",
  },
  favoriteCount: {
    fontSize: 11,
    color: "#1A237E",
  },
  altbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HospitalsPage;
