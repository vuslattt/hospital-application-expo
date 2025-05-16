import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import EventDetails from '../../Components/Discover/EventDetails';
import EventDetails2 from '../../Components/Discover/EventDetails2';
import Schedule from '../../Components/Discover/Schedule';

export default function EventDetailsPage({ route }) {
  const { eventDetails } = route.params;
  const [schedule, setSchedule] = useState([]); // Boş bıraktık, artık backend çağrısı yok

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false} // Kaydırma çubuğunu gizlemek için
      >
        <EventDetails eventDetails={eventDetails} />
        <EventDetails2 ownerDetails={eventDetails} />
        <Schedule scheduleDetails={schedule} /> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2FE',
  },
  scrollContainer: {
    paddingBottom: 60, 
  },
});

