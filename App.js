// import React, { useState } from 'react'
// import {View, Text, StyleSheet, Button, Alert} from 'react-native'
// // import { styles } from './styles'


// // class App extends React.Component {

// //   render(){
// //     return (
// //       <View>
// //         <Text>Hallo dunia</Text>
// //       </View>
// //     )
    
// //   }
// // }
// // export default App

// const Heeader = ({title = ''}) => {
//   return (
//     <View style={styles.header}>
//       <Text style={{fontSize:16, fontWeight:'bold'}}>{title}</Text>
//     </View>
//   )
// }


// const App = () => {

//   //counter: variable yang menyimpan nilai dari state
//   // setCounter: method untuk mengubah state
//   // useState = method dari React untuk dapat menggunakan state di react hooks
//   // 0 = inisiasi nilai awal

//   const [counter,setCounter] = useState(0)

//   const handlerButtonPlus = () => {
//     setCounter(counter + 1)
//   }

//   const handlerButtonMin = () => {
//     setCounter(counter - 1)
//   }

//   return (
//     <View>
//       <Heeader title='Homepage'/>
//       <Text style={{fontSize:30,textAlign:'center'}}>{counter}</Text>
//       <Button title='+' onPress={handlerButtonPlus}/>
//       <Button title='-' onPress={handlerButtonMin}/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   header:{
//     height:50, 
//     width:'100%', 
//     justifyContent:'center', 
//     backgroundColor:'gray',
//     padding:12, 
//     alignItems:'center'}
// })



// export default App



import React from 'react'
import {View,Text, StyleSheet, Dimensions, Image} from 'react-native'

const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width


const App = () => {
    return  (
		<View style={styles.container}>
			{/* <View style={{flex: 4, backgroundColor: 'red'}} />
			<View style={{flex: 4, backgroundColor: 'darkorange'}} />
			<View style={{flex: 4, backgroundColor: 'red'}} />
			<View style={{flex: 4, backgroundColor: 'blue'}} /> */}

			{/* <View style={{height:50, width:50, backgroundColor:'red'}}/>
			<View style={{height:50, width:50, backgroundColor:'green'}}/>
			<View style={{height:50, width:50, backgroundColor:'blue'}}/> */}

			{/* <Text>{HEIGHT}</Text>


			<Text>{WIDTH}</Text> */}
			<View style={{height:50, width:'100%', backgroundColor:'yellow'}}>

			</View>
		
			<View style={{height:50, width:50, backgroundColor:'deepskyblue', borderWidth:1,borderRadius:50}}>

			</View>

			<Image source={require('./react-native.png')} style={{height:100,width:100,resizeMode:'cover'}}/>

			<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsA8cVPyYr_UZb1UVBTrcP9s4quRNax2ksIA&s'}} style={{height:200,resizeMode:'contain'}}/>


			{/* <View style={{height:100, width:'100%', backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
				<View style={{height:30, width:30, backgroundColor:'green'}}></View>
			</View> */}

			{/* <View style={{height:100, width:'100%', backgroundColor:'red',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
				<View style={{height:30, width:30, backgroundColor:'green'}}></View>
				<View style={{height:30, width:30, backgroundColor:'purple'}}></View>
				<View style={{height:30, width:30, backgroundColor:'orange'}}></View>
			</View>	 */}


			{/* <View style={{height:100,width:100, backgroundColor:'blue', marginLeft:15,paddingLeft: 15}}>
				<View style={{height:30,width:30, backgroundColor:'green'}}>

				</View>

			</View> */}

			




		</View>
    )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor: "rgba(255, 0, 255, 0.8)",
    flex:1,
  },
})



export default App


