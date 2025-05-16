import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Podcast() {
  const navigation = useNavigation();
  
  const staticPodcastData = [
    {
      externalId: '1',
      name: 'Sağlık ve Yaşam Podcast',
      description: 'Sağlıklı yaşam ve beslenme üzerine uzman görüşleri.',
      image: require('../../Assets/Kesfet/Group1.jpeg'),
    },
    {
      externalId: '2',
      name: 'Spor ve Fitness',
      description: 'Antrenman ipuçları ve sporcu beslenmesi üzerine bilgiler.',
      image: require('../../Assets/Kesfet/Group2.jpeg'),
    },
  ];

  const renderPodcastItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <View style={styles.subtitleSpacing} />
        <Text style={styles.subtitle}>{item.description}</Text>
      </View>
      <TouchableOpacity style={styles.playButton}>
        <FontAwesome5 name="play" size={24} color="#1814E4" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={staticPodcastData}
      renderItem={renderPodcastItem}
      keyExtractor={(item) => item.externalId}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 12,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 0,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#363842',
  },
  subtitle: {
    fontSize: 14,
    color: '#060047',
  },
  subtitleSpacing: {
    height: 6,
  },
  playButton: {
    padding: 10,
    borderRadius: 24,
  },
});
