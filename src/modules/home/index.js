import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {}
})
const HomeScreen = () => {
    const [topCountries, setTopCountries] = useState([])
    const [globalData, setGlobalData] = useState(undefined)
    return (
        <View style={styles.container}>
            <h1>Home</h1>
        </View>
    )
}


export default HomeScreen;