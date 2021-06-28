import React from 'react'
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
container:{
  flex:1,backgroundColor:'white'
},
txtitle:{
  color:'black',
  fontWeight:'bold',
  fontSize:18,
  marginLeft:wp(7.5),
  marginBottom:wp(1)
},
viewinput:{
  borderWidth:1,
  borderRadius:10,
  width:wp(85),
  height:wp(10),
  minHeight:35,
  marginLeft:wp(7.5),
  paddingLeft:wp(5),padding:0,justifyContent:'center'
},
viewinputdropdown:{
  width:wp(85),
  height:wp(10),
  minHeight:35,
  padding:0,justifyContent:'center'
},
viewcontent:{
  marginVertical:wp(2)
},
viewrow:{
  flexDirection:'row',
  width:wp(85),
  justifyContent:'space-around'  ,
},
boxstyle:{
  width:wp(30),
  minWidth:40,
  borderColor:'white',
  height:hp(7),
  padding:0,
  margin:0,
},
txbox:{
  fontSize:12,
  color:'black',
  marginLeft:10
},
boxstylehokhau:{
  width:wp(40),
  minWidth:40,
  borderColor:'white',
  height:hp(10),
  padding:0,
  margin:0,
  marginLeft:'10%',
},

txtitleaddress:{
  color:'black',
  fontWeight:'bold',
  fontSize:14,
  marginLeft:wp(7.5)
},
viewmodal:{
  flex:1,
  width:wp(80),
  height:hp(80),
  marginVertical:hp(5),
  marginLeft:wp(10),
  backgroundColor:'white',
  borderWidth:1,
  borderRadius:20
  
},
txmodal:{
  fontSize:18
},
btn:{
  marginVertical:wp(5),
  alignItems:'center',
  width:'50%',
  height:wp(10),
  backgroundColor:'red',
  marginLeft:wp(25),
  borderRadius:20,
  justifyContent:'center',
  minHeight:35,


},
txbtn:{
  color:'white',
  fontSize:18,
  fontWeight:'bold'
}

  
});
