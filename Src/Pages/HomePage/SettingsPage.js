import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // FontAwesome Kütüphanesi
import { useNavigation } from '@react-navigation/native'; // Navigasyon

export default function SettingsPage() {
  const navigation = useNavigation(); // Navigasyon objesi

  return (
    <ScrollView style={styles.container}>
      {/* Profil Kartı */}
      <View style={styles.profileCard}>
        <View style={styles.profileInfo}>
          <FontAwesome name="user-circle" size={50} color="#002E6E" style={styles.profileIcon} />
          <View style={styles.textContainer}>
            <Text style={styles.userName}>Hasan Vuslat Coşkun</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('ProfilPage')}>
          <Text style={styles.profileButtonText}>Profilime Git</Text>
        </TouchableOpacity>
      </View>

      {/* Ayar Seçenekleri */}
      <View style={styles.settingsContainer}>
        <SettingsItem title="Dil Seçeneği" onPress={() => navigation.navigate('LanguagePage')} />
        <SettingsItem title="İletişim Tercihleri" onPress={() => navigation.navigate('ContactPage')} />
        <SettingsItem title="Sözleşmeler" onPress={() => navigation.navigate('SozlesmePage')} />
        <SettingsItem title="Bize Ulaşın" onPress={() => navigation.navigate('BizeUlasPage')} />
        <SettingsItem title="Sıkça Sorulan Sorular" onPress={() => navigation.navigate('SıkSorulanPage')} />
      </View>

      {/* Çıkış Yap Butonu */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>

      {/* Versiyon Bilgisi */}
      <Text style={styles.versionText}>2.2.9.70</Text>
    </ScrollView>
  );
}

// Ayar Seçenekleri Bileşeni
const SettingsItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
    <Text style={styles.settingsText}>{title}</Text>
    <FontAwesome name="chevron-right" size={18} color="#00AEEF" style={styles.arrowIcon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    paddingHorizontal: 15,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  profileButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  profileButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  settingsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  settingsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  settingsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  arrowIcon: {
    marginLeft: 10,
  },
  logoutContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
    alignItems: 'center',
  },
  logoutButton: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  versionText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    marginTop: 20,
    marginBottom: 30,
  },
});
