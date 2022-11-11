import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={welcomeStyle.container}>
      <Text style={welcomeStyle.headerText}>Welcome to Little Lemon</Text>

      <Text style={welcomeStyle.welcomeText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const welcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
  },
  welcomeText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
});
