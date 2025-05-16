import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function AppIcon({ style }) {
    return (
        <View style={[styles.appIcon, style]}>
            <Text>APP ICON</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    appIcon: {
        width: 65,
        height: 65,
        borderRadius: 10,
        backgroundColor: "lightgrey",
        alignItems: 'center',
        justifyContent: 'center',
    },
});
