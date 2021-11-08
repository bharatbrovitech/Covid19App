import React, { useEffect, useState ,useCallback} from 'react'
import { StyleSheet, View, Text ,FlatList, Pressable } from 'react-native'
import { getTopCountriesAndGlobalCasesApiCall } from '../../apis/Covid.service';
import { CountriesDetails } from '../../components/UI/CountriesDetails';


const HomeScreen = ({navigation}) => {
    const [topCountries, setTopCountries] = useState([])
    const [globalData, setGlobalData] = useState(undefined)

    useEffect(()=> {
       getTopCountriesAndGlobalCasesApiCall().then(response=>{
        setTopCountries(response.topCountriesCases);
        setGlobalData(response.globalCases)
       });
    }, [])

    const renderTopCovidCountries=({item,index})=>{
        return (
            <Pressable onPress={()=>navigation.navigate("CountryListScreen")} style={[styles.listContainer,{marginLeft:index%2 == 0 ? 0:10}]}>
                <Text style={{marginBottom:5,fontWeight:"600",color:'rgb(145,189,248)'}}>{`${item?.Country} `}</Text>
                <Text style={{marginBottom:5,fontWeight:"500"}}>{`Total cases: ${item?.TotalConfirmed}`}</Text>
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
            numColumns={2}
          />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'rgb(246,248,254)',
        padding:20,
    },
    listContainer:{
        backgroundColor:"#fff",
        marginBottom:10,
        paddingHorizontal:10,
        paddingVertical:30,
        borderRadius:15,
            shadowColor: "rgba(0,0,0,0.5)",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            flex:1,
            maxWidth:'45%'
    }
})

export default HomeScreen;