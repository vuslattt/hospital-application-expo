import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Etkinlikler() {
  const navigation = useNavigation();

  const staticEvents = [
    {
      externalId: '1',
      title: 'Sağlık Zirvesi',
      eventGoal: 'Sağlık sektöründeki yenilikler üzerine konuşmalar.',
      date: '15 Mart 2025',
      startHour: '10:00',
      endHour: '15:00',
      eventAttendeeCount: 200,
      image: require('../../Assets/Kesfet/yazı2.png'),
    },
    {
      externalId: '2',
      title: 'Diyet ve Beslenme Semineri',
      eventGoal: 'Sağlıklı beslenme üzerine diyetisyenlerden ipuçları.',
      date: '22 Mart 2025',
      startHour: '14:00',
      endHour: '18:00',
      eventAttendeeCount: 150,
      image: require('../../Assets/Kesfet/yazı2.png'),
    },
  ];

  const handlePress = (eventDetails) => {
    navigation.navigate('EventDetailsPage', { eventDetails });
  };

  const renderEvent = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.eventGoal}</Text>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
          <FontAwesome5 name="calendar-alt" size={16} color="#32475D" style={styles.icon} />
          <Text style={styles.info}>{item.date} - {item.startHour} - {item.endHour}</Text>
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
      <FlatList
        data={staticEvents}
        renderItem={renderEvent}
        keyExtractor={(item) => item.externalId.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    width: '94%',
    marginBottom: 16,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 16,
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