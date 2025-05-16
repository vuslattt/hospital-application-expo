import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function YakınlarımPage() {
  const [selectedTab, setSelectedTab] = useState('Alınan Yetkiler'); // Varsayılan olarak "Alınan Yetkiler" seçili

  return (
    <View style={styles.container}>
      {/* Ana Hesap Kartı */}
      <View style={styles.mainAccountCard}>
        <Text style={styles.sectionTitle}>Ana Hesap</Text>
        <View style={styles.accountInfo}>
          <Image source={require('../../Assets/anahesap.png')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.accountName}>Hasan Vuslat Coşkun</Text>
            <Text style={styles.accountType}>Ana Hesap</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileButtonText}>Profilime Git</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Yakın Hesabı Yetkisi Al Kartı */}
      <View style={styles.subAccountCard}>
        <Image source={require('../../Assets/yakınhesap.png')} style={styles.subAccountIcon} />
        <Text style={styles.subAccountText}>Yakın Hesabı Yetkisi Al</Text>
      </View>

      {/* Alınan Yetkiler & Verilen Yetkiler Butonları */}
      <View style={styles.permissionsContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Alınan Yetkiler' ? styles.activeTab : styles.inactiveTab]}
          onPress={() => setSelectedTab('Alınan Yetkiler')}
        >
          <Text style={[styles.tabText, selectedTab === 'Alınan Yetkiler' ? styles.activeTabText : styles.inactiveTabText]}>
            Alınan Yetkiler
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Verilen Yetkiler' ? styles.activeTab : styles.inactiveTab]}
          onPress={() => setSelectedTab('Verilen Yetkiler')}
        >
          <Text style={[styles.tabText, selectedTab === 'Verilen Yetkiler' ? styles.activeTabText : styles.inactiveTabText]}>
            Verilen Yetkiler
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    padding: 15,
  },
  mainAccountCard: {
    backgroundColor: '#042387',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  accountInfo: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  accountType: {
    fontSize: 14,
    color: '#666',
  },
  profileButton: {
    backgroundColor: '#27C6E9',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  profileButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subAccountCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 15,
  },
  subAccountIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
  subAccountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },

  // BÜYÜTÜLMÜŞ BACKGROUND PERMISSIONS CONTAINER
  permissionsContainer: {
    flexDirection: 'row',
    backgroundColor: '#042387', // Tam arka planı büyüttüm
    borderRadius: 15, // Kenarları daha belirgin yuvarladım
    padding: 5, // İç boşluğu artırdım
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginHorizontal: 0, // Kenarlardan biraz boşluk
  },
  tab: {
    flex: 1,
    paddingVertical: 14, // Butonları büyüttüm
    alignItems: 'center',
    borderRadius: 12, // Kenarları daha yuvarladım
  },
  activeTab: {
    backgroundColor: 'white',
  },
  inactiveTab: {
    backgroundColor: '#042387',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#042387',
  },
  inactiveTabText: {
    color: 'white',
  },
});
