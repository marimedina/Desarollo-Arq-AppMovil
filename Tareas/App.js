import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Tarea from './components/Tarea';

const App = () => {

  const [tareas, setTareas] = useState([
    { id: '1', nombre: 'Marcos', descripcion: 'Hacer un deploy' },
    { id: '2', nombre: 'Maria', descripcion: 'Hacer una testeo' },
    { id: '3', nombre: 'Ile', descripcion: 'Hacer una app' }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Proyecto de tareas</Text>
      <FlatList
        data = {tareas}
        renderItem = {({item}) => <Tarea tarea = {item} />}
        keyExtractor = {tarea => tarea.id}
      />
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A00768',
    flex: 1
  },
  titulo: {
    color: '#FFFFFF',
    marginTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tarea: {
    color: '#FFFFFF'
  }
});

export default App;
