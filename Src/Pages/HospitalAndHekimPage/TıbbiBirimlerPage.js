import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const hospitalUnits = {
  A: ['Acil Servis', 'Acil Servis Hekimliği', 'Ağız ve Diş Sağlığı', 'Aile Hekimliği', 'Alerji ve İmmünoloji', 'Algoloji (Ağrı Polikliniği)', 'Anestezi ve Reanimasyon'],
  B: ['Beslenme ve Diyet', 'Beyin ve Sinir Cerrahisi', 'Biyokimya ve Klinik Biyokimya'],
  C: ['Check-Up Merkezi', 'Çocuk Cerrahisi', 'Çocuk Kardiyolojisi', 'Çocuk Nörolojisi', 'Çocuk Onkolojisi'],
  D: ['Dermatoloji (Cildiye)', 'Dahiliye (İç Hastalıkları)', 'Diş Hekimliği'],
  E: ['Endokrinoloji ve Metabolizma Hastalıkları', 'Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji'],
  Z: ['Zührevi Hastalıklar', 'Zona Hastalıkları', 'Zatürre Servisi']
};

export default function TıbbiBirimlerPage({ navigation }) {
  const [search, setSearch] = useState('');

  const filteredUnits = Object.keys(hospitalUnits).reduce((acc, letter) => {
    const units = hospitalUnits[letter].filter(unit => unit.toLowerCase().includes(search.toLowerCase()));
    if (units.length > 0) acc[letter] = units;
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bütün Tıbbi Birimler</Text>
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={18} color="#9EABC0" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tıbbi Birim Ara"
            placeholderTextColor="#9EABC0"
            onChangeText={text => setSearch(text)}
            value={search}
          />
        </View>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>Hastane seçiniz</Text>
          <FontAwesome name="chevron-down" size={16} color="#333" style={styles.dropdownIcon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={Object.keys(filteredUnits)}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{item}</Text>
            </View>
            {filteredUnits[item].map((unit, index) => (
                <TouchableOpacity 
  key={index} 
  style={styles.listItem} 
  onPress={() => navigation.navigate('Tıbbibirim2Page')}
>
  <Text style={styles.listItemText}>{unit}</Text>
  <FontAwesome name="chevron-right" size={16} color="#00A8E8" />
</TouchableOpacity>

            ))}
          </>
        )}
      />

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Geri</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    paddingHorizontal: 20,
    paddingTop:20,
    
  },
  header: {
    backgroundColor: '#042387',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  dropdownIcon: {
    marginLeft: 10,
  },
  sectionHeader: {
    backgroundColor: '#E8EEF5',
    paddingVertical: 8,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E8EEF5',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  backButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
});
