import React, { FC } from 'react'
import { View,Text, StyleSheet, Alert } from 'react-native'
import { Meal } from '../../types'
import { Button, Icon } from '@rneui/themed'
import useFoodStorage from '../../Hooks/useFoodStorage'



const MealItens: FC <Meal> = ({calories,portion,name}) => {
    const {onSaveTodayFood} = useFoodStorage()
    const handelerSaveMeal =async()=>{
        try {
          await onSaveTodayFood({calories,portion,name})  
          Alert.alert("Comida agragada al dia")
        } catch (error) {
            console.error(error);
            
        }
        
    }
  return (
    <View style={style.container}>
        <View style={style.lefthcontainer}>
            <Text style={style.name}>{name}</Text>
            <Text style={style.portion}>{portion}</Text>
        </View>
        <View style={style.rigthcontainer}>
            <Button icon={<Icon name="add-circle-outline" />} type='clear' onPress={()=>handelerSaveMeal()} style={style.iconBtn}/>
            <Text style={style.calories}>{calories} Cal</Text>
        </View>
    </View>
  )
}
const style = StyleSheet.create({
    container:{flexDirection:"row",backgroundColor:"#4ecb71",padding:5,marginVertical:25,borderRadius:12,marginHorizontal:12},
    lefthcontainer:{flex:1,alignItems:'flex-start',justifyContent:'center'},
    name:{fontSize:18,fontWeight:"600"},
    portion:{fontSize:13,color:"#808080",fontWeight:"500"},
    rigthcontainer:{flex:1,alignItems:'flex-end',justifyContent:'center'},
    calories:{fontSize:18,},
    iconBtn:{marginBottom:-8}
})
export default MealItens