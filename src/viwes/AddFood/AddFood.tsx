import React from 'react'
import { View,Text, StyleSheet } from 'react-native'
import Header from '../../componets/Header/Headers'
import { Button, Icon, Input } from '@rneui/themed'

type Props = {}

const AddFood = () => {
  return (
    <View style={style.container}>
      <Header/>
      <View style={style.containerAddCalories}>
          <View style={style.leftContainer}>
            <Text style={style.subTitle}>Add Food</Text>
          </View>
          <View style={style.rigthContainer}>
           <View>
              <Button
               
               radius="lg"
               color="success"
               size='lg'
               icon={<Icon name='add-circle-outline'color="#fff"/>}
               />
            </View>
          </View>
          
      </View>
      <View style={style.inputContainer}>
          <View style={style.inputSubContainer}>
            <Input placeholder='apple,pie,soda...'/>
          </View>
          <View style={style.btnContainer}>
            <Button title="serch" color="#ade8af" radius="lg" titleStyle={style.serchBtnTitle}/>
          </View>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container:{flexDirection:"column",flex:0.25},
  leftContainer:{flex:1,paddingVertical:12,paddingHorizontal:10},
  rigthContainer:{flex:1,justifyContent:"center",alignItems:"flex-end",paddingHorizontal:10},
  btn:{fontSize:20},
  subTitle:{fontSize:20},
  containerAddCalories:{flex:1,flexDirection:"row"},
  btnAddCicle:{fontSize:20},
  inputContainer:{flex:1,flexDirection:"row",padding:12},
  btnContainer:{flex:0.2},
  inputSubContainer:{flex:1},
  serchBtnTitle:{
    color:"#000",
    fontSize:14
  }
})
export default AddFood