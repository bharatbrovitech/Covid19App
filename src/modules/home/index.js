import React, { useEffect, useState ,useCallback} from 'react'
import { StyleSheet, View, Text ,FlatList, Pressable } from 'react-native'
import { getTopCountriesAndGlobalCasesApiCall } from '../../apis/Covid.service'
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {}
})
const HomeScreen = ({navigation}) => {
    const [topCountries, setTopCountries] = useState([])
    const [globalData, setGlobalData] = useState(undefined)

    useEffect(async()=> {
       const globalData =  await getTopCountriesAndGlobalCasesApiCall();
       setTopCountries(globalData.topCountriesCases);
       setGlobalData(globalData.globalCases)
    }, [])

    const renderTopCovidCountries=({item})=>{
        return (
            <Pressable onPress={()=>navigation.navigate("CountryListScreen")}>
                <Text>{item?.Country}</Text>
            </Pressable>
        )
    }

    return (
        <View style={styles.container}>
          <FlatList 
            data={topCountries}
            extraData={topCountries}
            renderItem={renderTopCovidCountries}
            keyExtractor={(item)=>item.ID}
          />
        </View>
    )
}


export default HomeScreen;