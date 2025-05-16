import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const MedicalTeknoloPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('../../Assets/Atakoy.png')} style={styles.headerImage} />
        
        <View style={styles.contentContainer}>
          {/* Robotik Cerrahi */}
          <View style={styles.card}>
            <Image source={require('../../Assets/Robotik.png')} style={styles.image} />
            <Text style={styles.title}>Robotik Cerrahi</Text>
            <Text style={styles.text}>
              da Vinci Robotik Cihazı, cerrahi prosedürleri gerçekleştirmek için kullanılan bir robotik cerrahi sistemidir. 
              Bu sistem, cerraha hassas kontrol ve büyütme imkanı sunarak cerrahi müdahaleleri gerçekleştirmesine yardımcı olur. 
              Genellikle onkolojik, jinekolojik, ürolojik ve kardiyovasküler cerrahi gibi çeşitli alanlarda kullanılan da Vinci 
              Robotik Cihazı, cerrahi prosedürlerin hassas, etkin ve minimal invaziv bir şekilde gerçekleştirilmesine katkıda bulunan 
              bir teknoloji olarak öne çıkmaktadır.
            </Text>
          </View>

          {/* Göz Lazer Cihazları */}
          <View style={styles.card}>
            <Image source={require('../../Assets/GozLazer.png')} style={styles.image} />
            <Text style={styles.title}>Göz Lazer Cihazları</Text>
            <Text style={styles.text}>
              Miyop, hipermetrop ve astigmatın tedavisinde kullanılan ve refraktif cerrahide bütün dünyada uygulanan en yaygın 
              yöntem lazerdir. Bu yöntemler içinde yer alan LASIK ve SMILE tekniği az ağrı ve kısa sürenin hedeflendiği yöntemdir, 
              uygulanan anestezi şekli göze damlatılan damla anestezisidir ve ameliyatta herhangi bir iğne veya dikiş işlemi bulunmamaktadır.
            </Text>
          </View>

          {/* Femto Katarakt Lazer */}
          <View style={styles.card}>
            <Image source={require('../../Assets/femo.png')} style={styles.image} />
            <Text style={styles.title}>Femto Katarakt Lazer</Text>
            <Text style={styles.text}>
              Görme yeteneğini azaltan katarakt hastalığının tedavisinde kullanılan bir yöntemdir, bu hastalık genellikle göz 
              merceğinin matlaşması sonucu ortaya çıkar. Korneal kesinin bıçak kullanılmadan lazer ışınıyla oluşturulması, çevre 
              dokulara daha az zarar verilmesini ve aynı zamanda astigmatik kusurlarının düzeltilmesini hedefler.
            </Text>
          </View>

          {/* HoLEP */}
          <View style={styles.card}>
            <Image source={require('../../Assets/Holep.png')} style={styles.image} />
            <Text style={styles.title}>HoLEP</Text>
            <Text style={styles.text}>
              HoLEP, idrar kanalından girilerek holmium lazer kullanılan bir prostat ameliyatı yöntemidir. Kapalı bir şekilde 
              gerçekleştirilmesine rağmen, açık prostat ameliyatına benzer bir metotla prostatın tamamı alınır. Genellikle ameliyat 
              sırasında spinal anestezi yeterli olabilmektedir. HoLEP yöntemi, prostat hastalıklarının tedavisinde kullanılarak 
              iyi huylu prostat büyümesinin de tedavi edilmesini sağlar.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Geri Butonu */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>Geri</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContent: {
    paddingBottom: 20, // İçeriğin aşağıda sıkışmaması için boşluk
  },
 headerImage: {
    width: '95%', // Tam genişlikte olacak
    height: 180,  // Sabit yükseklik
    resizeMode: 'contain', // Resmi tam sığdır
    alignSelf: 'center',
  },

  contentContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center', // Kart içeriğini ortala
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    marginBottom: 12,
    alignSelf: 'center', // Resmi ortala
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 20, // Alttan 20 boşluk bırakıldı
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  backButtonText: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MedicalTeknoloPage;
