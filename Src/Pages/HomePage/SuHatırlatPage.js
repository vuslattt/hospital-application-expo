import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function SuHatırlatPage() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      {/* Sayfa Başlığı */}

      {/* Hatırlatıcı Kartı */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Su Hatırlatıcı</Text>
          <Switch
            trackColor={{ false: '#ccc', true: '#0057B8' }}
            thumbColor={isEnabled ? '#fff' : '#666'}
            ios_backgroundColor="#ccc"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {/* Hatırlatıcı İçeriği */}
        <View style={styles.cardContent}>
          <Text style={styles.cardSubtitle}>Su Hatırlatıcı Kapalı</Text>
          <Text style={styles.cardText}>
            Sağlıklı su tüketimi alışkanlığınız için su hatırlatıcıyı açmanızı tavsiye ederiz
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#002E6E',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  cardContent: {
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0057B8',
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  cardText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});
