import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack"
import { RoutStackParams } from "../types";
import Home from "../viwes/Home/Home";
import AddFood from "../viwes/AddFood/AddFood";
const Stack = createNativeStackNavigator()

const Routes =()=>(
    
    <NavigationContainer>

        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="AddFood" component={AddFood} options={{ headerShown: false }} />
        </Stack.Navigator>
  </NavigationContainer>

)
export default Routes