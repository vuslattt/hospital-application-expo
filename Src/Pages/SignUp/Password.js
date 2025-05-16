import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Navigation eklendi

export default function AgreementPage() {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation(); // Navigation hook'u kullanıldı

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Arka Plan Resmi */}
        <Image source={require('../../Assets/phonenumber.png')} style={styles.backgroundImage} />

        {/* İçerik */}
        <View style={styles.content}>
          {/* Ülke Kodu Girişi */}
          <View style={styles.inputContainer}>
            <FontAwesome name="globe" size={20} color="#002E6E" style={styles.icon} />
            <TextInput 
              style={styles.input} 
              placeholder="Ülke Kodu" 
              placeholderTextColor="#002E6E"
              value={countryCode}
              onChangeText={setCountryCode}
            />
          </View>

          {/* Telefon Numarası Girişi */}
          <View style={styles.inputContainer}>
            <FontAwesome name="phone" size={20} color="#002E6E" style={styles.icon} />
            <TextInput 
              style={styles.input} 
              placeholder="Telefon" 
              placeholderTextColor="#002E6E"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>

        {/* Butonlar - SAYFANIN EN ALTINA OTURTULDU */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Geri</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.nextButton, (!countryCode || !phoneNumber) && styles.disabledButton]}
            disabled={!countryCode || !phoneNumber}
            onPress={() => navigation.navigate('WhichPage')} // Yönlendirme eklendi
          >
            <Text style={styles.nextButtonText}>Devam</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    resizeMode: 'cover',
  },
  content: {
    position: 'absolute',
    top: '27.5%', // Formun resme tam oturmasını sağlar
    width: '91%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 9,
    paddingHorizontal: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: '#002E6E',
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 13,
    fontSize: 14,
    color: '#002E6E',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 22, // Butonları en alta oturtur
    width: '95%',
  },
  backButton: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderColor: '#002E6E',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#002E6E',
    fontWeight: 'bold',
    fontSize: 16,
  },
  nextButton: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: '#002E6E',
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#AAB2C6',
  },
});
