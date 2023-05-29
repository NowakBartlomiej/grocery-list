import React, {createContext, useContext, useState} from "react";

import * as SQLite from 'expo-sqlite';
import { useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
    const db = SQLite.openDatabase('groceryList.db');
    const [products, setProducts] = useState([]);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)')
        });
    
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM products', null,
            (txObj, resultSet) => setProducts(resultSet.rows._array),
            (txObj, error) => console.log(error)
          );
        });
      }, [])


      const addProduct = (productName) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO products (name) values (?)', [productName],
              (txObj, resultSet) => {
                let existingProducts = [...products];
                existingProducts.push({id: resultSet.insertId, name: productName})
                setProducts(existingProducts);
              },
              (txObj, error) => console.log(error)
            )
          })
      }
    
    
    return <StateContext.Provider
        value={{ 
            products, setProducts,

            showModal, setShowModal,

            addProduct,
         }}
    >
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);