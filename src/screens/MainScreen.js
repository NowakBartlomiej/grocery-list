import { View, Text, ScrollView, StyleSheet, Button } from 'react-native'
import React from 'react'

import { Header, Product } from '../components'

import { useStateContext } from '../contexts/ContextProvider'

export default function MainScreen() {
    const {products, setProducts} = useStateContext();
  
    return (
      <>
        <Header />

        <ScrollView style={styles.scrollView}>
        <Button title='test' onPress={() => console.log(products)}/>
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