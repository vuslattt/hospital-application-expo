import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ContactPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* SMS Onayı Kartı */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>SMS Onayı</Text>
        <Text style={styles.infoText}>Hesabınıza kayıtlı telefon numarası</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>90-5058443788</Text>
        </View>
        <Text style={styles.confirmText}>
          Duyurular, Bildiriler ve Haberler kapsamında Medicana’nın Bana Telefon ile Ulaşmasını Onaylıyorum.
        </Text>
      </View>

      {/* E-Posta Onayı Kartı */}
      <View style={[styles.card, styles.cardSpacing]}>
        <Text style={styles.cardTitle}>E-Posta Onayı</Text>
        <Text style={styles.infoText}>Hesabınıza kayıtlı e-posta</Text>
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>esldnz@gmail.com</Text>
        </View>
        <Text style={styles.confirmText}>
          Duyurular, Bildiriler ve Haberler kapsamında Medicana’nın Bana Telefon ile Ulaşmasını Onaylıyorum.
        </Text>
      </View>

      {/* Alt Butonlar */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: width * 0.9,
    alignSelf: 'center',
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  cardSpacing: {
    marginTop: -250, // 🛠 SMS ve E-Posta Kartları Arasındaki Boşluk (20 birim)
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002E6E',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  inputBox: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#002E6E',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  confirmText: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  saveButton: {
    backgroundColor: '#002E6E',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#002E6E',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#002E6E',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
