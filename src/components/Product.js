import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Checkbox} from 'native-base'

// Popup Menu
import {Menu, MenuOption, MenuOptions, MenuTrigger} from 'react-native-popup-menu';

import { Ionicons } from '@expo/vector-icons';

export default function Product(props) {
  return (
    <View style={styles.productBox}>
        <Checkbox
            isChecked={false}
            onChange={() => {
                console.log("Checkbox")
            }}
            value={"1"} accessibilityLabel="Checkbox" colorScheme="green" size="lg"
        />

        <View style={styles.textBox}>
            <Text style={styles.productText}>{props.name}</Text>

            <Menu>
                <MenuTrigger>
                    <Ionicons name="ellipsis-vertical" size={26} color="#002317" />
                </MenuTrigger> 
                <MenuOptions optionsContainerStyle={{width: 95}}>
                    
                    <MenuOption 
                    onSelect={() => console.log('USUN')} 
                    >
                    <Text>Usuń Listę</Text>
                    </MenuOption>  

                    <MenuOption 
                    onSelect={() => console.log('EDIT')} 
                    >
                    <Text>Edytuj Listę</Text>
                    </MenuOption> 

                </MenuOptions> 
            </Menu>
        </View>



    </View>
  )
}

const styles = StyleSheet.create({
    productBox: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      gap: 18,
      padding: 10,
      borderRadius: 10,
      borderColor: '#00A57A',
      borderWidth: 1.7,  
      marginVertical: 6,
    },
  
    textBox: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1
    },
  
    productText: {
      color: '#002317',
      fontSize: 26,
      flexShrink: 1,
    },
  
    amountText: {
      color: '#B1B1B0',
      fontSize: 24,
    },
  });