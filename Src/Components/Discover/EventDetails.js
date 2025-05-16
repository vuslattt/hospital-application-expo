import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LocationSvg2 from '../../Assets/svg/LocationSvg2';
import GrafficSvg from '../../Assets/svg/GrafficSvg';
import ProfileSvg2 from '../../Assets/svg/ProfileSvg2';
import MoneySvg from '../../Assets/svg/MoneySvg';

const { width } = Dimensions.get('window');

export default function EventDetails({ eventDetails }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false); 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Resim */}
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../Assets/Kesfet/Etkinlik.png')} 
          style={styles.image} 
        />
      </View>

      {/* Kart */}
      <View style={styles.card}>
        <Text style={styles.title}>{eventDetails.title}</Text>
        <Text style={styles.description}>{eventDetails.longDescription}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <LocationSvg2 width={16} height={16} />
            <Text style={styles.infoText}>{eventDetails.eventLocation || 'Online'}</Text>
          </View>
          <View style={styles.infoItem}>
            <GrafficSvg width={16} height={16} />
            <Text style={styles.infoText}>
              {new Date(eventDetails.date).toLocaleDateString()} {eventDetails.startHour} - {eventDetails.endHour}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <ProfileSvg2 width={16} height={16} />
            <Text style={styles.infoText}>{eventDetails.eventAttendeeCount} Sağlık Elçisi katılıyor.</Text>
          </View>
          <View style={styles.infoItem}>
            <MoneySvg width={16} height={16} />
            <Text style={styles.infoText}>{eventDetails.eventPrice} </Text>
          </View>
        </View>
      </View>

      {/* "Book a Slot" Butonu */}
      <TouchableOpacity style={styles.button} onPress={() => setConfirmModalVisible(true)}>
        <Text style={styles.buttonText}>Book a Slot</Text>
      </TouchableOpacity>

      {/* Onay Modalı */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmModalVisible}
        onRequestClose={() => setConfirmModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../../Assets/Kesfet/Modal.png')} style={styles.modalImage} />
            <Text style={styles.modalTitle}>Etkinliğe Katılımınızı Onaylıyor Musunuz?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.confirmButton, styles.confirmButtonYes]}
                onPress={() => {
                  setConfirmModalVisible(false);
                  setModalVisible(true);
                }}
              >
                <Text style={styles.confirmButtonText}>Evet</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.confirmButton, styles.confirmButtonNo]}
                onPress={() => setConfirmModalVisible(false)}
              >
                <Text style={styles.confirmButtonText}>Hayır</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Başarı Modalı */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../../Assets/Kesfet/Modal.png')} style={styles.modalImage} />
            <Text style={styles.modalTitle}>Etkinlik Kaydınız Alındı</Text>
            <Text style={styles.modalDescription}>
              Etkinlikten önce hatırlatma bildirimi alacaksınız. Etkinliğinizi yaklaşan randevular bölümünden takip edebilirsiniz.
            </Text>
          </View>

          {/* "Randevularım" Butonu */}
          <TouchableOpacity 
            style={styles.modalButton} 
            onPress={() => {
              setModalVisible(false);
              navigation.navigate('AppointmentPage', { initialTab: 'Yaklaşan Etkinliklerim' });
            }}
          >
            <Text style={styles.modalButtonText}>Randevularım</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF2FE',
    flex: 1,
    marginBottom: 80,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 20,
    gap: 30,
  },
  confirmButton: {
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  confirmButtonYes: {
    backgroundColor: '#4CAF50',
  },
  confirmButtonNo: {
    backgroundColor: '#F44336',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: (width * 0.56), 
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginTop: -40, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    width: width - 32, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#23242C',
  },
  description: {
    fontSize: 14,
    color: '#677294',
    marginBottom: 16,
  },
  infoContainer: {
    marginTop: 8,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#41434F',
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#4285F4',
    paddingVertical: 16,
    borderRadius: 5,
    alignItems: 'center',
    width: width - 64, 
    alignSelf: 'center',
    position: 'absolute',
    bottom: -35, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
