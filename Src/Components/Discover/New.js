import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

const { width: windowWidth } = Dimensions.get('window');

export default function New() {
  const navigation = useNavigation();
  
  const staticEvents = [
    {
      externalId: '1',
      title: 'Sağlıklı Yaşam Konferansı',
      eventGoal: 'Sağlık turizmi üzerine konuşmalar.',
      date: '12 Mart 2025',
      eventAttendeeCount: 150,
      image: require('../../Assets/Kesfet/yazı2.png'),
    },
    {
      externalId: '2',
      title: 'Beslenme ve Diyet Eğitimi',
      eventGoal: 'Uzman diyetisyenlerden sağlıklı beslenme ipuçları.',
      date: '20 Mart 2025',
      eventAttendeeCount: 200,
      image: require('../../Assets/Kesfet/yazı2.png'),
    },
  ];

  const handleCardPress = (eventDetails) => {
    navigation.navigate('EventDetailsPage', { eventDetails });
  };

  const handleSeeAllPress = () => {
    navigation.navigate('DiscoverPage', { tab: 'Etkinlikler' });
  };

  const renderEvent = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.eventGoal}</Text>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
        <FontAwesome5 name="calendar-alt" size={16} color="#32475D" style={styles.icon} />
        <Text style={styles.info}>{item.date}</Text>
        </View>
        <View style={styles.infoItem}>
        <FontAwesome5 name="users" size={16} color="#4285F4" style={styles.icon} />
        <Text style={styles.info2}>{item.eventAttendeeCount} Sağlık Elçisi katılıyor.</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Etkinlikler</Text>
        <TouchableOpacity onPress={handleSeeAllPress}>
          <Text style={styles.seeAllText}>Tümünü Gör</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={staticEvents}
        horizontal
        keyExtractor={(item) => item.externalId}
        renderItem={renderEvent}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="start"
        decelerationRate="fast"
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
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
    paddingVertical: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
   shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
    marginHorizontal: 8,
    width: windowWidth - 60,
    borderWidth: 0.2,
    borderColor: 'black'
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  info: {
    fontSize: 14,
    color: '#32475D',
  },
  info2: {
    fontSize: 14,
    color: '#4285F4',
  },
});
