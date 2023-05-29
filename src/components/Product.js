import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Checkbox} from 'native-base'

// Popup Menu
import {Menu, MenuOption, MenuOptions, MenuTrigger} from 'react-native-popup-menu';

import { Ionicons } from '@expo/vector-icons';

import { useStateContext } from '../contexts/ContextProvider';

import EditModal from './EditModal';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Product(props) {
  const {deleteProduct, showEditModal, setShowEditModal, setCurrentName, setCurrentId, currentName, currentId, updateChecked, loadProducts} = useStateContext();

  const [checked, setChecked] = useState(props.isChecked == 0 ? false : true);

  useEffect(() => {
    loadProducts();
  }, [checked]) 

  const handleChecked = () => {
    console.log("Checkbox")
    if (!checked) {
      updateChecked(1, props.id);
    } else {
      updateChecked(0, props.id);
    }
    setChecked(!checked);
  }

  return (
    <View style={styles.productBox}>
        <Checkbox
            isChecked={checked}
            onChange={() => {
                handleChecked();
            }}
            value={"1"} accessibilityLabel="Checkbox" colorScheme="green" size="lg"
        />

        <View style={styles.textBox}>
            
            {checked 
            ? <Text style={{...styles.productText, color: '#B1B1B0', textDecorationLine: 'line-through'}}>{props.name}</Text>
            : <Text style={styles.productText}>{props.name}</Text>
            }
            

            <Menu>
                <MenuTrigger>
                    <Ionicons name="ellipsis-vertical" size={26} color="#002317" />
                </MenuTrigger> 
                <MenuOptions optionsContainerStyle={{width: 95}}>
                    
                    <MenuOption 
                    onSelect={() => {
                      deleteProduct(props.id);
                    }} 
                    >
                    <Text>Usuń Produkt</Text>
                    </MenuOption>  

                    <MenuOption 
                    onSelect={() => {
                      setShowEditModal(true);
                      setCurrentName(props.name);
                      setCurrentId(props.id);
                    }} 
                    >
                    <Text>Edytuj Produkt</Text>
                    </MenuOption> 

                </MenuOptions> 
            </Menu>
        </View>

        {showEditModal && (
          <EditModal name={currentName} id={currentId}/>
        )}           

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