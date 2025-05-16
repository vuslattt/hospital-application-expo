import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function ProfiliDuzenlePage() {
  const [form, setForm] = useState({
    uyruk: '',
    tckn: '',
    isim: 'Hasan Vuslat',
    soyisim: 'Coşkun',
    dogumTarihi: '',
    cinsiyet: ''
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={[styles.formCard, styles.shadow]}>
          <Text style={styles.label}>Uyruk</Text>
          <TextInput style={styles.input} placeholder="Uyruk" placeholderTextColor="#909090" />
          
          <Text style={styles.label}>TCKN</Text>
          <TextInput style={styles.input} placeholder="TCKN" placeholderTextColor="#909090" />
          
          <Text style={styles.label}>İsim</Text>
          <TextInput style={styles.input} value={form.isim} placeholder="İsim" placeholderTextColor="#909090" />
          
          <Text style={styles.label}>Soyisim</Text>
          <TextInput style={styles.input} value={form.soyisim} placeholder="Soyisim" placeholderTextColor="#909090" />
          
          <Text style={styles.label}>Doğum Tarihi</Text>
          <TextInput style={styles.input} placeholder="Doğum Tarihi" placeholderTextColor="#909090" />
          
          <Text style={styles.label}>Cinsiyet</Text>
          <TextInput style={styles.input} placeholder="Cinsiyet" placeholderTextColor="#909090" />
        </View>

        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelText}>İptal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FF',
    padding: 20,
  },
  formCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 80,

  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#2D4159',
    
  },
  input: {
    borderWidth: 1.2,
    borderColor: '#0ABAB5',
    borderRadius: 3,
    padding: 10,
    fontSize: 14,
    marginTop: 15,
    color: '#2D4159',
    fontStyle: 'italic',
  },
  cancelButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    
  },
  cancelText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#072690',
  },
  saveButton: {
    backgroundColor: '#0ABAB5',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  saveText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
});
