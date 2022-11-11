# React Native (Meta) Exercise

This is a solution to the React Native Exercise by Meta.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:  

- Creating a React App Using Expo
- Create a Header
- Create a Welcome Screen
- Create a Footer
- Update Styles of Components to match Scenario
- Extract All Styles to StyleSheet API 
- Render Components to the App Component

### Screenshot

![image](https://user-images.githubusercontent.com/108392678/201300577-91c24049-18b8-408b-9287-ed9ab5258999.png)

### Links

- Solution URL: [Code](https://github.com/marvedventures/Interactive-rating-component)
- Live Site URL: [Demo](https://interactive-rating-component-sandy.vercel.app/)

## My process

### Built with
- React Native 
- [StyleSheet](https://reactnative.dev/docs/stylesheet) - For styles

### What I learned

Creating React Native components, Views, Text and ScrollView Components.  Using StyleSheet API to style a React Native App.

Here is a code snippet: 


```jsx
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

```

### Useful resources

- [React Native Docs](https://reactnative.dev/docs/stylesheet) - This helped me for all the neccessary React Native styles. I really liked their documentation and will use it going forward.


## Author

- Website - [Marvin Morales Pacis](https://marvin-morales-pacis.vercel.app/)
- LinkedIn - [@marvedventures](https://www.linkedin.com/in/marvedventures/)
- Twitter - [@marvedventures](https://www.twitter.com/marvedventures)

