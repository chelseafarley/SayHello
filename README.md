# say-hello

This npm package takes a name and outputs a string that is a greeting to that name. For example, if I called the npm package with the name Sarah I could get the greeting back "Kia ora Sarah" to display however I wish.

# Example
``` js
  import React from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import SayHello from 'say-hello-greetings';

  export default function App() {
    return (
      <View style={styles.container}>
        <Text>{SayHello("World!")}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
```
