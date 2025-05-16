import { ScrollView, StyleSheet, Text, View, Animated, Easing, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';

const WelcomeCategories = () => {
    const scrollXTop = useRef(new Animated.Value(0)).current;
    const scrollXMid = useRef(new Animated.Value(0)).current;
    const scrollXBottom = useRef(new Animated.Value(0)).current;

    const { width } = Dimensions.get('window');

    useEffect(() => {
        const animateScroll = (animation, toValue) => {
            Animated.loop(
                Animated.timing(animation, {
                    toValue,
                    duration: 50000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
            ).start();
        };

        animateScroll(scrollXTop, -width);
        animateScroll(scrollXMid, width);
        animateScroll(scrollXBottom, -width);
    }, [scrollXTop, scrollXMid, scrollXBottom, width]);

    const translateXTop = scrollXTop.interpolate({
        inputRange: [0, width],
        outputRange: [-width, 0]
    });

    const translateXMid = scrollXMid.interpolate({
        inputRange: [0, width],
        outputRange: [-width, 0]
    });

    const translateXBottom = scrollXBottom.interpolate({
        inputRange: [width, width * 2],
        outputRange: [0, width]
    });

    const categoryCards = (categories) =>
        categories.map((category, index) => (
            <View key={index} style={styles.categoryCard}>
                <Text style={styles.text}>{category}</Text>
            </View>
        ));

    const categoriesTop = ["Doktor Randevu", "Doktor", "Evde Hasta Bakımı", "Evde Serum", "Doktor"];
    const categoriesMid = ["Ameliyatlar", "Laboratuar Testleri", "Evde Fizik Tedavi", "Doktor"];
    const categoriesBottom = ["İlaçlar", "Evde Serum", "Psikolog","İlaçlar", "Evde Serum", "Psikolog"];

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: translateXTop }] }}>
                        {categoryCards(categoriesTop)}
                        {categoryCards(categoriesTop)}
                    </Animated.View>
                </ScrollView>
            </View>
            <View style={styles.mid}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: translateXMid }] }}>
                        {categoryCards(categoriesMid)}
                        {categoryCards(categoriesMid)}
                    </Animated.View>
                </ScrollView>
            </View>
            <View style={styles.bottom}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Animated.View style={{ flexDirection: 'row', transform: [{ translateX: translateXBottom }] }}>
                        {categoryCards(categoriesBottom)}
                        {categoryCards(categoriesBottom)}
                    </Animated.View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 12,
        width: "100%",
    },
    categoryCard: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: "#ffffff",
        marginHorizontal: 12,
    },
    text: {
        fontSize: 16,
        color: "#666",
    }
});

export default WelcomeCategories;
