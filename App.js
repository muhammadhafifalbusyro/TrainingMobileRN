import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
// import { styles } from './styles'


// class App extends React.Component {

//   render(){
//     return (
//       <View>
//         <Text>Hallo dunia</Text>
//       </View>
//     )
    
//   }
// }
// export default App

const Heeader = ({title = ''}) => {
  return (
    <View style={styles.header}>
      <Text style={{fontSize:16, fontWeight:'bold'}}>{title}</Text>
    </View>
  )
}


const App = () => {

  //counter: variable yang menyimpan nilai dari state
  // setCounter: method untuk mengubah state
  // useState = method dari React untuk dapat menggunakan state di react hooks
  // 0 = inisiasi nilai awal

  const [counter,setCounter] = useState(0)

  const handlerButtonPlus = () => {
    setCounter(counter + 1)
  }

  const handlerButtonMin = () => {
    setCounter(counter - 1)
  }

  return (
    <View>
      <Heeader title='Homepage'/>
      <Text style={{fontSize:30,textAlign:'center'}}>{counter}</Text>
      <Button title='+' onPress={handlerButtonPlus}/>
      <Button title='-' onPress={handlerButtonMin}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height:50, 
    width:'100%', 
    justifyContent:'center', 
    backgroundColor:'gray',
    padding:12, 
    alignItems:'center'}
})



export default App




