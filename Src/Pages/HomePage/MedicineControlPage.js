import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity, Image, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Altbar from '../../Components/Altbar/Altbar';
const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const days = Array.from({ length: 30 }, (_, i) => ({ day: (i + 1).toString(), name: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'][i % 7] }));

export default function MedicineControlPage() {
  const [isTrackingEnabled, setIsTrackingEnabled] = useState(false);
  const [selectedDay, setSelectedDay] = useState(4);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(2); // Mart

  const nextMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % 12);
  };

  const prevMonth = () => {
    setCurrentMonthIndex((prevIndex) => (prevIndex - 1 + 12) % 12);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>İlaç Takibi</Text>
          <Switch
            value={isTrackingEnabled}
            onValueChange={() => setIsTrackingEnabled(!isTrackingEnabled)}
            trackColor={{ false: '#ccc', true: '#042387' }}
            thumbColor={isTrackingEnabled ? '#042387' : '#666'}
          />
        </View>
        <View style={styles.separator} />
        {isTrackingEnabled ? (
          <View style={styles.trackingContainer}>
            <View style={styles.monthSelector}>
              <TouchableOpacity onPress={prevMonth} style={styles.arrowButton}>
                <Image source={require('../../Assets/left-arrow.png')} style={styles.arrowIcon} />
              </TouchableOpacity>
              <View style={styles.monthContainer}>
                <Text style={styles.month}>{months[currentMonthIndex]}</Text>
              </View>
              <TouchableOpacity onPress={nextMonth} style={styles.arrowButton}>
                <Image source={require('../../Assets/right-arrow.png')} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.spacing} />
            <FlatList
              horizontal
              data={days}
              keyExtractor={(item) => item.day}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.dayCard,
                    selectedDay === parseInt(item.day) ? styles.selectedDay : styles.unselectedDay,
                    styles.shadow, // Gölgelendirme eklendi
                  ]}
                  onPress={() => setSelectedDay(parseInt(item.day))}
                >
                  <Text style={[styles.dayNumber, selectedDay === parseInt(item.day) && styles.selectedDayText]}>
                    {item.day}
                  </Text>
                  <Text style={[styles.dayText, selectedDay === parseInt(item.day) && styles.selectedDayText]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        ) : (
          <View style={styles.contentBox}>
            <Text style={styles.statusText}>İlaç Takibi Kapalı</Text>
            <Text style={styles.infoText}>
              Sağlıklı ilaç tüketimi alışkanlığınız için ilaç takibini açmanızı tavsiye ederiz.
            </Text>
          </View>
        )}
      </View>

      {/* Yeni İlaç Ekle Button */}
      <TouchableOpacity style={[styles.button, styles.shadow]}>
        <Image source={require('../../Assets/ilactakibi.png')} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Yeni İlaç Ekle</Text>
      </TouchableOpacity>
      {/* Kullandığım İlaçlar Button */}
      <TouchableOpacity style={[styles.button, styles.shadow]}>
        <Image source={require('../../Assets/saglıkdosyam.png')} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Kullandığım İlaçlar</Text>
      </TouchableOpacity>
      
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F6F8FC',
    padding: 20,
    flex:1
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '95%',
    maxWidth: 500,
    elevation: 3,
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
      android: { elevation: 6 },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#042387',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  trackingContainer: {
    alignItems: 'center',
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthContainer: {
    paddingHorizontal: 20,
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#042387',
  },
  arrowButton: {
    padding: 10,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
  spacing: {
    height: 10,
  },
  dayCard: {
    width: 60,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
  selectedDay: {
    backgroundColor: '#009FE3',
    borderColor: '#009FE3',
  },
  unselectedDay: {
    backgroundColor: 'white',
    borderColor: '#ccc',
  },
  selectedDayText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 14,
  },
  contentBox: {
    alignItems: 'center',
    marginTop: 10,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
  infoText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    width: '95%',
    maxWidth: 500,
    marginTop: 10,
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
  shadow: {
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
      android: { elevation: 6 },
    }),
  },
});

