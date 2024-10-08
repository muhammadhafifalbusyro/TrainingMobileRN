import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import History from '../screens/History';
import { Text } from 'react-native';
import DrawerNavigator from './DrawerNavigator';


const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name="Home" 
        component={Home}  
        options={{
            tabBarLabel :'Home',
            tabBarIcon: ({focused}) =>
                focused ? (
                    <Text style={{color:'black', color:'deepskyblue'}}>H</Text>
                ) : (
                    <Text style={{color:'black'}}>H</Text>
                ),
        }} />
        <Tab.Screen 
            name="History" 
            component={History} 
            options={{
                tabBarLabel :'History',
                tabBarIcon: ({focused}) =>
                    focused ? (
                        <Text style={{color:'black',color:'deepskyblue'}}>Hi</Text>
                    ) : (
                        <Text style={{color:'black'}}>Hi</Text>
                    ),
            }} 
            />
        <Tab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarLabel :'Profile',
                tabBarIcon: ({focused}) =>
                    focused ? (
                        <Text style={{color:'black',color:'deepskyblue'}}>P</Text>
                    ) : (
                        <Text style={{color:'black'}}>P</Text>
                    ),
            }}
             />
    </Tab.Navigator>
  );
}
export default TabNavigator