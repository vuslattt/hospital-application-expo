import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const buttons = [
  { title: 'Randevular', image: require('../../Assets/randevular.png'), width: '48%', height: 90 },
  { title: 'Hastaneler ve Hekimler', image: require('../../Assets/hastaneler.png'), width: '100%', height: 90 },
  { title: 'İlaç Takibi', image: require('../../Assets/ilactakibi.png'), width: '48%', height: 70 },
  { title: 'Yakınlarım', image: require('../../Assets/yakınlarım.png'), width: '48%', height: 70 },
  { title: 'Sağlık Rehberi', image: require('../../Assets/saglıkrehberi.png'), width: '100%', height: 80 },
  { title: 'En Yakın Medicana', image: require('../../Assets/enyakınmedicana.png'), width: '100%', height: 60 },
];

export default function ButtonCard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigation = useNavigation();

  const handleProceed = () => {
    setModalVisible(false);
    navigation.navigate('ProfiliDuzenlePage');
  };

  return (
    <View style={styles.container}>
      {/* En Yakın Medicana için hata bildirimi (arka plan karartmalı) */}
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

      {buttons.map((btn, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.card, { width: btn.width, height: btn.height }]}
          onPress={() => {
            if (btn.title === 'Randevular') {
              setModalText('Bu özelliği kullanabilmek için profilinizi güncelleyin.');
              setModalVisible(true);
            } else if (btn.title === 'En Yakın Medicana') {
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), 2000); // 4 saniye sonra kapanacak
            } else if (btn.title === 'Sağlık Dosyam') {
              navigation.navigate('SaglıkDosyam');
            } else if (btn.title === 'Hastaneler ve Hekimler') {
              navigation.navigate('HospitalAndHekimPage');
            } else if (btn.title === 'İlaç Takibi') {
              navigation.navigate('MedicineControlPage');
            } else if (btn.title === 'Yakınlarım') {
              navigation.navigate('YakınlarımPage');
            }
            else if (btn.title === 'Sağlık Rehberi') {
              navigation.navigate('HekimlerPage');
            }
            
          }}
        >
          <Image source={btn.image} style={styles.image} />
          <Text style={styles.text}>{btn.title}</Text>
        </TouchableOpacity>
      ))}

      {/* Randevular için eski modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image source={require('../../Assets/Allert.png')} style={styles.modalIcon} />
            <Text style={styles.modalText}>{modalText}</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={handleProceed}>
              <Text style={styles.confirmButtonText}>Tamam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 10,
  },
  image: {
    width: 34,
    height: 34,
    marginRight: 10,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#65EAAB',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Arka planı karartan stil
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
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  modalIcon: {
    width: 100,
    height: 90,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D4159',
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmButton: {
    width: '100%',
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#003366',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#003366',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
