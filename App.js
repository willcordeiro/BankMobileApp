import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TouchScreen from './src/screens/TouchScreen';
import PinScreen from './src/screens/PinScreen';
import HomeScreen from './src/screens/HomeScreen';
import SendRequestScreen from './src/screens/SendRequestScreen';
import CardScreen from './src/screens/CardScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default App = () => {
  const Stack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: true,
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let icon = '';
      const color = focused ? '#559ddf' : '#828282';
      const size = 24;

      switch (route.name) {
        case 'Cards':
          icon = 'credit-card';
          break;

        case 'SendRequest':
          icon = 'send';
          break;

        default:
          icon = 'dashboard';
      }
      return <Icon name={icon} size={size} color={color} />;
    },
    tabBarStyle: {
      backgroundColor: '#1e1e1e',
      borderTopColor: '#1e1e1e',
      paddingBottom: 5,
    },
    headerShown: false,
  });

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}>
        <TabStack.Screen name="Home" component={HomeScreen}></TabStack.Screen>
        <TabStack.Screen
          name="SendRequest"
          component={SendRequestScreen}
          options={{title: 'Send & Request'}}></TabStack.Screen>
        <TabStack.Screen
          name="Cards"
          component={CardScreen}
          options={{title: 'My Cards'}}></TabStack.Screen>
      </TabStack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Tabs" component={TabStackScreens} />
        <Stack.Screen name="Touch" component={TouchScreen} />
        <Stack.Screen name="Pin" component={PinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
