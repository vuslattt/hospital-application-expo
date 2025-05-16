import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import profileImage from "../../Assets/Doctor.png"

//icons
import StarFullFill from '../../Assets/svg/StarFullFill'
import { useNavigation } from '@react-navigation/native'

export default function DoctorCard() {

  const navigation = useNavigation()

  return (
    <View style={styles.shadowContainer}>  
      <View style={styles.container}>  

        <View style={styles.top}>

          <View style={styles.topLeft}>
            <Image source={profileImage} style={styles.image} />
          </View>

          <View style={styles.topRight}>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Ali Kemal Erdemoğlu</Text>
              <Text style={[styles.title, { fontWeight: 'bold' }]}>Nöroloji</Text>
            </View>

            <View style={styles.starsContainer}>
              <View style={styles.stars}>
                <StarFullFill />
                <StarFullFill />
                <StarFullFill />
                <StarFullFill />
                <StarFullFill />
              </View>
              <Text style={styles.commentText}>12 Yorum</Text>
            </View>

            <Text style={[styles.commentText, { fontSize: 13 }]}>Kadıköy / İzmir</Text>
          </View>

        </View>

        <View style={styles.bottom}>

          <View style={styles.bottomText}>
            <Text style={styles.bottomTitle}>En Erken Randevu</Text>
            <Text style={styles.bottomSubTitle}>10:00 AM  Yarın</Text>
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("DoctorDetailsPage")}>
            <Text style={styles.btnText}>İncele</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3.53 }, // Gölgelendirme yönü
    shadowOpacity: 0.17, // Gölgelendirme yoğunluğu
    shadowRadius: 7.27, // Gölgelendirme yayılma miktarı
    elevation: 6, // Android için gölge efekti
    borderRadius: 8, // Gölgelendirme daha düzgün görünmesi için
    marginBottom: 20, // Kartlar arasında mesafe bırakmak için
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  top: {
    flexDirection: "row",
    gap: 16
  },
  topLeft: {
    width: 92,
    height: 92,
    borderRadius: 6,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%",
    
  },

  topRight: {
    justifyContent: "space-between"
  },

  titleContainer: {
    gap: 4,

  },

  title: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',

  },
  starsContainer: {
    flexDirection: "row",
    gap: 10
  },
  stars: {
    flexDirection: "row"
  },
  commentText: {
    fontWeight: '500',
    fontSize: 11,
    color: 'gray',
    marginBottom: 15, // Kartlar arasında mesafe bırakmak için

  },

  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    
  },
  bottomText: {
    gap: 5
  },
  bottomTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#3AC569'
  },
  bottomSubTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: 'gray'
  },
  btn: {
    width: 72,
    backgroundColor: '#3AC569',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center'
  },
  btnText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  }
})
