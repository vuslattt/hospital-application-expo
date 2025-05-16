import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView , Image} from 'react-native';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// ✅ SVG Bileşenlerini Dahil Et
import GenelSvg from '../../Assets/svg/GenelSvg';
import OdalarSvg from '../../Assets/svg/OdalarSvg';
import HekimlerSvg from '../../Assets/svg/HekimlerSvg';
import TıbbiSvg from '../../Assets/svg/TıbbiSvg';
import MedTeknoSvg from '../../Assets/svg/MedTeknoSvg';
import SunulanHizmetSvg from '../../Assets/svg/SunulanHizmetSvg';

const menuItems = [
  { title: 'Genel Bilgiler', icon: <GenelSvg width={30} height={30} /> },
  { title: 'Odalar', icon: <OdalarSvg width={30} height={30} /> },
  { title: 'Hekimler', icon: <HekimlerSvg width={30} height={30} /> },
  { title: 'Tıbbi Birimler', icon: <TıbbiSvg width={30} height={30} /> },
  { title: 'Medikal Teknolojiler', icon: <MedTeknoSvg width={30} height={30} /> },
  { title: 'Sunulan Hizmetler', icon: <SunulanHizmetSvg width={30} height={30} /> },
];

export default function HospitalInfoPage() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Hospital Header */}
      <View style={styles.headerCard}>
        <Image source={require('../../Assets/Medical.png')} style={styles.headerImage} />
        <View style={styles.infoContainer}></View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="phone" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Hastaneyi Ara</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="photo-library" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Fotoğraf Galerisi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Entypo name="location-pin" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Yol Tarifi Al</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="event" size={24} color="#19A7CE" />
            <Text style={styles.buttonText}>Randevu Al</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Section */}
      <View style={styles.menuCard}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.menuItem}
            onPress={() => {
              if (item.title === "Genel Bilgiler") {
                navigation.navigate("GenelBilgilerPage");
              } else if (item.title === "Odalar") {
                navigation.navigate("OdalarPage");
              } else if (item.title === "Hekimler") {
                navigation.navigate("HekimlerPage");
              } else if (item.title === "Tıbbi Birimler") {
                navigation.navigate("TıbbiBirimlerPage");
              } else if (item.title === "Medikal Teknolojiler") {
                navigation.navigate("MedicalTeknoloPage");
              } else if (item.title === "Sunulan Hizmetler") {
                navigation.navigate("SunulanHizmetPage");
              }
            }}
          >
            {item.icon} 
            <Text style={styles.menuText}>{item.title}</Text>
            <Entypo name="chevron-right" size={24} color="#19A7CE" />
          </TouchableOpacity>
        ))}
      </View>

      {/* Back Button */}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  headerCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 20,
    paddingBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  infoContainer: {
    padding: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#042387',
    marginTop: 5,
    textAlign: 'center',
  },
  menuCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
    flex: 1,
    marginLeft: 10, 
  },
  backButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 15,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
});

