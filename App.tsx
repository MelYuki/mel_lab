import React from 'react';
import { View, Text } from 'react-native';
import globalStyle from './src/styles/global.style';

function App(): JSX.Element {

  return (
    <View style={globalStyle.screen}>
      <Text style={globalStyle.title}>Welcome in Gest-Events</Text>
    </View>
  );
}

export default App;
