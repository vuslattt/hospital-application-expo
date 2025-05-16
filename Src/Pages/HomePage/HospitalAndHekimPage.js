import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Altbar from '../../Components/Altbar/Altbar'; // Altbar import edildi

const buttons = [
  { title: 'Hastaneler', screen: 'HospitalsPage', image: require('../../Assets/hastaneler.png') },
  { title: 'Hekimler', screen: 'HekimlerPage', image: require('../../Assets/hekimler.png') },
  { title: 'Tıbbi Birimler', screen: 'TıbbiBirimlerPage', image: require('../../Assets/tıbbibirimler.png'), alignLeft: true },
  { title: 'En Yakın Medicana', image: require('../../Assets/enyakınmedicana.png'), alignLeft: true },
  { title: 'Hakkımızda', image: require('../../Assets/hakkımızda.png'), alignLeft: true },
];

export default function HospitalAndHekimPage() {
  const navigation = useNavigation();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Medicana Kartı */}
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image source={require('../../Assets/MedicanaCart.png')} style={styles.bannerImage} />
            <Text style={styles.title}>Medicana'yı Keşfedin</Text>
          </View>
          <Text style={styles.description}>
            Medicana Sağlık Grubu, 1992 yılından bu yana toplumun her kesiminden hastaya yüksek kaliteli sağlık hizmeti sunmayı misyon edinmiş bir kuruluştur.
            Geniş hastane ağı, uzman sağlık personeli ve multidisipliner yaklaşımları ile yüksek standartlarda hizmet sunar.
            Detaylı bilgi almak için ilgili bölümleri ziyaret edebilirsiniz.
          </Text>
        </View>

        {/* Butonlar */}
        <View style={styles.buttonContainer}>
          {buttons.map((btn, index) => (
            <TouchableOpacity 
              key={index} 
              style={[
                styles.button, 
                index < 2 ? styles.rowButton : styles.fullWidthButton, // İlk iki buton yan yana, diğerleri tam genişlik
                btn.alignLeft && styles.alignLeft // Sola hizalanması gerekenleri ayarla
              ]}
              onPress={() => {
                if (btn.title === 'En Yakın Medicana') {
                  setShowAlert(true);
                  setTimeout(() => setShowAlert(false), 2000); // 2 saniye sonra kapanacak
                } else {
                  navigation.navigate(btn.screen);
                }
              }}
            >
              <Image source={btn.image} style={[styles.buttonImage, btn.alignLeft && styles.buttonImageLeft]} />
              <Text style={[styles.buttonText, btn.alignLeft && styles.textLeft]}>{btn.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Konum Kapalı Uyarı Modalı (Mevcut Alert ile Aynı) */}
      <Modal
        visible={showAlert}
        transparent
        animationType="fade"
        onRequestClose={() => setShowAlert(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.alertContainer}>
            <Image source={require('../../Assets/Allert.png')} style={styles.alertIcon} />
            <View style={styles.alertTextContainer}>
              <Text style={styles.alertTitle}>Hata</Text>
              <Text style={styles.alertMessage}>
                Konumunuz kapalı. Lütfen cihaz ayarlarınızdan konumunuzu açınız.
              </Text>
            </View>
          </View>
        </View>
      </Modal>

      {/* Altbar sabit olarak en alta eklendi */}
      <View style={styles.footer}>
        <Altbar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  scrollContent: {
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    width: '100%',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    position: 'absolute',
    top: 10,
    left: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowButton: {
    width: '48%', // Yan yana olacak butonlar için genişlik
    height: 100, // Büyük butonlar için yükseklik artırıldı
  },
  fullWidthButton: {
    width: '100%', // Tam genişlikte butonlar için
  },
  alignLeft: {
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
  },
  buttonImage: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  buttonImageLeft: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
  textLeft: {
    textAlign: 'left',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  alertContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  alertIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  alertMessage: {
    fontSize: 14,
    color: '#555',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
