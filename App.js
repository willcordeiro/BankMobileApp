import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TouchScreen from './src/screens/TouchScreen';
import PinScreen from './src/screens/PinScreen';
import HomeScreen from './src/screens/HomeScreen';
import SendRequestScreen from './src/screens/SendRequestScreen';
import CardScreen from './src/screens/CardScreen';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

export default App = () => {
  const Stack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let icon = '';
      const color = 'white';
      const size = 24;

      switch (route.name) {
        case 'Cards':
          icon = 'credit-card';
          break;

        case 'SendRequest':
          icon = 'bank-transfer';
          break;

        default:
          icon = 'home-minus';
      }
      return (
        <Icon2
          name={icon}
          size={size}
          color={color}
          style={{
            fontWeight: 'bold',
            backgroundColor: focused ? '#8a43f2' : '',
            borderRadius: 15,
          }}
        />
      );
    },
    tabBarStyle: {
      backgroundColor: '#1e1e1e',
      borderTopColor: '#1e1e1e',
      paddingTop: 10,
    },
    headerShown: false,
  });

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator screenOptions={screenOptions}>
        <TabStack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: ''}}
        />
        <TabStack.Screen
          name="SendRequest"
          component={SendRequestScreen}
          options={{title: ''}}
        />
        <TabStack.Screen
          name="Cards"
          component={CardScreen}
          options={{title: ''}}
        />
      </TabStack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Touch" component={TouchScreen} />
        <Stack.Screen name="Pin" component={PinScreen} />
        <Stack.Screen name="Tabs" component={TabStackScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
