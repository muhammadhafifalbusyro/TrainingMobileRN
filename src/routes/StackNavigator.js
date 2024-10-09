// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import TabNavigator from './TabNavigator';
import Message from '../screens/Message';


const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
				name="Login" 
				component={Login} 
				// options={{headerShown:false}}
				/>
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown:false}} />
				<Stack.Screen name="Message" component={Message} options={{headerShown:false}} />
				
			</Stack.Navigator>
        </NavigationContainer>
  );
}

export default StackNavigator;