import React from 'react'
import {View,Text, Button} from 'react-native'

const Login = ({navigation}) => {

    const handlerNavigateRegister = () => navigation.navigate('Register')
    const handlerNavigateHome = () => navigation.replace('TabNavigator')

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Text style={{color:'black'}}>Halaman Login</Text>
            <Button title='Go to Register' onPress={handlerNavigateRegister}/>

            <Button title='Go to Home' onPress={handlerNavigateHome}/>
        </View>
    )
}
export default Login