import React from 'react';
import { Text, StyleSheet, View, FlatList, TextInput } from 'react-native';

const Formulario = () => {
    return ( 
        <View style={styles.form}>
            <View>
                <TextInput
                    placeholder = ' ciudad'
                    placeholderTextColor = '#666'
                />
            </View>
        </View>
     );
}


const styles = StyleSheet.create({
    form: {
        marginTop:100
    }
})
 
export default Formulario;