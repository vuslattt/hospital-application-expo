import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Special() {
  const navigation = useNavigation();
  
  const staticContents = [
    {
      externalId: '1',
      title: 'Estetik Cerrahide Yeni Trendler',
      shortDescription: 'Son yıllarda estetik cerrahi alanında büyük değişimler yaşanıyor.',
      image: require('../../Assets/Kesfet/Group1.jpeg'),
    },
    {
      externalId: '2',
      title: 'Sağlıklı Beslenme İpuçları',
      shortDescription: 'Beslenmenize dikkat ederek sağlıklı yaşamın kapılarını aralayın.',
      image: require('../../Assets/Kesfet/Group2.jpeg'),
    },
  ];

  const handleCardPress = (content) => {
    console.log('Logo ID:', content.externalId);
    navigation.navigate('YeniEstetikPage', { externalId: content.externalId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Öğren</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DiscoverPage', { tab: 'Yazılar' })}>
          <Text style={styles.seeAllText}>Tümü</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {staticContents.map((content, index) => (
          <TouchableOpacity
            key={content.externalId}
            onPress={() => handleCardPress(content)}
            style={[styles.card, index !== 0 && { marginLeft: 16 }]} // İlk kart hariç diğerlerine boşluk ekliyoruz
          >
            <View style={styles.textContainer}>
              <Text style={styles.title}>{content.title}</Text>
              <Text style={styles.subtitle} numberOfLines={2} ellipsizeMode="tail">
                {content.shortDescription}
              </Text>
            </View>
            <Image source={content.image} style={styles.icon} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: 'white',
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
  scrollContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row', // Yatay kaydırma için
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    width: 370,
    height: 120,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 16,
  },
  icon: {
    width: 50,
    height: 50,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
});

