import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import DiscoverCard from '../Components/Discover/DiscoverCard';
import Doctors from '../Components/Discover/Doctors';
import Special from '../Components/Discover/Special';
import New from '../Components/Discover/New';
import Dinle from '../Components/Discover/Dinle'; 
import Podcast from '../Components/Discover/Podcasts';
import Yazilar from '../Components/Discover/Yazilar';
import Etkinlikler from '../Components/Discover/Etkinlikler';

export default function DiscoverPage({ route }) {
  const initialTab = route?.params?.tab || 'Sana Ozel';
  const [activeTab, setActiveTab] = useState(initialTab); 

  const renderContent = () => {
    switch (activeTab) {
      case 'Podcasts':
        return <Podcast />;
      case 'Yazılar':
        return <Yazilar />;
      case 'Etkinlikler':
        return <Etkinlikler />;
      case 'Sana Ozel':
        return (
          <>
            <DiscoverCard />
            <Doctors />
            <New limit={1} />
            <Special />
            <Dinle /> 
          </>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    if (route.params?.tab) {
      setActiveTab(route.params.tab); // Parametreden gelen sekmeye geç
    }
  }, [route.params?.tab]);

  return (
    <View style={styles.container}>
      <View style={styles.headerSpacer} />

      <View style={styles.tabContainer}>
        {['Sana Ozel', 'Podcasts', 'Yazılar', 'Etkinlikler'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabButtonText, activeTab === tab && styles.activeTabButtonText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={[{ key: 'content' }]}
        renderItem={() => <View style={styles.innerContainer}>{renderContent()}</View>}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.scrollContainer}
        ListFooterComponent={<View style={styles.bottomSpacer} />} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerSpacer: {
    height: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'white',

  },
  tabButton: {
    paddingVertical: 10,
  },
  tabButtonText: {
    fontSize: 16,
    color: '#060047',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#4285F4',
  },
  activeTabButtonText: {
    color: '#060047',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  altBarContainer: {
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  bottomSpacer: {
    height: 80, 
  },
});
