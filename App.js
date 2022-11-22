import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TouchScreen from './src/screens/TouchScreen';
import PinScreen from './src/screens/PinScreen';

export default App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Touch" component={TouchScreen} />
        <Stack.Screen name="Pin" component={PinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
