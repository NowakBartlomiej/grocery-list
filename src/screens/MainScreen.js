import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

import { Header, Product } from '../components'

export default function MainScreen() {
    return (
      <>
        <Header />

        <ScrollView style={styles.scrollView}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ScrollView>
      </>
    )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'F2F7FF', 
    marginBottom: 60,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  
  noListBox: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  noListText: {
    fontSize: 40,
    color: '#B1B1B0'
  }
});