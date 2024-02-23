import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { RoutStackParams } from "../../types"
import { Button,Icon } from "@rneui/themed"


const statickInfo = {
    name:"Arturo Baduna",
    uir: "https://avatars.githubusercontent.com/u/64230830?s=400&u=05bb370c3f8b9c8a5e2c4d88f405484e553d5b4a&v=4"
}
const Header =()=>{
    const {canGoBack,goBack} = useNavigation<NativeStackNavigationProp<RoutStackParams,"Home">>()
    const handlerGoBackPress =()=>{
        goBack()
    }
    return(

        <View style={style.container}>
            {canGoBack()? (
                <View style={style.arrowContainer}>
                    <Button icon={<Icon name="arrow-back" size={24}/>} type="clear" onPress={handlerGoBackPress}/>
                </View>
            )
            : undefined}
            <View style={style.lenghContainer}>
                <Text style={style.name}>Hello {statickInfo.name}</Text>
                <Text style={style.subtitle}>Welcomen back do your goal</Text>
            </View>
            <View style={style.rigthontainer}>
                <Image source={{uri:statickInfo.uir}} style={style.image}/>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flexDirection:"row",

    },
    lenghContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start"
    },
    rigthontainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-end"
    },
    name:{
        fontWeight:"bold",
        fontSize:14
    },
    subtitle:{
        fontSize:12,
        color:"#808080"
    },
    image:{
        width:40,
        height:40,
        borderRadius:32
    },
    arrowContainer:{

    }
})
export default Header