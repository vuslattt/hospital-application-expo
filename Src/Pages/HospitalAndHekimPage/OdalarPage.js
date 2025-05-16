import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const images = [
  require('../../Assets/Hospital11.png'),
  require('../../Assets/Hospital2.png'),
  require('../../Assets/Hospital3.png'),
  require('../../Assets/Hospital4.png'),
  require('../../Assets/Hospital5.png'),
  require('../../Assets/Hospital6.png'),
  require('../../Assets/Hospital7.png'),
  require('../../Assets/Hospital8.png'),
  require('../../Assets/Hospital9.png'),
  require('../../Assets/Hospital10.png'),
];

export default function OdalarPage({ navigation }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleNext = () => {
    setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  return (
    <View style={styles.container}>
      {/* Sayfa Başlığı */}
      <Text style={styles.title}>Medicana Ataköy</Text>

      {/* Büyük Resim Alanı */}
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.arrowLeft} onPress={handlePrev}>
          <Entypo name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Image source={images[selectedImage]} style={styles.mainImage} />
        <TouchableOpacity style={styles.arrowRight} onPress={handleNext}>
          <Entypo name="chevron-right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Küçük Resimler (Alt Kısım) */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.thumbnailContainer}>
        {images.map((img, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedImage(index)} style={styles.thumbnailWrapper}>
            <Image source={img} style={[styles.thumbnail, selectedImage === index && styles.selectedThumbnail]} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Geri Butonu */}
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
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#042387',
    marginBottom: 90,
  },
  imageContainer: {
    width: '90%',
    height: 320,
    borderRadius: 15,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#ddd',
    elevation: 4,
    marginBottom: 95,

  },
  mainImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  arrowLeft: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 20,
    padding: 8,
    zIndex: 2, // Okun üstte kalmasını sağlar
    width: 40, // Tıklama alanını genişletir
    height: 40, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrowRight: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 20,
    padding: 8,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    marginTop: 15,
    paddingHorizontal: 10,
  },
  thumbnailWrapper: {
    marginHorizontal: 5,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 10,
    opacity: 0.5,
  },
  selectedThumbnail: {
    opacity: 1,
  },
  backButton: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
    marginBottom: 20, // En altta 20px boşluk
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
});
