import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

export default function HealthSection() {
  const [waterIntake, setWaterIntake] = useState(0.25);
  const waterGoal = 2; // Hedef 2 Litre
  const medicineProgress = 0.0; // İlaç takibi ilerleme değeri
  const [isExpanded, setIsExpanded] = useState(false);
  const animatedHeight = useState(new Animated.Value(0))[0];

  const toggleExpand = () => {
    const finalHeight = isExpanded ? 0 : 430; // Açılınca tam görünmesi için artırıldı
    setIsExpanded(!isExpanded);
    Animated.timing(animatedHeight, {
      toValue: finalHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const increaseWaterIntake = () => {
    if (waterIntake < waterGoal) {
      setWaterIntake(prev => Math.min(prev + 0.25, waterGoal));
    }
  };

  return (
    <View style={styles.container}>
      {/* Sağlığım Başlığı */}
      <TouchableOpacity style={styles.healthHeader} onPress={toggleExpand}>
        <Text style={styles.healthTitle}>Sağlığım</Text>
        <FontAwesome5 name={isExpanded ? "chevron-up" : "chevron-down"} size={18} color="#003366" />
      </TouchableOpacity>

      {/* Açılıp kapanan içerik */}
      <Animated.View style={[styles.expandableContent, { height: animatedHeight }]}>
        {isExpanded && (
          <View style={styles.healthContent}>
            {/* Su Hatırlatıcı */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Su Hatırlatıcı</Text>
                <Progress.Circle
                  size={50}
                  progress={waterIntake / waterGoal}
                  thickness={6}
                  borderWidth={1}
                  color={'#05C7DA'}
                  unfilledColor={'#E1F5F6'}
                  borderColor={'#E1F5F6'}
                  showsText={true}
                  formatText={() => `${waterIntake.toFixed(2)}/2\nLitre`}
                />
              </View>
              <Text style={styles.cardText}>Gün içerisinde içmiş olduğunuz su miktarını giriniz. (1 Bardak = 250ml)</Text>

              {/* Su Ekleme Alanı */}
              <View style={styles.waterContainer}>
                <View style={styles.waterButton}>
                  <FontAwesome5 name="glass-whiskey" size={24} color="#007AFF" />
                  <Text style={styles.waterText}>250 ml</Text>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={increaseWaterIntake}>
                  <FontAwesome5 name="plus" size={20} color="white" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>Su Hatırlatıcı'ya Git</Text>
              </TouchableOpacity>
            </View>

            {/* İlaç Takibi */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>İlaç Takibi</Text>
                <Progress.Circle
                  size={50}
                  progress={medicineProgress}
                  thickness={6}
                  borderWidth={1}
                  color={'#05C7DA'}
                  unfilledColor={'#E1F5F6'}
                  borderColor={'#E1F5F6'}
                  showsText={true}
                  formatText={() => `${(medicineProgress * 7).toFixed(0)}/7\nGün`}
                />
              </View>
              <Text style={styles.cardText}>İlaçlarınızın kullanım zamanlarını buradan takip edebilir ve sağlığınızı kolayca yönetebilirsiniz.</Text>

              <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>İlaç Takibine Git</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 20, // Yanlardan boşluk
    marginBottom: 15, // Diğer bileşenlerle hizalama
  },
  healthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: '#000', // Gölgelendirme
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Android için gölge
    marginTop: -10, // Yukarı çekme
    borderBottomLeftRadius: 8,
    borderBottomRightRadius:8,
  },
  healthTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#65EAAB',
  },
  expandableContent: {
    overflow: 'hidden',
  },
  healthContent: {
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    padding: 15,
    marginTop: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  waterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E1F5F6',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  waterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  waterText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 10,
  },
  navButton: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
