import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import CarItems from './Components/CarItems';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
        <CarItems/>
    <StatusBar style = "auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign:'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

