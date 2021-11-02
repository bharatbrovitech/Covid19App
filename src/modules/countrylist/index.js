import { Text, View } from 'react-native'

import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
const CountryListScreen = () => {
    return <View style={styles.container}><Text>
        {'CountryList'}
    </Text></View>
}
export default CountryListScreen;