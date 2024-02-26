import React, { useEffect, useState } from 'react'
import { View,Text, StyleSheet, Alert, ScrollView } from 'react-native'
import Header from '../../componets/Header/Headers'
import { Button, Icon, Input } from '@rneui/themed'
import AddFoodModal from '../../componets/AddFoodModal/AddFoodModal'
import useFoodStorage from '../../Hooks/useFoodStorage'
import { Meal } from '../../types'
import MealItens from '../../componets/MealItems/MealItens'
import { useFocusEffect } from '@react-navigation/native'

type Props = {}

const AddFood = () => {
  const [visible,setVisible]=useState<boolean>(false)
  const [foods,setFoods]= useState<Meal[]>([])
  const [serch,setSerch] = useState<string>("")
  const {onGetFood} = useFoodStorage()

  const onClose =async(shouldUpdate?:boolean)=>{
    console.log(`onClose`);
    console.log(shouldUpdate);
    
    
    if (shouldUpdate) {
     Alert.alert("comida guardado exitosamente") 
     loadFoods()}
    
    setVisible(false)
  }
  const loadFoods = async ()=>{
try {
  const foodResponse = await onGetFood()
  setFoods(foodResponse);
  
} catch (error) {
  console.error(error);
  
}
useFocusEffect(()=>{
  loadFoods()
})
  }
  const handlerSerchPress =async()=>{
    try {
      const resolt  = await onGetFood()
      setFoods(resolt.fiter((item:Meal)=> item.name.toLocaleLowerCase().includes(serch.toLocaleLowerCase())))
      
      
    } catch (error) {
      setFoods([])
    }
  }
  return (
    <ScrollView style={style.container}>
      <Header/>
      <View style={style.containerAddCalories}>
          <View style={style.leftContainer}>
            <Text style={style.subTitle}>Add Food</Text>
          </View>
          <View style={style.rigthContainer}>
           <View>
              <Button
               onPress={()=>setVisible(true)}
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
            <Input placeholder='apple,pie,soda...' value={serch} onChangeText={(text:string)=>setSerch(text)}/>
          </View>
          <View style={style.btnContainer}>
            <Button title="serch" onPress={handlerSerchPress} color="#ade8af" radius="lg" titleStyle={style.serchBtnTitle}/>
          </View>
      </View>
      <AddFoodModal visible={visible} onClose={onClose}/>
      <Button title="actualizar" onPress={loadFoods}/>
      <ScrollView style={style.content}>
      {foods?.map((food,index)=>(
        <MealItens key={index} {...food} isAbleToAdd></MealItens>
      ))}
      </ScrollView>
    </ScrollView>
  )
}
const style = StyleSheet.create({
  container:{flexDirection:"column",flex:0.5},
  leftContainer:{flex:1,paddingVertical:12,paddingHorizontal:10},
  rigthContainer:{flex:1,justifyContent:"center",alignItems:"flex-end",paddingHorizontal:10},
  btn:{fontSize:20},
  subTitle:{fontSize:20},
  containerAddCalories:{flex:1,flexDirection:"row"},
  btnAddCicle:{fontSize:20},
  inputContainer:{flex:1,flexDirection:"row",padding:12},
  btnContainer:{flex:0.2},
  inputSubContainer:{flex:1},
  serchBtnTitle:{color:"#fff", fontSize:14 },
  content:{}
})
export default AddFood