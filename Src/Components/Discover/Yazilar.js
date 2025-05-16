import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Yazilar() {
  const navigation = useNavigation();
  
  const staticContents = [
    {
      externalId: '1',
      title: 'Sağlık Turizmi Nedir?',
      shortDescription: 'Sağlık turizmi hakkında merak ettiklerinizi öğrenin.',
      image: require('../../Assets/Kesfet/Yazı1.png'),
    },
    {
      externalId: '2',
      title: 'Estetik Operasyonlar',
      shortDescription: 'En popüler estetik operasyonlar ve süreçleri.',
      image: require('../../Assets/Kesfet/Yazı1.png'),
    },
  ];

  const handleNavigate = (externalId) => {
    navigation.navigate('YeniEstetikPage', { externalId });
  };

  return (
    <ScrollView>
      {staticContents.map((content, index) => (
        <TouchableOpacity
          key={index}
          style={styles.cardContainer}
          onPress={() => handleNavigate(content.externalId)}
        >
          <Image source={content.image} style={styles.image} />
          <View style={styles.contentContainer}>
            <Text style={styles.titleText}>{content.title}</Text>
            <Text style={styles.descriptionText}>{content.shortDescription}</Text>
          </View>
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => handleNavigate(content.externalId)}
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignSelf: 'center',
    width: '90%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#828282',
    marginBottom: 16,
  },
  readMoreButton: {
    alignSelf: 'flex-end',
    marginRight: 16,
    marginBottom: 10,
  },
  readMoreText: {
    fontSize: 14,
    color: '#4285F4',
    fontWeight: 'bold',
  },
});
