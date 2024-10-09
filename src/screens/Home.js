import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-native'
import {View,Text} from 'react-native'

const Home = ({navigation}) => {
    const [dataMovie, setDataMovie]= useState([])

    // const getUserProfile = () => {
    //     return fetch('https://apimobilehris-dev.ut.ac.id/user-info',{
    //         method: 'GET',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //           Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiZGV2ZWwtaHJpc0BlY2FtcHVzLnV0LmFjLmlkIiwiaWF0IjoxNzI4NDUzODQxLCJleHAiOjE3Mjg0ODI2NDF9.JuKXnfU4J3GjzhUJWEDhqKko7nVzLAc2VYPKWmg0Rj4`
    //         },
    // })
    //       .then(response => response.json())
    //       .then(json => {
    //         console.error(json)
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   };
    
    //   useEffect(()=>{
    //     getUserProfile()
    //   },[])

    const getMoviesFromApi = () => {
        return fetch('https://reactnative.dev/movies.json',{
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          })
          .then(response => response.json())
          .then(json => {
            console.warn('data json', json)
            setDataMovie(json?.movies)
          })
          .catch(error => {
            console.error(error);
          });
      };
    
    
    useEffect(() => {
        getMoviesFromApi()

        const unsubscribe = navigation.addListener('focus', () => {
            getMoviesFromApi()
        });

    return unsubscribe;
    }, [navigation]);

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Text style={{color:'black'}}>Halaman Home</Text>
            <Button title='go to message' onPress={()=>{
                navigation.navigate('Message')
            }}/>
            {dataMovie.map((value, key) => {
                return (
                    <View style={{height:50, width:'100%', backgroundColor:'white', marginTop:12, justifyContent:'center'}} key={key}> 
                        <Text style={{color:'black'}}>{value?.title}</Text>
                        <Text style={{color:'black'}}>{value?.releaseYear}</Text>
                    </View>
                )
            })}
        </View>
    )
}
export default Home