import React, { FC } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator';

export type TodayCaloriesProps = {
    total?:number |string
    consumed:number | string
    remaining?:number | string
}

const TodayCalories: FC<TodayCaloriesProps> = ({total=2000,consumed,remaining}) => {
  return (
    <View style={style.container}>
        <Text style={style.today}>Today</Text>
        <View style={style.rigthitem}>
           <Text style={style.rigthitemLegend}>Total</Text>
           <Text style={style.rigthitemValue}> {total}</Text>
        </View>
        <View style={style.rigthitem}>
           <Text style={style.rigthitemLegend}>Cosumend</Text>
           <Text style={style.rigthitemValue}> {consumed}</Text>
        </View>
        <View style={style.rigthitem}>
           <Text style={style.rigthitemLegend}>Remaining</Text>
           <Text style={style.rigthitemValue}> {remaining}</Text>
        </View>
    </View>
  )
}
const style = StyleSheet.create({
    container:{flexDirection:"row"},
    rigthitem:{alignItems:"flex-end",justifyContent: "center",flexDirection:"row",flex:0.5,marginBottom:10},
    rigthitemLegend:{flex:1,textAlign:"right"},
    rigthitemValue:{flex:1,textAlign:"left"},
    today:{fontSize:20,fontWeight:"900",marginBottom:14}
})
export default TodayCalories