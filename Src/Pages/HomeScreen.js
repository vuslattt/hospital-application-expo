import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Arka Plan Resmi */}
            <Image source={require('../Assets/homee.png')} style={styles.backgroundImage} />

            {/* Butonları yerleştiren View */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginPage')}>
                    <Text style={styles.loginButtonText}>Giriş Yap</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('SignupPage')}>
                    <Text style={styles.createAccountButtonText}>Hesabınızı Oluşturunuz</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('HomePage')}>
                    <Text style={styles.skipButtonText}>Hesap Oluşturmadan Devam Et</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    backgroundImage: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 25,
    },
    loginButton: {
        width: '94%',
        backgroundColor: '#00A8E1',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    createAccountButton: {
        width: '94%',
        backgroundColor: '#002E6E',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 10,
    },
    createAccountButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    skipButton: {
        width: '94%',
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#002E6E',
    },
    skipButtonText: {
        color: '#002E6E',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

