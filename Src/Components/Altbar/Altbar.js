import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, Easing, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const Altbar = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFocused) {
      Animated.timing(rotation, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused]);

  // Animasyonu başlatan fonksiyon ve sayfa yönlendirme
  const toggleRotation = () => {
    Animated.timing(rotation, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('DiscoverPage');
      rotation.setValue(0); // Animasyonu sıfırla
    });
  };

  // Rotation değeri (180 derece döndürme)
  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      {/* Alt Menü */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={[styles.tab, styles.leftTab]} onPress={() => navigation.navigate('HomePage')}>
          <FontAwesome name="home" size={24} color="#002D72" />
          <Text style={styles.label}>Ana Sayfa</Text>
        </TouchableOpacity>

        {/* Hızlı İşlemler Butonu */}
        <View style={styles.fastActionWrapper}>
          <TouchableOpacity style={styles.fastAction} onPress={toggleRotation}>
            <Animated.View style={[styles.fastActionCircle, { transform: [{ rotate: rotateInterpolate }] }]}>
              <Image source={require('../../Assets/analogo.png')} style={styles.fastActionImage} />
            </Animated.View>
          </TouchableOpacity>
          <Text style={styles.fastActionLabel}>Keşfet</Text>
        </View>

        <TouchableOpacity style={[styles.tab, styles.rightTab]} onPress={() => navigation.navigate('RandevuPage')}>
          <FontAwesome name="calendar" size={24} color="#002D72" />
          <Text style={styles.label}>Randevu Al</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  leftTab: {
    marginLeft: -60,
  },
  rightTab: {
    marginRight: -60,
  },
  label: {
    fontSize: 14,
    color: '#002D72',
    marginTop: 6,
  },
  fastActionWrapper: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -35 }],
    alignItems: 'center',
  },
  fastAction: {
    alignItems: 'center',
  },
  fastActionCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#65EAAB',
    position: 'absolute',
    top: -55,
    right: -75,
  },
  fastActionImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  fastActionLabel: {
    fontSize: 14,
    color: '#002D72',
    marginTop: 30,
    right: -35,
  },
});

export default Altbar;
