import React, { FC } from 'react'
import { StyleSheet,View,Text, ScrollView  } from 'react-native'
import { Meal } from '../../types'
import MealItens from '../MealItems/MealItens'


type TodayMealsProps = {
    foods: Meal[]
    onCOmpleteAddRemove?: ()=> void
}

const TodayMeals: FC <TodayMealsProps> = ({foods,onCOmpleteAddRemove}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Comidas</Text>
        <ScrollView style={styles.content}>
          {foods?.map((meal,index)=>(
             <MealItens {...meal} onCOmpleteAddRemove={onCOmpleteAddRemove} itemPossition={index}/>
        ))}  
        </ScrollView>
        
    </View>
  )
}
const styles = StyleSheet.create({
    container:{flex:1,marginTop:24},
    content:{marginVertical:16},
    title:{fontSize:16}
})
export default TodayMeals