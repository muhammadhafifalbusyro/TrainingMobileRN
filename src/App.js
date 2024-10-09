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

function HomeScreen({navigation}) {

    // const navigation = useNavigation()

    const handlerNavigate = () => {
        // Alert.alert("Hallo")
        // navigation.navigate('Setting')
        navigation.navigate('Setting')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text >Home Screen</Text>
        <Button title='Go To Setting' onPress={()=>handlerNavigate()}/>
        </View>
    );
}
function SettingScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>
      </View>
    );
  }

// Inisialiasi Stack Navigatornya
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='Home'
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }}/>
            <Stack.Screen name='Setting' component={SettingScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;