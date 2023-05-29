import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

import { NativeBaseProvider, Progress } from 'native-base'

import { useStateContext } from '../contexts/ContextProvider'

export default function Header() {
  const {products} = useStateContext();

  let checkedCount = 0;
  for(let i = 0; i < products.length; i++) {
    if (products[i].isChecked == 1) {
      checkedCount++;
    }
  }

  let progress = parseInt((checkedCount / products.length) * 100);
  
  return (
    <>
        <View style={styles.headerBg}>
            <Text style={[styles.textColor, styles.headerText]}>Lista Zakupów</Text>
            <Text style={[styles.textColor, styles.regularText]}>{checkedCount} z {products.length} produktów</Text>

            <View style={styles.progressBox}>
                <Text style={[styles.textColor, styles.regularText, styles.progressText]}>{progress}%</Text>
                <Progress size="md" mb={4} value={progress} _filledTrack={{ bg: "#fff"}} bg="#00A57A"/>
            </View>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    headerBg: {
      backgroundColor: '#017E5E',
      padding: 15,
      paddingTop: 27,
      paddingBottom: 7,
    },
  
    textColor: {
      color: '#fff',
    },
  
    headerText: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 4,
    },
  
    regularText: {
      fontSize: 18,
      fontWeight: 'normal'
    },
  
    progressBox: {
      paddingTop: 15,
    },
  
    progressText: {
      paddingLeft: 7,
    }
  });