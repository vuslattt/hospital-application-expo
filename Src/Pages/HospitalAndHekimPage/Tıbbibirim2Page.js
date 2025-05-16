import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Tıbbibirim2Page = ({ navigation }) => {
  const [generalInfoExpanded, setGeneralInfoExpanded] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Algoloji (Ağrı Polikliniği) Bulunan Hastanelerimiz</Text>
        
        <TouchableOpacity style={styles.hospitalItem} onPress={() => navigation.navigate('HospitalInfoPage', { hospitalName: 'Medicana Sivas' })}>
          <Image source={require('../../Assets/Medicana1.png')} style={styles.hospitalImage} />
          <Text style={styles.hospitalName}>Medicana Sivas</Text>
          <FontAwesome name="chevron-right" size={20} color="#00ADB5" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.hospitalItem} onPress={() => navigation.navigate('HospitalInfoPage', { hospitalName: 'Medicana International İzmir' })}>
          <Image source={require('../../Assets/Medicana2.png')} style={styles.hospitalImage} />
          <Text style={styles.hospitalName}>Medicana International İzmir</Text>
          <FontAwesome name="chevron-right" size={20} color="#00ADB5" />
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TouchableOpacity 
          style={styles.generalInfo} 
          onPress={() => setGeneralInfoExpanded(!generalInfoExpanded)}
        >
          <Text style={styles.generalInfoText}>Genel Bilgiler</Text>
          <FontAwesome name={generalInfoExpanded ? "chevron-up" : "chevron-down"} size={20} color="#00ADB5" />
        </TouchableOpacity>
        {generalInfoExpanded && (
          <View style={styles.generalInfoContent}>
            <Text style={styles.sectionTitle}>Check-up Nedir?</Text>
            <Text style={styles.infoText}>
              Hastaneler ve sağlık kuruluşları, kişilerin genel sağlık durumlarını kontrol etmek, hastalıkları erken teşhis etmek ve önlemek amacıyla check-up hizmeti sunmaktadır. 
              Check-up, özellikle belirti göstermeyen hastalıkların tespit edilmesini sağlar ve kişinin sağlık durumunu düzenli olarak takip etmesine yardımcı olur.
            </Text>
            <Text style={styles.sectionTitle}>Check-up'ın Faydaları</Text>
            <Text style={styles.infoText}>
              - Olası hastalıkların erken teşhis edilmesi
              {'\n'}- Sağlık risk faktörlerinin belirlenmesi
              {'\n'}- Yaşam kalitesinin artırılması
              {'\n'}- Hastalıkların ilerlemesini önleme
            </Text>
            <Text style={styles.sectionTitle}>Hangi Hastalıklar İçin Önemlidir?</Text>
            <Text style={styles.infoText}>
              Check-up, özellikle kalp hastalıkları, diyabet, yüksek tansiyon, karaciğer ve böbrek hastalıkları gibi ciddi sağlık sorunlarını erken teşhis etmede büyük rol oynar. 
              Ayrıca kanser taramaları da check-up kapsamında değerlendirilmektedir.
            </Text>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>Geri</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5FCF7',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hospitalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  hospitalImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  hospitalName: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  generalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  generalInfoText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  generalInfoContent: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoText: {
    fontSize: 14,
    marginTop: 5,
    lineHeight: 22,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
    paddingBottom: 20,
  },
  backButton: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  backText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0047AB',
  },
});

export default Tıbbibirim2Page;