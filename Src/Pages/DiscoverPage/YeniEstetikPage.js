import React, { useRef, useState } from 'react';
import { FlatList, StyleSheet, Dimensions, View } from 'react-native';
import YeniEstetik from '../../Components/Discover/YeniEstetik';

const { width } = Dimensions.get('window');

export default function YeniEstetikPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    {
      title: "Estetikte Yeni Trendler",
      description: "2025 yılına damga vuracak yeni estetik trendlerini keşfedin!",
      imageUrl: require('../../Assets/Kesfet/yazı2.png'),
      longDescription: "Yeni estetik teknikleri hakkında bilgi edinin.",
      videoUrl: "", // Eğer video yoksa boş string ver.
    },
    {
      title: "Cilt Bakımı İçin Öneriler",
      description: "Cildiniz için en iyi bakım rutinlerini öğrenin.",
      imageUrl: require('../../Assets/Kesfet/yazı2.png'),
      longDescription: "Sağlıklı bir cilt için günlük bakım önerileri.",
      videoUrl: "",
    },
    {
      title: "Plastik Cerrahi ve Doğallık",
      description: "Plastik cerrahi sonrası doğal bir görünüm elde etmenin yolları.",
      imageUrl: require('../../Assets/Kesfet/yazı2.png'),
      longDescription: "Doğal bir sonuç için en iyi uygulamalar.",
      videoUrl: "",
    },
  ];

  return (
    <View style={styles.pageContainer}>
      <FlatList
        horizontal
        pagingEnabled
        data={contents}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.cardContainer}>
            <YeniEstetik 
              content={item} 
              handleNext={() => setCurrentIndex(index + 1)} 
              handleBack={() => setCurrentIndex(index - 1)}
              isLastCard={index === contents.length - 1}
            />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#E8EFFF',
  },
  cardContainer: {
    width,
  },
});
