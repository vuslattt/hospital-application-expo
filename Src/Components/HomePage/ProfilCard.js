import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfilCard({ userName = "Hasan Vuslat Coşkun" }) {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate("ProfilPage");
  };

  return (
    <View style={styles.container}>
      {/* Kullanıcı Bilgileri */}
      <View style={styles.userInfo}>
        <FontAwesome name="user-circle-o" size={50} color="#002E6E" />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Hoşgeldiniz</Text>
          <Text style={styles.userName}>{userName.split(" ")[0]}</Text>
          <Text style={styles.userName}>{userName.split(" ")[1]} {userName.split(" ")[2]}</Text>
        </View>
      </View>

      {/* Profilime Git Butonu */}
      <TouchableOpacity style={styles.profileButton} onPress={handleProfilePress}>
        <Text style={styles.profileButtonText}>Profilime Git</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 25,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 12,
  },
  welcomeText: {
    fontSize: 16,
    color: '#65EAAB',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#65EAAB',
    lineHeight: 22,
  },
  profileButton: {
    backgroundColor: '#20BEC7',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
