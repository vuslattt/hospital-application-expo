import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SunulanHizmetPage = () => {
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const animatedValues = useRef({}).current; // Animasyon değerlerini saklamak için

  const hizmetler = [
    {
      title: 'Otopark',
      description: 'Hastanemizde vale ve otopark hizmeti bulunmaktadır.',
    },
    {
      title: 'Kafeterya',
      description: 'Divan Group, hastanemizde hem kafe hem yemek de hizmeti vermektedir.',
    },
    {
      title: 'İbadethane',
      description:
        'Hastanemizde tüm din ve inanç mensuplarının kullanımına uygun şekilde hazırlanmış 1 adet Erkekler için 1 adet Kadınlar için ibadethane bulunmaktadır.',
    },
    {
      title: 'Diğer Hizmetler',
      description: `Hastalarımıza ayrıca talep doğrultusunda sunduğumuz özel hizmetler aşağıdaki gibidir:\n
      - Sıcak İçecek Seti\n
      - Minibar Dolumu Hizmeti\n
      - Kargo Hizmeti`,
    },
  ];

  // Her hizmet için animasyon değeri oluştur
  hizmetler.forEach((_, index) => {
    if (!animatedValues[index]) {
      animatedValues[index] = new Animated.Value(0);
    }
  });

  const toggleExpand = (index) => {
    const isExpanded = expandedIndexes.includes(index);

    if (isExpanded) {
      // Kapanma animasyonu
      Animated.timing(animatedValues[index], {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
      });
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
      // Açılma animasyonu
      Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* En Üstte Sabit Resim */}
      <Image source={require('../../Assets/Atakoy.png')} style={styles.headerImage} />

      {/* ORTA KISIM: Expandable Liste ile animasyonlu açılma & kapanma */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.listContainer}>
          {hizmetler.map((item, index) => {
            const heightAnimation = animatedValues[index].interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100], // Açıldığında yükseklik 100px olacak
            });

            return (
              <View key={index}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => toggleExpand(index)}
                >
                  <Text style={styles.itemText}>{item.title}</Text>
                  <FontAwesome
                    name={expandedIndexes.includes(index) ? 'chevron-up' : 'chevron-down'}
                    size={20}
                    color="#00ADB5"
                  />
                </TouchableOpacity>

                {/* Animasyonlu Açıklamalar */}
                <Animated.View style={[styles.expandedContent, { height: heightAnimation }]}>
                  <Text style={styles.expandedText}>{item.description}</Text>
                </Animated.View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Geri Butonu Sayfanın En Altına Sabitlendi */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingBottom: 100 
  },
  headerImage: {
    width: '95%',
    height: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
  },
  listContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: '90%',
    elevation: 3,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  expandedContent: {
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    
  },
  expandedText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 14,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    color: '#00296B',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SunulanHizmetPage;
