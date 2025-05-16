import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Arka Plan Resmi */}
        <Image source={require('../../Assets/password.png')} style={styles.backgroundImage} />

        {/* İçerik */}
        <View style={styles.content}>
          {/* Şifre Girişi */}
          <View style={styles.inputContainer}>
            <FontAwesome name="key" size={20} color="#002E6E" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Şifre"
              placeholderTextColor="#002E6E"
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <FontAwesome name={isPasswordVisible ? "eye" : "eye-slash"} size={20} color="#002E6E" style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>

          {/* Şifre Tekrar Girişi */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Şifre Tekrar"
              placeholderTextColor="#002E6E"
              secureTextEntry={!isConfirmPasswordVisible}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}>
              <FontAwesome name={isConfirmPasswordVisible ? "eye" : "eye-slash"} size={20} color="#002E6E" style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Butonlar - SAYFANIN EN ALTINA OTURTULDU */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Geri</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.nextButton, (!password || !confirmPassword || password !== confirmPassword) && styles.disabledButton]}
            disabled={!password || !confirmPassword || password !== confirmPassword}
            onPress={() => navigation.navigate('AutPage')}
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
    top: '29.3%', // Giriş alanlarını resme tam oturtur
    width: '91%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    marginBottom: 10,
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
  eyeIcon: {
    marginLeft: 10,
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

