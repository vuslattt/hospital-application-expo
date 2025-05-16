import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native'; // Navigasyon ekledim

const LoginScreen = () => {
  const navigation = useNavigation(); // Navigasyon hook'u

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../../Assets/Logoo.png')} style={styles.logo} />
      </View>
      
      {/* Giriş Başlık */}
      <Text style={styles.title}>Uygulamaya Hoş Geldiniz</Text>
      <Text style={styles.subtitle}>Lütfen doğru bilgilerle giriş yapın</Text>
      
      {/* Giriş Alanları */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Telefon Numarası" placeholderTextColor="#9E9E9E" />
        <TextInput style={styles.input} placeholder="Şifre" placeholderTextColor="#9E9E9E" secureTextEntry={true} />
      </View>
      
      {/* Şifremi Unuttum */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Şifrenizi mi unuttunuz? <Text style={styles.forgotPasswordBold}></Text>Buraya tıklayın</Text>
      </TouchableOpacity>
      
      {/* Giriş Butonu */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.loginButtonText}>Giriş Yap</Text>
      </TouchableOpacity>

      {/* Üye Ol Butonu */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('SignupPage')}>
        <Text style={styles.loginButtonText}>Üye Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    height: 430,
    resizeMode: "contain",
    marginRight:110,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1A237E",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#5C6BC0",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    width: "90%",
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    textAlign: "right",
    fontSize: 16,
    color: "#000",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  forgotPassword: {
    fontSize: 14,
    color: "#1A237E",
    textAlign: "center",
    marginBottom: 20,
  },
  forgotPasswordBold: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  loginButton: {
    backgroundColor: "#65EAAB",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom:10,
    alignItems: "center",
    width: "90%",
  },
  loginButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
