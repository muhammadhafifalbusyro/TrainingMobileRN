// import React from 'react'
// import StackNavigator from './routes/StackNavigator'

// const App = () => {
//     return <StackNavigator/>
// }

// export default App


// In App.js in a new project

// import * as React from 'react';
// import { View, Text, Button, Alert } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen({navigation}) {

//     // const navigation = useNavigation()

//     const handlerNavigate = () => {
//         // Alert.alert("Hallo")
//         // navigation.navigate('Setting')
//         navigation.navigate('Setting')
//     }

//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text >Home Screen</Text>
//         <Button title='Go To Setting' onPress={()=>handlerNavigate()}/>
//         </View>
//     );
// }
// function SettingScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Setting Screen</Text>
//       </View>
//     );
//   }

// // Inisialiasi Stack Navigatornya
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//         <Stack.Navigator 
//         initialRouteName='Home'
//         >
//             <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }}/>
//             <Stack.Screen name='Setting' component={SettingScreen} />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import * as React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen({navigation}) {

    // const navigation = useNavigation()
    const user = {
        id: 123,
        name:"User Name"
    }

    const handlerNavigate = () => {
        // Alert.alert("Hallo")
        // navigation.navigate('Setting')
        navigation.navigate('Setting', user)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text >Home Screen</Text>
        <Button title='Go To Setting' onPress={()=>handlerNavigate()}/>
        </View>
    );
}
function SettingScreen({navigation, route}) {

    const user = route?.params

    const handlerNavigate = () => {
        // Alert.alert("Hallo")
        // navigation.navigate('Setting')
        navigation.goBack()
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen : {user?.name}</Text>
        <Button title='Go Back' onPress={()=>handlerNavigate()}/>
      </View>
    );
  }

  function HistoryScreen({navigation, route}) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>History Screen</Text>
      </View>
    );
  }

// // Inisialiasi Stack Navigatornya
// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//         <Stack.Navigator 
//         initialRouteName='Home'
//         >
//             <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }}/>
//             <Stack.Screen name='Setting' component={SettingScreen} />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

//Inisialisasi Bottom tab navigatornya

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='History'>
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel :'Home',
            tabBarIcon: ({focused}) =>
                focused ? (
                    <Text style={{color:'deepskyblue'}}>H</Text>
                ) : (
                    <Text style={{color:'black'}}>H</Text>
                ),
        }} />
        <Tab.Screen name="Setting" component={SettingScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}