import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {View,Text} from 'react-native'

const Profile = ({navigation}) => {

    const [dataUser,setDataUser] = useState(null)

    const getDataUser = () => {
        return fetch('https://apimobilehris-dev.ut.ac.id/user-info',{
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZGV2ZWwtaHJpc0BlY2FtcHVzLnV0LmFjLmlkIiwiaWF0IjoxNzI4NDUzODQxLCJleHAiOjE3Mjg0ODI2NDF9.JuKXnfU4J3GjzhUJWEDhqKko7nVzLAc2VYPKWmg0Rj4`
            },
          })
          .then(response => response.json())
          .then(json => {
            console.warn('data json', json)
            setDataUser(json?.data)
          })
          .catch(error => {
            console.error(error);
          });
      };
    
    
    useEffect(() => {
        getDataUser()

        const unsubscribe = navigation.addListener('focus', () => {
            getDataUser()
        });

    return unsubscribe;
    }, [navigation]);
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Text style={{color:'black'}}>Halaman Profile</Text>
            <Text style={{color:'black'}}>Nama: {dataUser?.nama}</Text>
            <Text style={{color:'black'}}>Email: {dataUser?.email}</Text>
            <Text style={{color:'black'}}>Nip:{dataUser?.nip}</Text>
        </View>
    )
}
export default Profile