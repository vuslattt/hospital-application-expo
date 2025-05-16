import React from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

// ✅ SVG Bileşenlerini Dahil Et
import HospitalSvg from '../Assets/svg/HospitalSvg';
import DoctorSvg from '../Assets/svg/DoctorSvg';
import GuzellikSvg from '../Assets/svg/GuzellikSvg';
import MedicineSvg from '../Assets/svg/MedicineSvg';
import SacEkimSvg from '../Assets/svg/SacEkimSvg';

const HomePageCart = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#e0c6f2", "#fff7ff"]} style={styles.container}>
      {/* Arama Kutusu */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Uzmanlık alanı, Uzman adı" style={styles.searchInput} />
      </View>
      
      {/* Başlık */}
      <Text style={styles.header}>Merhaba Vuslat,</Text>
      <Text style={styles.subHeader}>Bugün hangi hizmetimizden yararlanmak istersin?</Text>
      
      {/* Hizmet Kartları */}
      <View style={styles.cardContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HekimlerPage')}>
            <DoctorSvg width={40} height={40} />
            <Text style={styles.cardText}>Doktorlar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HospitalsPage')}>
            <HospitalSvg width={40} height={40} />
            <Text style={styles.cardText}>Hastahaneler</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('YakınlarımPage')}>
            <GuzellikSvg width={40} height={40} />
            <Text style={styles.cardText}>Güzellik Merkezi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('HospitalsPage')}>
            <SacEkimSvg width={40} height={40} />
            <Text style={styles.cardText}>Saç Ekimi</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={[styles.card2, styles.fullWidth]} onPress={() => navigation.navigate('MedicineControlPage')}>
          <MedicineSvg width={40} height={40} />
          <Text style={styles.cardText}>İlaçlar</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A237E",
  },
  subHeader: {
    fontSize: 14,
    color: "#5C6BC0",
    marginBottom: 35,
  },
  cardContainer: {
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  card: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  card2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    gap: 10,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fullWidth: {
    width: "100%",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 10,
  },
});

export default HomePageCart;
