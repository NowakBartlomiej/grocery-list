import React, {createContext, useContext, useState} from "react";

import * as SQLite from 'expo-sqlite';
import { useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({children}) => {
    const db = SQLite.openDatabase('groceryList.db');
    const [products, setProducts] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentName, setCurrentName] = useState(undefined);
    const [currentId, setCurrentId] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        db.transaction(tx => {
          tx.executeSql('CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, isChecked INTEGER)')
        });
    
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM products', null,
            (txObj, resultSet) => setProducts(resultSet.rows._array),
            (txObj, error) => console.log(error)
          );
        });

        setIsLoading(false);
      }, [])


      const addProduct = (productName) => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO products (name, isChecked) values (?,?)', [productName, 0],
              (txObj, resultSet) => {
                let existingProducts = [...products];
                existingProducts.push({id: resultSet.insertId, name: productName, isChecked: 0})
                setProducts(existingProducts);
              },
              (txObj, error) => console.log(error)
            )
          })
      }

      const deleteProduct = (id) => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM products WHERE id = ?', [id],
              (txObj, resultSet) => {
                if (resultSet.rowsAffected > 0) {
                  let existingProducts = [...products].filter(name => name.id !== id);
                  setProducts(existingProducts);
                }
              },
              (txObj, error) => console.log(error)
            );
          })
      }

      const updateProduct = (newProductName, id) => {
        db.transaction(tx => {
            tx.executeSql('UPDATE products SET name = ? WHERE id = ?', [newProductName, id],
              (txObj, resultSet) => {
                if (resultSet.rowsAffected > 0) {
                  let existingProducts = [...products];
                  const indexToUpdate = existingProducts.findIndex(name => name.id === id);
                  existingProducts[indexToUpdate].name = newProductName;
                  setProducts(existingProducts);
                }
              },
              (txObj, error) => console.log(error)
            )
          })
      }

      const updateChecked = (isChecked, id) => {
        db.transaction(tx => {
            tx.executeSql('UPDATE products SET isChecked = ? WHERE id = ?', [isChecked, id],
              (txObj, resultSet) => {
                if (resultSet.rowsAffected > 0) {
                  let existingProducts = [...products];
                  const indexToUpdate = existingProducts.findIndex(name => name.id === id);
                  existingProducts[indexToUpdate].isChecked = isChecked;
                  setProducts(existingProducts);
                }
              },
              (txObj, error) => console.log(error)
            )
          })
      }

      const loadProducts = () => {
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM products', null,
            (txObj, resultSet) => setProducts(resultSet.rows._array),
            (txObj, error) => console.log(error)
          );
        });
        setIsLoading(false);
      }
    
    
    return <StateContext.Provider
        value={{ 
            products, setProducts,

            showModal, setShowModal,

            showEditModal, setShowEditModal,

            addProduct,
            deleteProduct,
            updateProduct,

            currentName, setCurrentName,
            currentId, setCurrentId,

            updateChecked,

            loadProducts,

            isLoading,
         }}
    >
        {children}
    </StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);