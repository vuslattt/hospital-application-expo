import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DoctorCard from '../../Components/DoctorCard/DoctorCard'; // ✅ DoctorCard import edildi

export default function DoctorSearchPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const categories = [
    'Tümü', 'Dermotoloji', 'Çocuk Sağlık', 'Kardiyoloji', 'Ortopedi', 
    'Nöroloji', 'Genel Cerrahi', 'Üroloji', 'Dahiliye', 'Kulak, Burun, Boğaz'
  ];

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer} 
        showsVerticalScrollIndicator={false}
      >

        {/* Ülke Seçme Alanı */}
        <TouchableOpacity style={styles.selectBox}>
          <View style={styles.locationContainer}>
            <Image source={require('../../Assets/location.png')} style={styles.locationIcon} />
            <Text style={styles.selectText}>Turkey</Text>
          </View>
          <Text style={styles.arrow}>▼</Text>
        </TouchableOpacity>

        {/* Sağa Kaydırmalı Küçük Kategori Seçimi */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryButton, selectedCategory === category && styles.activeCategory]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[styles.categoryText, selectedCategory === category && styles.activeCategoryText]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Doktor Kartları */}
        <View style={styles.doctorCardsContainer}>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />


        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 100, // Alt kaydırma boşluğu eklendi
  },
  selectBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C4C8D0',
    marginBottom: 10, // Kategorilerle arasına boşluk koydum
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3.53 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 18, 
    height: 18, 
    resizeMode: 'contain',
    marginRight: 8,
  },
  selectText: {
    fontSize: 14, 
    color: '#2D4159',
  },
  arrow: {
    fontSize: 16,
    color: '#2D4159',
  },
  categoryScroll: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  categoryButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,  
    paddingHorizontal: 12,  
    borderRadius: 20,
    marginRight: 8,  
    borderWidth: 1,
    borderColor: '#C4C8D0',
    minWidth: 80, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCategory: {
    backgroundColor: '#0EBE7F',
    borderColor: '#0EBE7F',
  },
  categoryText: {
    fontSize: 12,  
    color: '#2D4159',
  },
  activeCategoryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  doctorCardsContainer: {
    marginTop: 20,
  },
  bottomSpacing: {
    height: 50, // Aşağı kaydırma için ekstra boşluk
  }
});
