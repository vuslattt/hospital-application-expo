import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, Dimensions, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Verify() {
  const [checkedPersonal, setCheckedPersonal] = useState(false);
  const [checkedCommunication, setCheckedCommunication] = useState(false);
  const [expandedPersonal, setExpandedPersonal] = useState(false);
  const [expandedCommunication, setExpandedCommunication] = useState(false);
  const [personalHeight] = useState(new Animated.Value(0));
  const [communicationHeight] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  const toggleExpandPersonal = () => {
    setExpandedPersonal(!expandedPersonal);
    Animated.timing(personalHeight, {
      toValue: expandedPersonal ? 0 : 120, // Açılınca yükseklik artır
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const toggleExpandCommunication = () => {
    setExpandedCommunication(!expandedCommunication);
    Animated.timing(communicationHeight, {
      toValue: expandedCommunication ? 0 : 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Arka Plan Resmi */}
      <Image source={require('../../Assets/Sozlesme.png')} style={styles.backgroundImage} />

      {/* Onay Kutuları */}
      <View style={styles.checkContainer}>
        <TouchableOpacity 
          style={styles.checkItem} 
          onPress={toggleExpandPersonal}
        >
          <TouchableOpacity onPress={() => setCheckedPersonal(!checkedPersonal)}>
            <FontAwesome 
              name={checkedPersonal ? "check-square-o" : "square-o"} 
              size={22} 
              color="#00AEEF" 
            />
          </TouchableOpacity>
          <Text style={styles.checkText}>Kişisel Verilerin Kullanımı</Text>
          <FontAwesome 
            name={expandedPersonal ? "chevron-up" : "chevron-down"} 
            size={18} 
            color="#2D4159" 
          />
        </TouchableOpacity>

        <Animated.View style={[styles.expandedContainer, { height: personalHeight }]}>
          <Text style={styles.expandedText}>
            6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında bilgileriniz saklanacaktır.
          </Text>
        </Animated.View>

        <TouchableOpacity 
          style={styles.checkItem} 
          onPress={toggleExpandCommunication}
        >
          <TouchableOpacity onPress={() => setCheckedCommunication(!checkedCommunication)}>
            <FontAwesome 
              name={checkedCommunication ? "check-square-o" : "square-o"} 
              size={22} 
              color="#00AEEF" 
            />
          </TouchableOpacity>
          <Text style={styles.checkText}>İletişim Onayı</Text>
          <FontAwesome 
            name={expandedCommunication ? "chevron-up" : "chevron-down"} 
            size={18} 
            color="#2D4159" 
          />
        </TouchableOpacity>

        <Animated.View style={[styles.expandedContainer, { height: communicationHeight }]}>
          <Text style={styles.expandedText}>
            SMS, E-Posta ve telefon ile iletişim almayı kabul ediyorum.
          </Text>
        </Animated.View>
      </View>

      {/* Butonlar */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.confirmButton, (!checkedPersonal || !checkedCommunication) && styles.disabledButton]}
          disabled={!checkedPersonal || !checkedCommunication}
          onPress={() => navigation.navigate('Password')}
        >
          <Text style={styles.confirmButtonText}>Okudum Anladım Onaylıyorum</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    resizeMode: 'cover',
  },
  checkContainer: {
    position: 'absolute',
    top: '25%',
    width: '90%',
    
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingVertical: 20,

  },
  checkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2D4159',
    flex: 1,
    marginLeft: 10,
  },
  expandedContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  expandedText: {
    fontSize: 14,
    color: '#2D4159',
    paddingVertical: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '95%',
  },
  backButton: {
    width: '100%',
    paddingVertical: 18,
    backgroundColor: '#FFFFFF',
    borderColor: '#002E6E',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#002E6E',
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmButton: {
    width: '100%',
    paddingVertical: 18,
    backgroundColor: '#002E6E',
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disabledButton: {
    backgroundColor: '#AAB2C6',
  },
});
