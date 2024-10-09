import React from 'react'
import { Button } from 'react-native'
import {View,Text} from 'react-native'

const Home = ({navigation}) => {

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Text style={{color:'black'}}>Halaman Home</Text>
            <Button title='go to message' onPress={()=>{
                navigation.navigate('Message')
            }}/>
        </View>
    )
}
export default Home