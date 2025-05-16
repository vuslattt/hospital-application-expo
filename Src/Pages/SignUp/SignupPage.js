import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const navigation = useNavigation(); // 🔹 Navigasyon için hook kullanıldı

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* Arka Plan Resmi */}
        <Image source={require('../../Assets/signup.png')} style={styles.backgroundImage} />

        {/* İçerik */}
        <View style={styles.content}>
          {/* İsim Alanı */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={20} color="#002E6E" style={styles.icon} />
            <TextInput 
              style={styles.input} 
              placeholder="İsim" 
              placeholderTextColor="#002E6E"
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* Soyisim Alanı */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="person-outline" size={20} color="#002E6E" style={styles.icon} />
            <TextInput 
              style={styles.input} 
              placeholder="Soyisim" 
              placeholderTextColor="#002E6E"
              value={surname}
              onChangeText={setSurname}
            />
          </View>

          {/* E-posta Alanı */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="email" size={20} color="#002E6E" style={styles.icon} />
            <TextInput 
              style={styles.input} 
              placeholder="E-posta" 
              placeholderTextColor="#002E6E"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        {/* Butonlar - SAYFANIN EN ALTINA OTURTULDU */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>Geri</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={() => navigation.navigate('Verify')} // 🔹 Verify.js sayfasına yönlendirme eklendi
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
    top: '30%', // Formun resme tam oturmasını sağlar
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
    paddingVertical: 3,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
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
});
