import { Button, Icon, Input } from '@rneui/themed'
import React, { FC,useEffect,useState } from 'react'
import { Modal,View,StyleSheet,Text } from 'react-native'
import useFoodStorage from '../../Hooks/useFoodStorage'
import { Meal } from '../../types'

type AddFoodModalProps ={
    onClose: (shouldUpdate?:boolean)=>void
    visible:boolean
    

}
interface FoodStorage {
    onSaveFood: ({ calories, name, portion }: Meal) => Promise<any>;
    onGetFood: () => Promise<any>;
  }
const AddFoodModal:FC<AddFoodModalProps> = ({onClose,visible}) => {
    const [calories,setCalories]= useState<string>("")
    const [name,setName]= useState<string>("")
    const [portion,setPortion]= useState<string>("")
    const { onSaveFood } = useFoodStorage() as unknown as FoodStorage;
    useEffect(()=>{
        setCalories("")
        setName("")
        setPortion("")
    },[visible])
    const handlerAddPress =async()=>{
        console.log(`handlerAddPress`);
        
        try {
         await   onSaveFood({
            calories,
            name,
            portion,
         })

         onClose(true)

        } catch (error) {
            console.log(`error:${error} `);
             }
        
    }
  return (
    <Modal visible={visible} onRequestClose={()=>onClose()} transparent animationType='slide'>
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.closeContainer}>
                    <Button icon={<Icon name='close' size={25}/>} onPress={()=>onClose()} type='clear'/>      
                </View>
                <View style={style.formItem}>
                    <View style={style.inputContainer}>
                        <Input value={calories} onChangeText={(text:string)=>setCalories(text)}/>
                    </View>
                    <View style={style.LabelContainer}>
                        <Text style={style.legend}>CAL</Text>
                    </View>
                </View>
                <View style={style.formItem}>
                    <View style={style.inputContainer}>
                        <Input value={name} onChangeText={(text:string)=>setName(text)}/>
                    </View>
                    <View style={style.LabelContainer}>
                        <Text style={style.legend}>nombre</Text>
                    </View>
                </View>
                <View style={style.formItem}>
                    <View style={style.inputContainer}>
                        <Input value={portion} onChangeText={(text:string)=>setPortion(text)}/>
                    </View>
                    <View style={style.LabelContainer}>
                        <Text style={style.legend}>porcion</Text>
                    </View>
                </View>
                <View style={style.btnContainer}>
                    <Button 
                    title="add" 
                    icon={<Icon name='add' color="#FFF"/>} 
                    radius="md" 
                    color="#ade8af"
                    onPress={handlerAddPress}
                    disabled={calories.trim() ==="" ||
                     name.trim() ==="" ||
                     portion.trim() ==="" }/>
                </View>
            </View>
        </View>
    </Modal>
  )
}
const style = StyleSheet.create({
    container:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.5)"},
    content:{width:"75%",backgroundColor:"#FFF",padding:18,borderRadius:24},
    closeContainer:{alignItems:'flex-end'},
    formItem:{flexDirection:"row",alignItems:"center"},
    inputContainer:{flex:2},
    LabelContainer:{flex:1},
    legend:{fontWeight:'500'},
    btnContainer:{alignItems:"flex-end"}
})
export default AddFoodModal