import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Style } from './Style';

const CarItems = (props) => {
    return (
        <View style = {styles.carContainer}>
          <ImageBackground
          source={require('../../assets/Images/A-class.jpg')}
          style = {styles.image}/>
        <View style = {styles.titles}>
          <Text style = {styles.title}>A-Class</Text>
          <Text style = {styles.subTitles}>starting price at 4120000</Text>
        </View>
      </View>
    );
};

export default CarItems;