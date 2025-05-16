import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Dinle() {
  const navigation = useNavigation();
  
  const staticPodcastData = [
    {
      externalId: '1',
      name: 'Sağlıklı Yaşam Podcast',
      description: 'Uzman doktorlardan sağlıklı yaşam önerileri.',
      image: require('../../Assets/Kesfet/Group1.jpeg'),
    },
    {
      externalId: '2',
      name: 'Beslenme ve Diyet',
      description: 'Sağlıklı beslenme ve diyet hakkında bilgiler.',
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

  const handleSeeAllPress = () => {
    navigation.navigate('DiscoverPage', { tab: 'Podcasts' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Uzman Görüşlerini Dinle</Text>
        <TouchableOpacity onPress={handleSeeAllPress}>
          <Text style={styles.seeAllText}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={staticPodcastData}
        renderItem={renderPodcastItem}
        keyExtractor={(item) => item.externalId}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7685AA',
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1814E4',
  },
  listContainer: {
    paddingBottom: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 16,

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
