import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import React from 'react'

// Navigation elements
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { EmptyScreen } from '../screens';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const emptyScreenName = 'EmptyScreen';

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
    },
}

export default function MyNavigation() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator>

            <Tab.Screen
                name={emptyScreenName}
                component={EmptyScreen}
                options={({route}) => ({
                    tabBarIcon: ({focused}) => {
                        return(
                            <TouchableHighlight
                                underlayColor={'#228E6E'}
                                style={styles.addButton}
                                onPress={() => {
                                    console.log('hello');
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
      backgroundColor: '#00A57A'
    }
  })