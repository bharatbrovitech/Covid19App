import { Text, View ,StyleSheet,FlatList, TextInput} from 'react-native'

import React,{useEffect,useState} from 'react'
import { getCovidSummaryApiCall } from '../../apis/Covid.service'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { sortArray } from '../../utils'
import { CountriesDetails } from '../../components/UI/CountriesDetails'
import { SortModal } from '../../components/UI/sortByModal'


const CountryListScreen = () => {
    const [countriesData, setCountriesData] = useState([])
    const [showSortModal, setShowSortModal] = useState(false)
    const [search, setSearch] = useState("")
    useEffect(() => {
        getCovidSummaryApiCall().then(result=>setCountriesData(result.Countries))
       
    }, [])

    const sortData=(sortBy)=>{
        const sortedCountries = sortArray(countriesData,sortBy);
        setCountriesData([...sortedCountries])
        setShowSortModal(false)
    }

    const renderCountriesReport=({item})=>{
        return (
            <View style={styles.listContainer}>
                <Text style={{marginBottom:5,fontWeight:"900"}}>{item?.Country}</Text>
                <CountriesDetails total={item?.TotalConfirmed} today={item?.NewConfirmed} title="Confirmed"/>
                <CountriesDetails total={item?.TotalDeaths} today={item?.NewDeaths} title="Deaths"/>
                <CountriesDetails total={item?.TotalRecovered} today={item?.NewRecovered} title="Recovered"/>
            </View>
        )
    }
    
    return <View style={styles.container}>

        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:20}}>
        <TextInput
            style={{borderWidth:2,flex:1,padding:10,borderColor:"#EFEFEF",backgroundColor:"#fff",borderRadius:5,marginRight:10}}
            onChangeText={setSearch}
            value={search}
            placeholder="Search"
        />
        <Pressable onPress={()=>setShowSortModal(true)} style={{alignSelf:"flex-end"}}><Text style={{fontWeight:'500',fontSize:17,color:"rgb(64,68,114)",marginBottom:10}}>Sort By</Text></Pressable>   
        </View>
        <FlatList 
        data={ countriesData?.filter(data=>data.Country.includes(search))}
        extraData={ countriesData}
        renderItem={renderCountriesReport}
        keyExtractor={(item)=>item.ID}
        showsVerticalScrollIndicator={false}
        />
        <SortModal show={showSortModal}>
            <View >
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <Text style={{fontWeight:'500',fontSize:20 , marginBottom:15}} >Sort By</Text>
                <Text style={{fontWeight:'500',fontSize:20 , marginBottom:15}} onPress={()=>setShowSortModal(false)}>Close</Text>
            </View>
            
            <Pressable onPress={()=>sortData("TotalDeaths")}><Text style={styles.sortType}>Total Deaths</Text></Pressable>
            <Pressable onPress={()=>sortData("NewDeaths")}><Text style={styles.sortType}>New Deaths</Text></Pressable>
            <Pressable onPress={()=>sortData("TotalConfirmed")}><Text style={styles.sortType}>Total Confirmed</Text></Pressable>
            <Pressable onPress={()=>sortData("NewConfirmed")}><Text style={styles.sortType}>New Confirmed</Text></Pressable>
            <Pressable onPress={()=>sortData("TotalRecovered")}><Text style={styles.sortType}>Total Recovered</Text></Pressable>
            <Pressable onPress={()=>sortData("NewRecovered")}><Text style={styles.sortType}>New Recovered</Text></Pressable>
            
       </View>
           </SortModal>
  </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(246,248,254)',
        padding:20,
    },
    listContainer:{
        backgroundColor:"#fff",
        marginBottom:15,
        padding:10,
        paddingVertical:20,
        borderRadius:10,
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    sortType:{
        fontWeight:'500',
        fontSize:17,
        color:"rgb(64,68,114)"
    }
})
export default CountryListScreen;