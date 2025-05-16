import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // FontAwesome ikonları
import Altbar from '../../Components/Altbar/Altbar'; // Altbar import edildi

export default function SozlesmePage() {
  const [isExpanded, setIsExpanded] = useState({ kvkk: false, iletisim: false });

  return (
    <View style={styles.container}>
      {/* Kişisel Verilerin Kullanımı Kartı */}
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => setIsExpanded({ ...isExpanded, kvkk: !isExpanded.kvkk })}
      >
        <Text style={styles.cardTitle}>Kişisel Verilerin Kullanımı</Text>
        <FontAwesome 
          name={isExpanded.kvkk ? "chevron-up" : "chevron-down"} 
          size={18} 
          color="#00AEEF" 
        />
      </TouchableOpacity>

      {isExpanded.kvkk && (
        <View style={styles.expandedContent}>
          <Text style={styles.contentText}>
            6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, kullanıcıların kişisel verileri yalnızca ilgili yasal düzenlemelere uygun olarak işlenir. 
            Verileriniz, hastane işletmeciliği ve sağlık hizmetleri kapsamında, randevu işlemleri, bilgilendirme mesajları ve hizmet iyileştirme amaçlarıyla kullanılmaktadır.
          </Text>
        </View>
      )}

      {/* İletişim Onayı Kartı */}
      <TouchableOpacity 
        style={styles.card} 
        onPress={() => setIsExpanded({ ...isExpanded, iletisim: !isExpanded.iletisim })}
      >
        <Text style={styles.cardTitle}>İletişim Onayı</Text>
        <FontAwesome 
          name={isExpanded.iletisim ? "chevron-up" : "chevron-down"} 
          size={18} 
          color="#00AEEF" 
        />
      </TouchableOpacity>

      {isExpanded.iletisim && (
        <View style={styles.expandedContent}>
          <Text style={styles.contentText}>
            Tarafıma kampanyalar, duyurular, promosyonlar, anketler ve özel teklifler hakkında bilgi verilmesini onaylıyorum.
            Sağlık hizmetleri ve hastane hizmetleri ile ilgili gelişmelerden haberdar olmak için iletişim bilgilerim doğrultusunda bilgilendirme yapılmasını kabul ediyorum.
          </Text>
        </View>
      )}

      {/* Sayfanın en altına sabitlenmiş Altbar */}
      <View style={styles.footer}>
        <Altbar />
      </View>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    paddingTop: 20, // Kartları yukarı sabitledik
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: width * 0.9,
    alignSelf: 'center',
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 5,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002E6E',
  },
  expandedContent: {
    backgroundColor: 'white',
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  contentText: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
