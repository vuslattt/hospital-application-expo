import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LanguagePage() {
  const navigation = useNavigation();
  const [selectedLanguage, setSelectedLanguage] = useState('TR'); // Varsayılan olarak Türkçe seçili

  return (
    <View style={styles.container}>
      {/* Dil Seçme Kartı */}
      <View style={styles.languageCard}>
        <Text style={styles.headerText}>Dil Seçiniz</Text>

        {/* Arama Kutusu */}
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={18} color="#A0A0A0" style={styles.searchIcon} />
          <TextInput placeholder="Dil Ara" placeholderTextColor="#A0A0A0" style={styles.searchInput} />
        </View>

        {/* Dil Seçenekleri */}
        <TouchableOpacity style={styles.languageOption} onPress={() => setSelectedLanguage('U.A.E.')}>
          <Text style={styles.languageText}>Arabic (U.A.E.)</Text>
          <View style={selectedLanguage === 'U.A.E.' ? styles.radioSelected : styles.radio} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.languageOption} onPress={() => setSelectedLanguage('TR')}>
          <Text style={styles.languageText}>Türkçe (TR)</Text>
          <View style={selectedLanguage === 'TR' ? styles.radioSelected : styles.radio} />
        </TouchableOpacity>
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
  languageCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  headerText: {
    backgroundColor: '#002E6E',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: -10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  languageOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  languageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A0A0A0',
    backgroundColor: 'white',
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#002E6E',
    backgroundColor: '#002E6E',
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
