import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfileSvg2 from '../../Assets/svg/ProfileSvg2'; 

const { width } = Dimensions.get('window');

export default function EventDetails2({ ownerDetails }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('LiveEventPages', { eventDetails: ownerDetails, hasOwnerName: !!ownerDetails.ownerName })}
    >
      <Text style={styles.hostTitle}>Event Host</Text>
      <View style={styles.hostInfoContainer}>
        {ownerDetails.ownerFileImageUrl ? (
          <Image 
            source={{ uri: ownerDetails.ownerFileImageUrl }} 
            style={styles.hostImage}
          />
        ) : (
          <ProfileSvg2 width={50} height={50} style={styles.hostImage} />
        )}
        <View style={styles.hostDetails}>
          {ownerDetails.ownerName ? (
            <>
              <Text style={styles.hostName}>{ownerDetails.ownerName} {ownerDetails.ownerSurname}</Text>
              <Text style={styles.hostRole}>{ownerDetails.ownerTitle}</Text>
              <Text style={styles.hostLanguages}>{ownerDetails.ownerSpokenLanguages || 'Languages not specified'}</Text>
            </>
          ) : (
            <>
              <Text style={styles.hostName}>{ownerDetails.eventSubTitleFirst}</Text>
              <Text style={styles.hostRole}>{ownerDetails.title}</Text>
            </>
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Mesaj Gönder</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    width: width - 32,
  },
  hostTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  hostInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hostImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  hostDetails: {
    flex: 1,
  },
  hostName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  hostRole: {
    fontSize: 14,
    color: '#677294',
  },
  hostLanguages: {
    fontSize: 14,
    color: '#677294',
  },
  messageButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
    borderWidth: 0.4,
  },
  messageButtonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
