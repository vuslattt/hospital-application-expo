import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Modal } from 'react-native';
import Altbar from '../../Components/Altbar/Altbar';
import { useNavigation } from '@react-navigation/native';

export default function SaglikDosyam() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleProceed = () => {
    setModalVisible(false);
    navigation.navigate('ProfiliDuzenlePage');
  };

  return (
    <ImageBackground 
      source={require('../../Assets/Ana.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.header}>Sağlık Kayıtlarınız</Text>
        <Text style={styles.subText}>
          Sağlık geçmişinize hızlı ve güvenli bir şekilde erişin. 
          Bu sayfadan önemli sağlık bilgilerinizi görüntüleyebilirsiniz.
        </Text>

        <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
          <Image source={require('../../Assets/radyoloji.png')} style={styles.icon} />
          <Text style={styles.cardText}>Radyoloji Sonuçlarım</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
          <Image source={require('../../Assets/labsonuc.png')} style={styles.icon} />
          <Text style={styles.cardText}>Laboratuvar Sonuçlarım</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
          <Image source={require('../../Assets/recete.png')} style={styles.icon} />
          <Text style={styles.cardText}>Reçetelerimi Görüntüle</Text>
        </TouchableOpacity>
      </View>
      
      <Altbar />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Image source={require('../../Assets/Allert.png')} style={styles.modalIcon} />
            <Text style={styles.modalText}>Bu özelliği kullanabilmek için profilinizi güncelleyin.</Text>
            <TouchableOpacity style={styles.confirmButton} onPress={handleProceed}>
              <Text style={styles.confirmButtonText}>Tamam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D4159',
    marginBottom: 8,
  },
  subText: {
    fontSize: 14,
    color: '#4F4F4F',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    width: '70%',
    backgroundColor: '#EAF7FF',
    borderRadius: 12,
    padding: 45,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 60,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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