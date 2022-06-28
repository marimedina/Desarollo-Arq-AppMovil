import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Proyecto de tareas</Text>
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
});
 
export default App ;
