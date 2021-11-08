import { Text, View ,StyleSheet,FlatList, Button ,Modal} from 'react-native'

import React,{useEffect,useState} from 'react'


export const SortModal = (props)=>{
    return <>
           <Modal
        animationType="slide"
        transparent={true}
        visible={props.show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        //   setModalVisible(!modalVisible);
        }}
      >
          <View style={{flex:1,justifyContent:"center",paddingHorizontal:10,backgroundColor:"rgba(0,0,0,0.2)"}}>
              <View style={{backgroundColor:"#fff",paddingHorizontal:10,paddingVertical:20,borderRadius:10}}>
          {props.children}
          </View>
          </View>
      </Modal>
        </>
}