import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

export default function Schedule({ scheduleDetails }) {
  return (
    <View style={styles.container}>
      {/* Başlık */}
      <Text style={styles.title}>Etkinlik Akışı</Text>

      {scheduleDetails.map((item, index) => (
        <View key={index} style={styles.scheduleItem}>
          <View style={styles.timeBadge}>
            <Text style={styles.timeText}>
              {item.startHour} - {item.endHour}
            </Text>
          </View>
          <Text style={styles.scheduleDescription}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    width: width - 32, 
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#23242C',
  },
  scheduleItem: {
    marginBottom: 16,
  },
  timeBadge: {
    backgroundColor: '#FDF0D5',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFB700',
  },
  scheduleDescription: {
    fontSize: 14,
    color: '#41434F',
  },
  linkText: {
    color: '#4285F4', // Bağlantı rengini mavi yaptık
    textDecorationLine: 'underline',
  },
});
