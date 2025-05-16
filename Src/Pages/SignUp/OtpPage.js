import React, { useState, useRef } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OtpPage() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(180);
  const navigation = useNavigation();
  const inputRefs = Array(6).fill().map(() => useRef(null));

  const handleInputChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Arka Plan Resmi */}
        <Image source={require('../../Assets/otp.png')} style={styles.backgroundImage} />

        {/* İçerik */}
        <View style={styles.content}>
          {/* OTP Giriş Alanı */}
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                style={styles.otpInput}
                maxLength={1}
                keyboardType="numeric"
                value={digit}
                onChangeText={(text) => handleInputChange(text, index)}
                textAlign="center"
              />
            ))}
          </View>

          {/* Sayaç */}
          <Text style={styles.timerText}>02:{String(timer % 60).padStart(2, '0')}</Text>
        </View>

        {/* Butonlar */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.resendButtonText}>Kodu Tekrar Gönder</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Geri</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.nextButton, otp.includes('') && styles.disabledButton]}
            disabled={otp.includes('')}
            onPress={() => navigation.navigate('HomePage')}
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
    top: '30%',
    width: '90%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E6E',
    textAlign: 'center',
    marginBottom: 15,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#002E6E',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002E6E',
    backgroundColor: '#FFF',
  },
  timerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 22,
    width: '95%',
  },
  resendButton: {
    width: '100%',
    paddingVertical: 17,
    backgroundColor: '#00A8E1',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  resendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
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
