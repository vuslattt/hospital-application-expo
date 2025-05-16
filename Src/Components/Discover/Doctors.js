import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Doctors = () => {
  const staticSimsars = [
    {
      externalId: '1',
      name: 'Dr. Ayşe Yılmaz',
      image: require('../../Assets/Kesfet/Adam1.png'),
    },
    {
      externalId: '2',
      name: 'Dr. Mehmet Kaya',
      image: require('../../Assets/Kesfet/kadın.png'),
    },
    {
      externalId: '3',
      name: 'Dr. Elif Demir',
      image: require('../../Assets/Doctor.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sağlık Elçileri Anlatıyor</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {staticSimsars.map((simsar) => (
          <View style={styles.profileContainer} key={simsar.externalId}>
            <Image source={simsar.image} style={styles.profileImage} />
            <Text style={styles.profileName}>{simsar.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#7685AA',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  profileImage: {
    width: 105,
    height: 105,
    borderRadius: 60,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#AAB7DA',
  },
  profileName: {
    fontSize: 14,
    color: '#32475D',
    textAlign: 'center',
  },
});

export default Doctors;
