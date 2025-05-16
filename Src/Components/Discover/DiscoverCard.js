import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');

export default function DiscoverCard() {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current; // Kaydırma animasyonu
  const [activeIndex, setActiveIndex] = useState(0);

  const featuredData = [
    {
      id: '1',
      title: 'Podcast App Design',
      subtitle: 'The future of health tourism',
      guests: 'Larry + Tom',
      image: require('../../Assets/Kesfet/bro1.png'),
    },
    {
      id: '2',
      title: 'Sağlık Teknolojileri',
      subtitle: 'Yeni nesil sağlık uygulamaları',
      guests: 'Dr. Alex + Lisa',
      image: require('../../Assets/Kesfet/bro1.png'),
    },
    {
      id: '3',
      title: 'Uzaktan Danışmanlık',
      subtitle: 'Dijital çağın sağlık çözümleri',
      guests: 'Emily + Mark',
      image: require('../../Assets/Kesfet/bro1.png'),
    },
  ];

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {featuredData.map((item, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9], // Ortadaki kart büyür, diğerleri küçülür
            extrapolate: 'clamp',
          });

          return (
            <Animated.View key={item.id} style={[styles.featuredCard, { transform: [{ scale }] }]}>
              <View style={styles.featuredContent}>
                <Text style={styles.featuredTitle}>{item.title}</Text>
                <Text style={styles.featuredSubtitle}>{item.subtitle}</Text>
                <View style={styles.guestsContainer}>
                  <Image 
                    source={require('../../Assets/Kesfet/Group1.jpeg')} 
                    style={[styles.guestImage, { zIndex: 2 }]} 
                  />
                  <Image 
                    source={require('../../Assets/Kesfet/Group2.jpeg')} 
                    style={[styles.guestImage, { marginLeft: -10, zIndex: 1 }]} 
                  />
                </View>
                <Text style={styles.featuredGuests}>Guests: {item.guests}</Text>
              </View>
              <Image 
                source={item.image} 
                style={styles.featuredImage} 
              />
            </Animated.View>
          );
        })}
      </ScrollView>

      {/* Sayfa Göstergeleri */}
      <View style={styles.paginationContainer}>
        {featuredData.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 12, 8], // Aktif noktayı büyüt
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[styles.dot, { width: dotWidth }]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  featuredCard: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    borderRadius: 18,
    padding: 20,
    marginBottom: 26,
    alignItems: 'center',
    width: width - 40, // Dinamik genişlik
    marginHorizontal: 20,
  },
  featuredContent: {
    flex: 1,
  },
  featuredTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  featuredSubtitle: {
    fontSize: 14,
    color: '#DDE5FB',
    marginVertical: 4,
  },
  guestsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  guestImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  featuredGuests: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  featuredImage: {
    width: 200,
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 18,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -15,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#B0BEC5',
    marginHorizontal: 5,
  },
});

