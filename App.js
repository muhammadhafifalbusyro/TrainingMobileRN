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



// import React from 'react'
// import {View,Text, StyleSheet, Dimensions, Image} from 'react-native'

// const HEIGHT = Dimensions.get('window').height
// const WIDTH = Dimensions.get('window').width


// const App = () => {
//     return  (
// 		<View style={styles.container}>
// 			{/* <View style={{flex: 4, backgroundColor: 'red'}} />
// 			<View style={{flex: 4, backgroundColor: 'darkorange'}} />
// 			<View style={{flex: 4, backgroundColor: 'red'}} />
// 			<View style={{flex: 4, backgroundColor: 'blue'}} /> */}

// 			{/* <View style={{height:50, width:50, backgroundColor:'red'}}/>
// 			<View style={{height:50, width:50, backgroundColor:'green'}}/>
// 			<View style={{height:50, width:50, backgroundColor:'blue'}}/> */}

// 			{/* <Text>{HEIGHT}</Text>


// 			<Text>{WIDTH}</Text> */}
// 			<View style={{height:50, width:'100%', backgroundColor:'yellow'}}>

// 			</View>
		
// 			<View style={{height:50, width:50, backgroundColor:'deepskyblue', borderWidth:1,borderRadius:50}}>

// 			</View>

// 			<Image source={require('./react-native.png')} style={{height:100,width:100,resizeMode:'cover'}}/>

// 			<Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsA8cVPyYr_UZb1UVBTrcP9s4quRNax2ksIA&s'}} style={{height:200,resizeMode:'contain'}}/>


// 			{/* <View style={{height:100, width:'100%', backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
// 				<View style={{height:30, width:30, backgroundColor:'green'}}></View>
// 			</View> */}

// 			{/* <View style={{height:100, width:'100%', backgroundColor:'red',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
// 				<View style={{height:30, width:30, backgroundColor:'green'}}></View>
// 				<View style={{height:30, width:30, backgroundColor:'purple'}}></View>
// 				<View style={{height:30, width:30, backgroundColor:'orange'}}></View>
// 			</View>	 */}


// 			{/* <View style={{height:100,width:100, backgroundColor:'blue', marginLeft:15,paddingLeft: 15}}>
// 				<View style={{height:30,width:30, backgroundColor:'green'}}>

// 				</View>

// 			</View> */}

			




// 		</View>
//     )
// }

// const styles = StyleSheet.create({
//   container :{
//     backgroundColor: "rgba(255, 0, 255, 0.8)",
//     flex:1,
//   },
// })



// export default App


import React  from "react";
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'

const App = () => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.wrapHeader}>
				<TouchableOpacity style={styles.button}>
					<Image source={require('./left-chevron.png')} style={{height:30,width:30}}/>
				</TouchableOpacity>
				<Text style={styles.titleHeader}>Cuti Pegawai</Text>
			</View>
			{/* Card */}
			<View style={styles.cardWrapper}>
				{/* Sub button 1 */}
				<View style={styles.buttonWrapper}>
					<View style={styles.button}>
						<Image source={require('./clipboard.png')} style={{height:20,width:20}}/>
					</View>
					<Text>Cuti Tahunan</Text>
					<View style={styles.label}>
						<Text style={styles.textLabel}>0 Hari</Text>
					</View>
				</View>
				<View style={styles.divider}></View>
				{/* Sub button 2 */}
				<View style={styles.buttonWrapper}>
					<View style={styles.button}>
						<Image source={require('./clipboard.png')} style={{height:20,width:20}}/>
					</View>
					<Text>Cuti Terpakai</Text>
					<View style={styles.label}>
						<Text style={styles.textLabel}>0 Hari</Text>
					</View>
				</View>
				<View style={styles.divider}></View>

				{/* Sub button 1 */}
				<View style={styles.buttonWrapper}>
					<View style={styles.button}>
						<Image source={require('./clipboard.png')} style={{height:20,width:20}}/>
					</View>
					<Text>Sisa Cuti</Text>
					<View style={styles.label}>
						<Text style={styles.textLabel}>0 Hari</Text>
					</View>
				</View>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#2d9cfc'
	},
	wrapHeader:{
		flexDirection:'row',
		alignItems:'center',
		padding:12
	},
	button:{
		height:40, 
		width:40,
		justifyContent:'center',
		alignItems:'center',
		borderWidth:1,
		borderRadius:10
	},
	titleHeader:{
		fontSize: 18,
		fontWeight:'bold',
		color:'black',
		marginLeft:12
	},
	cardWrapper:{
		backgroundColor:'white',
		margin:12,
		padding:12,
		borderRadius:10,
		flexDirection:'row',
		justifyContent:'space-between'
	},
	label:{
		width:80,
		paddingVertical:5,
		backgroundColor:'green',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:5
	},
	textLabel:{
		color:'white'
	},
	buttonWrapper:{
		alignItems:'center',
		justifyContent:'center',
		height:90,
		width:90
	},
	divider:{
		height:90,
		width:2,
		backgroundColor:'gray'
	}
})

export default App


