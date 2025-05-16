import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native"; 
import Altbar from '../../Components/Altbar/Altbar';

const HekimlerPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#1A237E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doktor Hizmetleri</Text>
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
      
      {/* Doctor Cards */}
      <ScrollView style={styles.doctorList} keyboardShouldPersistTaps="handled">
        {[1, 2, 3].map((doctor, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.card}
            onPress={() => navigation.navigate("DoctorInfoPage", { doctorId: index })} // Doktor detayına yönlendirme
          >
            <View style={styles.cardHeader}>
              <Image source={require('../../Assets/Doctor.png')} style={styles.doctorImage} />
              <View style={styles.cardTextContainer}>
                <Text style={styles.speciality}>Deri ve Zührevi Hastalıkları</Text>
                <Text style={styles.doctorName}>Doç. Dr. Duru Onan</Text>
                <Text style={styles.hospital}>Başkent Üniversitesi Hastanesi - ANKARA</Text>
              </View>
              <View style={styles.favoriteContainer}>
                <FontAwesome name="heart-o" size={22} color="#1A237E" />
                <Text style={styles.favoriteCount}>5</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Altbar */}
      <View style={styles.altbarContainer}>
        <Altbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // ✅ Sayfanın tam boyutta olmasını sağlar
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 16,
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
  doctorList: {
    flex: 1, // ✅ İçeriğin dinamik olarak genişlemesini sağlar
    paddingBottom: 80, // ✅ Altbar'ın doktorları kapatmaması için boşluk bırak
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
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTextContainer: {
    flex: 1,
    paddingTop: 10,
  },
  speciality: {
    fontSize: 12,
    color: "#757575",
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1A237E",
    paddingBottom: 10,
  },
  hospital: {
    fontSize: 14,
    color: "#616161",
  },
  favoriteContainer: {
    alignItems: "center",
  },
  favoriteCount: {
    fontSize: 12,
    color: "#1A237E",
  },
  altbarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default HekimlerPage;
