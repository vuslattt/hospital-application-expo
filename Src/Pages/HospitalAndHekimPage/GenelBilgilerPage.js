import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function GenelBilgilerPage({ navigation }) {
  return (
    <View style={styles.container}>
      

      {/* Alt İçerik - Hakkında Bölümü */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Image source={require('../../Assets/Atakoy.png')} style={styles.headerImage} />

        <View style={styles.contentContainer}>
          <Text style={styles.sectionTitle}>MEDICANA ATAKÖY Hakkında</Text>

          <Text style={styles.sectionSubtitle}>
            HEDEFLERİMİZ VE HAYALLERİMİZ BÜYÜYOR, MEDICANA ATAKÖY'DE YÜKSELİYOR!
          </Text>

          <Text style={styles.paragraph}>
            Bir hayata daha sağlıkla dokunmak ve herkese iyilikle dolu anılar bırakmak için
            hayallerimiz de hedeflerimiz de büyüyor. 30 yılı aşan deneyimi ve köklü sağlık
            geleneğiyle, Medicana Ataköy’de yükseliyor.
          </Text>

          <Text style={styles.paragraph}>
            Uzman kadrosu, hasta memnuniyeti, sağlık sektöründe fark yaratan anlayışıyla
            30 yılı aşkın süredir hizmet veren Medicana Sağlık Grubu, sadece Türkiye’nin
            değil tüm dünyanın sağlıkta referans merkezi olma yolunu Medicana Ataköy
            Hastanesi’yle taçlandırıyor. Medicana Ataköy Hastanesi, yeşil ve mavinin
            birleştiği noktada tıbbın tüm dallarında hem İstanbul’a hem de yurt dışı
            hastalarına dünya standartlarında sağlık hizmetini modern ve üst düzey
            hastane mimarisiyle sunuyor.
          </Text>

          <Text style={styles.sectionSubtitle}>Yanınızdayız, Desteğiz...</Text>

          <Text style={styles.paragraph}>
            Sağlık hizmetlerinde kaliteyi artırmak ve hasta memnuniyetini en üst düzeye
            çıkarmak için Medicana Ataköy olarak hastalarımızın her an yanında olmayı
            sürdürüyoruz.
          </Text>

          <Text style={styles.sectionSubtitle}>Hasta Odaklı Hizmet Anlayışı...</Text>

          <Text style={styles.paragraph}>
            İstanbul’un ve Avrupa’nın en kapsamlı sağlık tesislerinden biri olarak
            planlanan Medicana Ataköy Hastanesi, sağlık sektörüne yepyeni bir hizmet
            anlayışı kazandırmayı hedeflemektedir. Teknolojik altyapısı, geniş branş
            yelpazesi ve uzman hekim kadrosuyla, hasta memnuniyetini öncelik olarak
            benimsemektedir.
          </Text>

          <Text style={styles.paragraph}>
            Medicana Ataköy Hastanesi, modern hastane mimarisi, geniş otoparkı, hasta ve
            hasta yakınlarının konforunu ön planda tutan yapısıyla, bölgenin referans
            hastanelerinden biri olmayı amaçlamaktadır.
          </Text>

          <Text style={styles.paragraph}>
            Güçlü akademik kadrosu, deneyimli sağlık çalışanları ve multidisipliner
            çalışma yaklaşımıyla, tanı ve tedavi süreçlerinde en güncel yöntemleri
            uygulamaktadır. Sağlığınızı önemsiyoruz ve bu yolda sizlere en iyi hizmeti
            sunmak için çalışıyoruz.
          </Text>
        </View>

        {/* Geri Butonu (En Alta Taşındı) */}
        
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Geri</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC',
    marginTop: 20,

  },
  header: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    
  },
  headerImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  headerTextContainer: {
    padding: 15,
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#042387',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
    lineHeight: 20,
  },
  backButton: {
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#042387',
  },
});
