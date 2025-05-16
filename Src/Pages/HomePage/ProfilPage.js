import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AltBar from '../../Components/Altbar/Altbar'; // AltBar.js'i içe aktar

export default function ProfilPage() {
  const navigation = useNavigation(); // Navigation Hook'u ekledik

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profil Kartı */}
        <View style={[styles.profileCard, styles.shadow]}>
          <Image source={require('../../Assets/profilim.png')} style={styles.icona} />
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Sağlıklı Günler Dileriz</Text>
            <Text style={styles.userName}>Hasan Vuslat Coşkun</Text>
          </View>
        </View>

        {/* Tüm bilgileri içeren ana kart */}
        <View style={[styles.mainCard, styles.shadow]}>
          {/* Bilgi Kartları */}
          <View style={styles.infoRow}>
            <Image source={require('../../Assets/ulke.png')} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Ülke / Bölge</Text>
              <Text style={styles.valueBold}>Türkiye</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Image source={require('../../Assets/uyruk.png')} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Uyruk</Text>
              <Text style={styles.value}>Uyruk Bilgisi Bulunamadı</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Image source={require('../../Assets/tckn.png')} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>TCKN</Text>
              <Text style={styles.value}>TCKN Bilgisi Bulunamadı</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Image source={require('../../Assets/name.png')} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>İsim-Soyisim</Text>
              <Text style={styles.valueBold}>Hasan Vuslat Coşkun</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Image source={require('../../Assets/dogum.png')} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Doğum Tarihi</Text>
              <Text style={styles.value}>Doğum Tarihi Bilgisi Bulunamadı</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.infoRow}>
            <Image source={require('../../Assets/cinsiyet.png')} style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.label}>Cinsiyet</Text>
              <Text style={styles.value}>Cinsiyet Bilgisi Bulunamadı</Text>
            </View>
          </View>
        </View>

        {/* Profili Düzenle Butonu */}
        <TouchableOpacity
          style={[styles.editProfileButton, styles.shadow]}
          onPress={() => navigation.navigate('ProfiliDuzenlePage')} // Navigasyon Eklendi
        >
          <Image source={require('../../Assets/profiliduzenle.png')} style={styles.editIcon} />
          <Text style={styles.editText}>Profili Düzenle</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Alt Menü */}
      <AltBar style={styles.altBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
  },
  scrollContainer: {
    padding: 10,
  },
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 14,
    color: '#072690',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#072690',
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 10,
  },
  textContainer: {
    marginLeft: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#072690',
  },
  value: {
    fontSize: 14,
    color: '#666',
  },
  valueBold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#072690',
  },
  icon: {
    width: 36,
    height: 36,
  },
  icona: {
    width: 46,
    height: 46,
  },
  editProfileButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  editIcon: {
    width: 30,
    height: 30,
  },
  editText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#072690',
    marginLeft: 10,
  },
  altBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Android için gölgelendirme
  },
});
