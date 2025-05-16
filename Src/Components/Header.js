import React, { useState, useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, Modal, Animated } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import Menu from './Menu';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(Dimensions.get('window').width)).current; // Başlangıç noktası

  const openMenu = () => {
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').width * 0.25, // Menüyü içeri kaydır
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: Dimensions.get('window').width, // Menüyü dışarı kaydır
      duration: 300,
      useNativeDriver: false,
    }).start(() => setMenuVisible(false));
  };

  return (
    <>
      <View style={styles.headerContainer}>
        {/* Bildirim Butonu */}
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="bell" size={30} color="#65EAAB" />
        </TouchableOpacity>

        {/* Logo */}
        <Image source={require('../Assets/analogo.png')} style={styles.logo} />

        {/* Menü Butonu */}
        <TouchableOpacity onPress={openMenu} style={styles.iconButton}>
          <Entypo name="menu" size={40} color="#65EAAB" />
        </TouchableOpacity>
      </View>

      {/* Menü Modal */}
      <Modal visible={menuVisible} transparent={true} animationType="none">
        <View style={styles.overlay}>
          {/* Blur Efekti - Tıklanınca Kapanacak */}
          <TouchableOpacity style={styles.blurBackground} onPress={closeMenu} />

          {/* Sağdan Sola Kayarak Açılan Menü */}
          <Animated.View style={[styles.animatedMenu, { right: slideAnim }]}>
            <Menu onClose={closeMenu} />
          </Animated.View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 20,
  },
  logo: {
    height: 40,
    width: Dimensions.get('window').width * 0.4,
    resizeMode: 'contain',
    top: 15,
    Color: '#65EAAB',

  },
  iconButton: {
    padding: 10,
    top: 15,

  },

  // Arka plan blur efekti için
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  blurBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Hafif siyah blur efekti
  },

  // Menü için animasyonlu görünüm
  animatedMenu: {
    position: 'absolute',
    height: '100%',
  },
});
