import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Menu({ onClose }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const navigation = useNavigation(); // Navigasyon objesi

  // Uyarı açma fonksiyonu (Randevular & Yakınlarım için)
  const showProfileAlert = () => {
    setAlertVisible(true);
  };

  // Sayfalara yönlendirme fonksiyonu
  const navigateToPage = (pageName) => {
    onClose(); // Menüyü kapat
    setTimeout(() => {
      navigation.navigate(pageName); // Sayfaya yönlendir
    }, 300);
  };

  // "Tamam" butonuna basınca Profili Düzenle sayfasına yönlendir
  const handleNavigateToProfile = () => {
    setAlertVisible(false);
    navigateToPage('ProfiliDuzenlePage');
  };

  return (
    <View style={styles.menuContainer}>
      {/* Üst Kısım - Kullanıcı Bilgisi ve Geri Butonu */}
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={onClose} style={styles.backButton}>
          <Image source={require('../Assets/gerigit.png')} style={styles.backIcon} />
        </TouchableOpacity>

        {/* Profil Resmi ve Kullanıcı Bilgileri */}
        <View style={styles.profileInfo}>
          <Image source={require('../Assets/profilim.png')} style={styles.profileImage} />
          <View>
            <Text style={styles.welcomeText}>Hoşgeldiniz</Text>
            <Text style={styles.username}>Hasan Vuslat Coşkun</Text>
          </View>
        </View>

        {/* Profilime Git Butonu */}
        <TouchableOpacity style={styles.profileButton} onPress={() => navigateToPage('ProfilPage')}>
          <Text style={styles.profileButtonText}>Profilime Git</Text>
        </TouchableOpacity>
      </View>

      {/* Menü Seçenekleri */}
      <View style={styles.menuItems}>
        <MenuItem title="Ana Sayfa" icon={require('../Assets/anasayfa1.png')} onPress={() => navigateToPage('HomePage')} />
        <MenuItem title="Randevular" icon={require('../Assets/randevular1.png')} onPress={showProfileAlert} />
        <MenuItem title="Yakınlarım" icon={require('../Assets/yakınların1.png')} onPress={showProfileAlert} />
        <MenuItem title="İlaç Takibi" icon={require('../Assets/ilactakibi1.png')} onPress={() => navigateToPage('MedicineControlPage')} />
        <MenuItem title="Su Hatırlatıcı" icon={require('../Assets/suhatırlatıcı.png')} onPress={() => navigateToPage('SuHatırlatPage')} />
        <MenuItem title="Ayarlar" icon={require('../Assets/ayarlar.png')} onPress={() => navigateToPage('SettingsPage')} />
      </View>

      {/* Çıkış Yap Butonu */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Çıkış Yap</Text>
        </TouchableOpacity>
      </View>

      {/* Uyarı Modalı (Blur Efektli) */}
      <Modal visible={alertVisible} transparent={true} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.alertBox}>
            <Image source={require('../Assets/Allert.png')} style={styles.alertIcon} />
            <Text style={styles.alertText}>
              Bu özelliği kullanabilmek için{'\n'}profilinizi güncelleyin.
            </Text>

            {/* Butonlar */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleNavigateToProfile}>
              <Text style={styles.confirmButtonText}>Tamam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setAlertVisible(false)}>
              <Text style={styles.cancelButtonText}>Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Menü Öğesi Bileşeni
const MenuItem = ({ title, icon, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Image source={icon} style={styles.menuIcon} />
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: Dimensions.get('window').width * 0.75,
    height: '100%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    paddingVertical: 20,
  },
  profileSection: {
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    marginTop: 40,
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#002E6E',
    fontWeight: '500',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  profileButton: {
    backgroundColor: '#00AEEF',
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  profileButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  menuItems: {
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    color: '#002E6E',
  },

  // Çıkış Yap Butonu Tasarımı
  logoutContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#002E6E',
    paddingVertical: 15,
    width: '90%',
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  // BLUR UYARI MODALI STİLLERİ
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Blur efektli arka plan
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  alertIcon: {
    width: 50,
    height: 50,
    marginBottom: 15,
  },
  alertText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 15,
  },
  confirmButton: {
    backgroundColor: '#002E6E',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

