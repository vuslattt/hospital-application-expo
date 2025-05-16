import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import profileImage from '../../Assets/Doctor.png';

//icons
import StarFullFill from '../../Assets/svg/StarFullFill'
import LinkednSvgIcon from '../../Assets/svg/LinkednSvgIcon'
import FacebookIcon from "../../Assets/svg/FacebookIcon"
import TwitterIcon from "../../Assets/svg/TwitterIcon"
import { useNavigation } from '@react-navigation/native'

export default function DoctorDetailCard() {

    const navigation = useNavigation()

    return (
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

                    <View style={styles.socialContainer}>
                        <LinkednSvgIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                    </View>
                </View>

            </View>

            <View style={styles.bottom}>

                <View style={styles.bottomText}>
                    <Text style={styles.bottomTitle}>En Erken Randevu</Text>
                    <Text style={styles.bottomSubTitle}>31-05-2024 / 15:00-15:30</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("ChooseServicePage")}>
                    <Text style={styles.btnText}>Randevu Al</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 18,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 20,
    },
    top: {
        flexDirection: "row",
        gap: 16
    },
    topLeft: {
        width: 126,
        height: 126,
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
        gap: 5
    },

    title: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black'
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
        color: 'gray'
    },
    socialContainer: {
        flexDirection: "row",
        gap: 13
    },

    bottom: {
        gap: 10,
        marginTop: 20,
    },
    bottomText: {
        gap: 5,
    },
    bottomTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#3AC569',
    },
    bottomSubTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: 'gray'
    },
    btn: {
        width: "100%",
        backgroundColor: '#3AC569',
        paddingVertical: 14,
        borderRadius: 5,
        alignItems: 'center'
    },
    btnText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    }
})