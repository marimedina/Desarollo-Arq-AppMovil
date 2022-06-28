import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

const Tarea = ({ tarea, eliminarTarea }) => {

    const dialogoEliminar = id => {
        console.log('Eliminando ...', id);
        eliminarTarea(id);
    }

    return (
        <View style={styles.tarea}>
            <View>
                <Text style={styles.label}>Nombre: </Text>
                <Text style={styles.texto}>{tarea.nombre}</Text>
            </View>
            <View>
                <Text style={styles.label}>Descripcion: </Text>
                <Text style={styles.texto}>{tarea.descripcion}</Text>
            </View>

            <View>
                <TouchableHighlight onPress = {() => dialogoEliminar(tarea.id)}
                    style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}>Eliminar</Text>
                </TouchableHighlight>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    tarea: {
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#e1e1e1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    }
})

export default Tarea;
