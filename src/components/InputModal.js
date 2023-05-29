import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import { useStateContext } from '../contexts/ContextProvider'

export default function InputModal() {
  const {showModal, setShowModal, addProduct} = useStateContext();

  const [inputText, setInputText] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(true);
  
  return (
    <Modal visible={showModal} animationType='slide' transparent={true}>
        <TouchableWithoutFeedback onPress={() => {
            setShowModal(false); 
            setDisableSubmit(true)}}
        >
            <View
                style={{
                height: '60%',
                backgroundColor:'rgba(0,0,0,0.5)'
                }}> 
            </View>
        </TouchableWithoutFeedback>

        <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Dodaj Produkt do listy</Text>

            <TextInput 
                style={styles.modalInput} 
                placeholder='Nazwa Produktu'
                placeholderTextColor='#B1B1B0'
                onChangeText={(text) => {
                    if ((/^[\s\p{L}\d+]+$/u.test(text)) && (text.replace(/\s/g, '').length > 0)) {
                        setInputText(text);
                        setDisableSubmit(false);
                    } else {
                        setDisableSubmit(true);
                    }
                }}
            />

            {disableSubmit && (
                <Text style={styles.warningText}>Nazwa produktu nie może zawierać zanków specjalnych oraz być pusta</Text>
            )}

            <View style={styles.btnBox}>
            <TouchableOpacity 
                    onPress={() => {
                        addProduct(inputText);
                        //TODO LADOWANIE
                        setShowModal(false);
                    }}
                    activeOpacity={.7}
                    disabled={disableSubmit}
                >
                    <Text style={disableSubmit ? {...styles.btnSubmit, opacity: .5} : styles.btnSubmit}>Dodaj Produkt</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.7} onPress={() => {
                    setShowModal(false); 
                    setDisableSubmit(true)}}
                >
                    <Text style={styles.btnCancel}>Anuluj</Text>
                </TouchableOpacity>
            </View>

        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    modalView: {
        height: '70%',
        backgroundColor: '#eee',
        marginTop: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 10,
        borderTopRightRadius: 10,
        gap: 26,
        borderWidth: 1,
        borderColor: '#676767',
    },

    modalTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#002317',
    },

    modalInput: {
        borderWidth: 1,
        borderColor: '#C8F2E6',
        backgroundColor: '#fff',
        color: '#002317',
        borderRadius: 6,
        paddingHorizontal: 18,
        paddingVertical: 1,
        fontSize: 22,
    },

    btnBox: {
        flexDirection: 'row',
        gap: 10,
    },

    btnSubmit: {
        backgroundColor: '#00A57A',
        color: '#fff',
        paddingVertical: 6,
        paddingHorizontal: 24,
        borderRadius: 24,
        fontSize: 20,
        borderWidth: 3,
        borderColor: '#00A57A',
    },

    btnCancel: {
        backgroundColor: '#fff',
        borderWidth: 3,
        borderColor: '#afafaf',
        color: '#afafaf',
        paddingVertical: 6,
        paddingHorizontal: 24,
        borderRadius: 24,
        fontSize: 20,
    },

    warningText: {
        color: 'red',
        paddingHorizontal: 14,
    }
});