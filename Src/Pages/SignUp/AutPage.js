import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function AutPage() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Arka Plan Resmi */}
      <Image source={require('../../Assets/autt.png')} style={styles.backgroundImage} />

      {/* İçerik */}
      <View style={styles.content}>
        {/* SMS ile Doğrulama */}
        <TouchableOpacity 
          style={[styles.optionContainer, selectedMethod === 'sms' && styles.selectedOption]} 
          onPress={() => setSelectedMethod('sms')}
        >
          <FontAwesome name="commenting" size={24} color="#002E6E" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>SMS ile Doğrulayınız</Text>
            <Text style={styles.optionSubtitle}>Hesabınızı onaylamak için +90-(505)8443788 numaralı telefona onay kodu gönderelim</Text>
          </View>
          <FontAwesome 
            name={selectedMethod === 'sms' ? "check-square-o" : "square-o"} 
            size={24} 
            color="#002E6E" 
          />
        </TouchableOpacity>

        {/* E-Posta ile Doğrulama */}
        <TouchableOpacity 
          style={[styles.optionContainer, selectedMethod === 'email' && styles.selectedOption]} 
          onPress={() => setSelectedMethod('email')}
        >
          <FontAwesome name="envelope" size={24} color="#002E6E" style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.optionTitle}>E-Posta ile Doğrulayınız</Text>
            <Text style={styles.optionSubtitle}>esldnd@hotmail.com adresine onay kodu gönderelim</Text>
          </View>
          <FontAwesome 
            name={selectedMethod === 'email' ? "check-square-o" : "square-o"} 
            size={24} 
            color="#002E6E" 
          />
        </TouchableOpacity>
      </View>

      {/* Butonlar - SAYFANIN EN ALTINA OTURTULDU */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.nextButton, !selectedMethod && styles.disabledButton]}
          disabled={!selectedMethod}
          onPress={() => navigation.navigate('OtpPage')}
        >
          <Text style={styles.nextButtonText}>Devam</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    top: '25%', // Butonları tam resme oturtur
    width: '90%',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  selectedOption: {
    borderColor: '#002E6E',
    borderWidth: 1,
  },
  icon: {
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 22,
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
