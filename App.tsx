import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider,SafeAreaView} from "react-native-safe-area-context"
import Routes from './src/routes/Routes';
export default function App(){
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
          <Routes/>
      </SafeAreaView>
    </SafeAreaProvider>
    // <View>
    //   <Text>Hola</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
