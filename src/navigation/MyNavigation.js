import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

// Navigation elements
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { MainScreen } from '../screens';

// Icons
import { Entypo } from '@expo/vector-icons';

import { InputModal } from '../components';

import { useStateContext } from '../contexts/ContextProvider';



const mainScreenName = 'MainScreen';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      background: '#fff',
      marginVertical: 'auto',
      height: 60,
    },
}

export default function MyNavigation() {
  const {setShowModal} = useStateContext();
  
  return (
    <>
      <NavigationContainer screenOptions={screenOptions}>
      <Tab.Navigator screenOptions={screenOptions}>

    <Tab.Screen
    name={mainScreenName}
    component={MainScreen}
    options={({route}) => ({
        tabBarIcon: ({focused}) => {
        
        return(
            <TouchableHighlight
            underlayColor={'#228E6E'}
            style={styles.addButton}
            onPress={() => {
                console.log('hello')
                setShowModal(true);
            }}
            >
            <Entypo name="plus" size={44} color="#fff" />
            </TouchableHighlight>
        )
        }
    })}
    />


</Tab.Navigator>
      </NavigationContainer>

      <InputModal />
    </>
  )
}

const styles = StyleSheet.create({
    tabBarView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    addButton: {
      borderRadius: Platform.OS == 'ios' ? 25 : 30,
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00A57A',
    }
  })