import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Navigasyon için import
import OzgecmisSvg from '../../Assets/svg/OzgecmisSvg';
import YazılarSvg from '../../Assets/svg/YazılarSvg';
import SaglikRehberiSvg from '../../Assets/svg/SaglıkYazılarSvg';

export default function DoctorInfoPage() {
  const [selectedTab, setSelectedTab] = useState('Hekim Özgeçmişi'); // Varsayılan olarak Hekim Özgeçmişi seçili
  const [alertVisible, setAlertVisible] = useState(false); // Modal görünürlüğü için state
  const navigation = useNavigation(); // Navigasyon objesi

  // "Tamam" butonuna basınca ProfiliDuzenlePage.js sayfasına yönlendirme
  const handleNavigateToProfileEdit = () => {
    setAlertVisible(false); // Modalı kapat
    setTimeout(() => {
      navigation.navigate('ProfiliDuzenlePage'); // Sayfaya yönlendir
    }, 300); // Hafif gecikme, daha akıcı bir geçiş için
  };
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Tüm İçerik Tek Kartta */}
        <View style={styles.card}>
          {/* Üst Kısım */}
          <View style={styles.header}>
            <Image source={require('../../Assets/Doctor.png')} style={styles.doctorImage} />
            <View style={styles.textContainer}>
              <Text style={styles.doctorTitle}>Prof. Dr.</Text>
              <Text style={styles.doctorName}>A. Murat Müslüman</Text>
              <View style={styles.tagContainer}>
                <Text style={styles.hospitalTag}>Güven Hastanesi</Text>
                <Text style={styles.specialtyTag}>Beyin Ve Sinir Cerrahisi</Text>
              </View>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.buttonContainer}>
                     <TouchableOpacity 
                       style={[styles.tabButton, selectedTab === 'Hekim Özgeçmişi' && styles.selectedButton]} 
                       onPress={() => setSelectedTab('Hekim Özgeçmişi')}
                     >
                       <OzgecmisSvg width={30} height={30} />
                       <Text style={[styles.buttonText, selectedTab === 'Hekim Özgeçmişi' && styles.selectedButtonText]}>
                         Hekim Özgeçmişi
                       </Text>
                     </TouchableOpacity>
         
                     <TouchableOpacity 
                       style={[styles.tabButton, selectedTab === 'Akademik Yayınlar' && styles.selectedButton]} 
                       onPress={() => setSelectedTab('Akademik Yayınlar')}
                     >
                       <YazılarSvg width={30} height={30} />
                       <Text style={[styles.buttonText, selectedTab === 'Akademik Yayınlar' && styles.selectedButtonText]}>
                         Akademik Yayınlar
                       </Text>
                     </TouchableOpacity>
         
                     <TouchableOpacity 
                       style={[styles.tabButton, selectedTab === 'Sağlık Rehberi' && styles.selectedButton]} 
                       onPress={() => setSelectedTab('Sağlık Rehberi')}
                     >
                       <SaglikRehberiSvg width={30} height={30} />
                       <Text style={[styles.buttonText, selectedTab === 'Sağlık Rehberi' && styles.selectedButtonText]}>
                         Sağlık Rehberi Yazıları
                       </Text>
                     </TouchableOpacity>
                   </View>

          <View style={styles.separator} />

          {/* Seçilen Sekmeye Göre İçerik */}
          {selectedTab === 'Hekim Özgeçmişi' && (
            <>
              <Text style={styles.sectionTitle}>Hekim Özgeçmişi</Text>
              <Text style={styles.subTitle}>Mezun Olduğu Tıp Fakültesi ve Yılı</Text>
              <Text style={styles.infoText}>Uludağ Üniversitesi Tıp Fakültesi, 1990</Text>
              <Text style={styles.subTitle}>Uzmanlık Eğitimi Aldığı Yer ve Yılı</Text>
              <Text style={styles.infoText}>Şişli Etfal Eğitim ve Araştırma Hastanesi Beyin ve Sinir Cerrahisi, 1992 - 1998</Text>
              <Text style={styles.subTitle}>Mesleki Deneyim</Text>
              <Text style={styles.infoText}>
                - Okmeydanı Cemil Taşcıoğlu Beyin Cerrahisi Kliniği Eğitim Sorumlusu (Prof. Dr.), 2022 - 2024
              </Text>
              <Text style={styles.infoText}>
                - Şişli Etfal Eğitim ve Araştırma Hastanesi Beyin ve Sinir Cerrahisi Kliniği İdari Sorumlusu (Doç. Dr.), 2012 - 2022
              </Text>
            </>
          )}

          {selectedTab === 'Akademik Yayınlar' && (
            <Text style={styles.noContent}>Akademik Yayın yok</Text>
          )}

          {selectedTab === 'Sağlık Rehberi' && (
            <Text style={styles.noContent}>Sağlık Rehberi Yazıları yok</Text>
          )}
        </View>
      </ScrollView>

      {/* Sayfanın En Altına Sabitlenen Butonlar */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.actionButton} onPress={() => setAlertVisible(true)}>
          <Text style={styles.actionButtonText}>Randevu Al</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Alert */}
      <Modal visible={alertVisible} transparent={true} animationType="fade">
        <View style={styles.overlay}>
          <View style={styles.alertBox}>
            <Image source={require('../../Assets/Allert.png')} style={styles.alertIcon} />
            <Text style={styles.alertText}>
              Bu özelliği kullanabilmek için{'\n'}profilinizi güncelleyin.
            </Text>

            {/* Butonlar */}
            <TouchableOpacity style={styles.confirmButton} onPress={handleNavigateToProfileEdit}>
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  container: {
    padding: 10,
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    width: '95%',
    maxWidth: 500,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '30%',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedButton: {
    backgroundColor: '#65EAAB',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#042387',
    textAlign: 'center',
    marginTop: 5,
  },
  selectedButtonText: {
    color: 'white',
  },
  icon: {
    width: 30,
    height: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  noContent: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
  bottomButtons: {
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  actionButton: {
    backgroundColor: '#65EAAB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10, // Butonlar arasında boşluk bırak
  },
  actionButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#042387',
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    flexShrink: 1,
  },
  doctorTitle: {
    fontSize: 16,
    color: '#333',
  },
  doctorName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#042387',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  hospitalTag: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    marginRight: 5,
    color: '#042387',
    fontWeight: 'bold',
    fontSize: 12,
    flexShrink: 1,
    marginBottom: 10,
  },
  specialtyTag: {
    backgroundColor: '#E0E7FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    color: '#042387',
    fontWeight: 'bold',
    fontSize: 12,
    flexShrink: 1,
  },
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

