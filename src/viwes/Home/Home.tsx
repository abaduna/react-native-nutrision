import React, { useState } from 'react'
import Header from '../../componets/Header/Headers'
import { View ,StyleSheet,Text} from 'react-native'
import { Button,Icon } from '@rneui/themed';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Meal, RoutStackParams } from '../../types';
import useFoodStorage from '../../Hooks/useFoodStorage';
import TodayCalories,{TodayCaloriesProps} from '../../componets/TodayCalories/TodayCalories';
import TodayMeals from '../../componets/TodayMeals/TodayMeals';
type Props = {}
const totalCaloriesPerDay = 2000
const Home = (props: Props) => {
    const [todayFood,setTodayFood]= useState<Meal[]>([])
    const [todayStatistics,setTodayStatistics]= useState<TodayCaloriesProps>()
    const {navigate} = useNavigation<NativeStackNavigationProp<RoutStackParams,"Home">>()
    const handelerAddCaloriesPress =()=>{
        navigate("AddFood")
    }
    const {onGetTodayFoods} = useFoodStorage()
    const calculateTodayStatistics = (meals:Meal[])=>{
      try {
        const caloriesCosumed = meals.reduce((acum,curr)=> acum + Number(curr.calories),0)
        const remainigCalories = totalCaloriesPerDay - caloriesCosumed
        const percentage  = (caloriesCosumed/totalCaloriesPerDay)*100
        setTodayStatistics({consumed: caloriesCosumed,remaining:remainigCalories})
      } catch (error) {
        console.log(error);
        
      }
    }
    const loadTodayFood = async()=>{
        try {
            const todayfoodsResponse = (await onGetTodayFoods()) as Meal[]
            calculateTodayStatistics(todayfoodsResponse)
            setTodayFood(todayfoodsResponse)

        } catch (error) {
            setTodayFood([])
            console.error(error);
             
        }
    }
    useFocusEffect(()=>{
        loadTodayFood().catch(null)
    })

   
  return (
    <View style={style.container}>
        <Header/>
        
        <View style={style.calories}>
            <View style={style.righthcontainer}>
                <Text style={style.titleCalories}>Calories</Text>
                
            </View>
            <View style={style.lenghContainer}>
                <Button 
                style={style.btn} 
                radius='lg' 
                color="success" 
                icon={<Icon name='add-circle-outline' 
                color="#fff"
                onPress={handelerAddCaloriesPress}
                >

                </Icon>}/>
            </View>
        </View>
        <View>
            <TodayCalories {...todayStatistics}/>
        </View>
        <View>
            <TodayMeals foods={todayFood} onCOmpleteAddRemove={()=> loadTodayFood()}/>
        </View>
    
    </View>

  )
}
const style = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"#fff",
        flex:1
    },
    calories:{alignItems: "center",flex:0.07,flexDirection:"row"},
    righthcontainer:{flex:1,justifyContent:"center",alignItems:"flex-start"},
    lenghContainer:{flex:1,justifyContent:"center",alignItems:"flex-end"},
    titleCalories:{fontSize:25},
    btn:{}
})

export default Home