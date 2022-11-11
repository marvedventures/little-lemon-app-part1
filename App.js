import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View
        style={styles.container1}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.container2}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
          flex: 1,
          backgroundColor: '#333333',
  },
  container2: {
     backgroundColor: '#333333' 
  },
})
