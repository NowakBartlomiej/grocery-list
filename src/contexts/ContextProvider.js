import React, {createContext, useContext, useState} from "react";

import * as SQLite from 'expo-sqlite';
import { useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
    const db = SQLite.openDatabase('groceryList.db');
    const [products, setProducts] = useState([]);

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
    
    
    return <StateContext.Provider
        value={{ 
            products, setProducts
         }}
    >
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);