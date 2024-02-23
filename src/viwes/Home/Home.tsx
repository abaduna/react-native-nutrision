import React from 'react'
import Header from '../../componets/Header/Headers'
import { View ,StyleSheet,Text} from 'react-native'
import { Button,Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutStackParams } from '../../types';
type Props = {}

const Home = (props: Props) => {
    const {navigate} = useNavigation<NativeStackNavigationProp<RoutStackParams,"Home">>()
    const handelerAddCaloriesPress =()=>{
        navigate("AddFood")
    }
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