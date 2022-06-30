import React from 'react';
import { Text, StyleSheet, View, FlatList, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker/dist/commonjs';

const Formulario = () => {
    return ( 
        <View style={styles.form}>
            <View>
            <TextInput
                    placeholder = ' ciudad'
                    placeholderTextColor = '#000000'
                />
            </View>
            <View>
                <Picker>
                    <Picker.Item label='Seleccione un pais' value=''/>
                    <Picker.Item label='Argentina' value='AR'/>
                    <Picker.Item label='Brasil' value='BR'/>
                </Picker>
            </View>
        </View>
     );
}


const styles = StyleSheet.create({
    form: {
        marginTop:100,
        backgroundColor: '#e7e7e7'
    }
})
 
export default Formulario;