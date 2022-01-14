import { Text, View ,StyleSheet,FlatList, Button} from 'react-native'

import React,{useEffect,useState} from 'react'


export const CountriesDetails = ({total,today,title})=>{
    return <>
           <View style={{paddingVertical:2}}>
            <Text style={{fontWeight:"600"}}>{title}</Text>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
            <Text style={{color:'rgb(64,68,114)'}}>{`Total  : ${total}`}</Text>
            <Text style={{color:'rgb(64,68,114)'}}>{`New ${title} : ${today}`}</Text>
            </View>
            </View>
        </>
}