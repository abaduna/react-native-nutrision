import AsyncStorage from "@react-native-async-storage/async-storage"
import { Meal } from "../types"
import { isToday } from "date-fns"
const MY_FOOD_Key = "@MyFood:Key"
const MY_TODAY_FOOD_KEY = "@MyTodoyFood:key"

const useFoodStorage = () => {
    const saveInfoTostorage =async(key:string,meal:Meal)=>{
        try {
            const currentSavedFood = await AsyncStorage.getItem(MY_FOOD_Key)

            if (currentSavedFood !== null) {
                const currentSavedFoodParse = JSON.parse(currentSavedFood)
                currentSavedFoodParse.push([meal])
                await AsyncStorage.setItem(key, JSON.stringify(currentSavedFoodParse))

                return Promise.resolve()
            }

            await AsyncStorage.setItem(key, JSON.stringify([meal]))

        } catch (error) {
            return Promise.resolve(error)
        }
    }
    const onSaveFood = async ({ calories, name, portion }: Meal) => {
        console.log(`handlerSaveFood`);
        try {
         const resolt = await saveInfoTostorage(MY_FOOD_Key,{ calories, name, portion })
         return Promise.resolve(resolt)   
        } catch (error) {
            return Promise.resolve(error) 
        }
       
    }

    const handlerGetFood = async() => {
       try {
        const foods = await AsyncStorage.getItem(MY_FOOD_Key)
        if (foods !== null) {
            const parseFood = JSON.parse(foods)
            return Promise.resolve(parseFood)
        }
       } catch (error) {
        return Promise.resolve(error)
       }
    }
    const handlerSavTodayFoods = async ({ calories, name, portion,date }: Meal)=>{
        try {
          const resolt = await  saveInfoTostorage(MY_TODAY_FOOD_KEY,{ calories, name, portion,date: new Date().toISOString() })  
          return Promise.resolve(resolt)  
        } catch (error) {
            return Promise.resolve(error) 
        }
    }
    const handelerGetTodayFods = async ()=>{
        try {
            const foods = await AsyncStorage.getItem(MY_TODAY_FOOD_KEY) 
            if (foods !== null) {
                const parseFood = JSON.parse(foods) as Meal[]
                return Promise.resolve(parseFood.filter(meal => isToday(new Date(meal.date))  ))
            }
           } catch (error) {
            return Promise.resolve(error)
           }
    }
    const handlerRemoveTodayFood = async (index:number)=> {
        try {
            const todayFoods = await handelerGetTodayFods()
            const filerItems = todayFoods.filter((item,itemIndex)=> {
                itemIndex !== index
            })
            await AsyncStorage.setItem(MY_TODAY_FOOD_KEY,JSON.stringify(filerItems) )
            return Promise.reject()
        } catch (error) {
            return Promise.reject(error)
        }
    }
    return {
        onSaveFood,
        onGetFood: handlerGetFood,
        onSaveTodayFood:handlerSavTodayFoods,
        onGetTodayFoods:handelerGetTodayFods,
        onDeletdTodayFood :handlerRemoveTodayFood
    }
}

export default useFoodStorage
