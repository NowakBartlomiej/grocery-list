import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

import { NativeBaseProvider, Progress } from 'native-base'

import { useStateContext } from '../contexts/ContextProvider'

export default function Header() {
  return (
    <>
        <View style={styles.headerBg}>
            <Text style={[styles.textColor, styles.headerText]}>Lista Zakupów</Text>
            <Text style={[styles.textColor, styles.regularText]}>1 z 2 produktów</Text>

            <View style={styles.progressBox}>
                <Text style={[styles.textColor, styles.regularText, styles.progressText]}>33%</Text>
                <Progress size="md" mb={4} value={33} _filledTrack={{ bg: "#fff"}} bg="#00A57A"/>
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