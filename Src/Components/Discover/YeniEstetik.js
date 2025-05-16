import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function YeniEstetik({ handleNext, handleBack, content, isLastCard }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const stopVideo = () => {
    if (isPlaying) setIsPlaying(false);
  };

  const handleStateChange = (state) => {
    if (state === 'playing') {
      setIsPlaying(true);
    } else if (state === 'paused' || state === 'ended') {
      setIsPlaying(false);
    }
  };

  const getYoutubeVideoId = (url) => {
    if (!url) return null;
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|watch)?\?v=|(?:\S+\/)?\S*\/)?)([a-zA-Z0-9_-]{11})/
    );
    return videoIdMatch ? videoIdMatch[1] : null;
  };

  return (
    <View style={styles.container}>
      {content.videoUrl && getYoutubeVideoId(content.videoUrl) ? (
        <YoutubePlayer
          height={250}
          play={isPlaying}
          videoId={getYoutubeVideoId(content.videoUrl)}
          onChangeState={handleStateChange}
        />
      ) : (
        <Image source={content.imageUrl} style={styles.image} />
      )}

      <View style={styles.card}>
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.text}>{content.longDescription || 'Açıklama bulunamadı.'}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Kendine Güven</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonSpacing]}>
            <Text style={styles.buttonText}>Dijitalleş</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.navigationButtons}>
          {!isLastCard && (
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                stopVideo();
                handleNext && handleNext();
              }}
            >
              <Text style={styles.navigationButtonText}>→</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              stopVideo();
              handleBack && handleBack();
            }}
          >
            <Text style={styles.navigationButtonText}>←</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EFFF',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#060047',
  },
  text: {
    fontSize: 14,
    color: '#363842',
    marginBottom: 32,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#FEF6E3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonSpacing: {
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FCB91D',
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  nextButton: {
    backgroundColor: '#0066CC',
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#0066CC',
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationButtonText: {
    fontSize: 24,
    color: '#FFF',
  },
});
