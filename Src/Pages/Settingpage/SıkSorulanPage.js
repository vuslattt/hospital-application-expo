import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // FontAwesome ikonları
import Altbar from '../../Components/Altbar/Altbar'; // Altbar import edildi

export default function SıkSorulanPage() {
  return (
    <View style={styles.container}>
      {/* Arama Kutusu */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchTitle}>Sıkça Sorulan Sorularda Ara</Text>
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={18} color="gray" style={styles.searchIcon} />
          <TextInput 
            style={styles.searchInput} 
            placeholder="Örn. Randevu Alma" 
            placeholderTextColor="gray"
          />
        </View>
      </View>

      {/* Sorular Listesi */}
      <ScrollView contentContainerStyle={styles.questionList}>
        {[
          "Kimlik numaramı girdiğimde hata alıyorum, ne yapmalıyım?",
          "KVKK bilgilerimi daha önce girmiştim ancak şimdi güncelleme yapmam isteniyor. Ne yapmalıyım?",
          "Randevu almak istediğimde uygun zaman aralığı göremiyor veya servis hatası ile karşılaşıyorum. Ne yapmalıyım?",
          "Doğrulama SMS kodunu alamıyorum, ne yapmalıyım?",
          "Parolamı doğru girdiğimi düşünüyorum ama hata alıyorum, ne yapmalıyım?",
          "Telefon numaramı doğrulayamıyorum ya da sistem yanlış numara gösteriyor, ne yapmalıyım?"
        ].map((question, index) => (
          <TouchableOpacity key={index} style={styles.questionCard}>
            <Text style={styles.questionText}>{question}</Text>
            <FontAwesome name="chevron-right" size={18} color="#00AEEF" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Altbar (Sayfanın En Altına Sabitlenmiş) */}
      <View style={styles.footer}>
        <Altbar />
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
  },
  searchContainer: {
    backgroundColor: '#003399',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  questionList: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  questionCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E6E',
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
