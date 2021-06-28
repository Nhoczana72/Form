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
  fontSize:16,
  marginLeft:wp(7.5)
},
viewinput:{
  borderWidth:1,
  borderRadius:10,
  width:wp(85),
  height:wp(10),
  minHeight:35,
  marginTop:wp(5),
  marginLeft:wp(7.5),
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-between'
},
viewcontent:{
  marginVertical:wp(3)
},
viewrow:{
  flexDirection:'row',
  width:wp(85),
  justifyContent:'space-around'  ,
},
boxstyle:{
  width:wp(25),
  minWidth:40,
  borderColor:'white',
  height:hp(7),
  padding:0,
  margin:0,
  marginLeft:50,
},
txinput:{
  width:'85%',
  height:wp(10),
  lineHeight:18,
  paddingLeft:wp(5),
  margin:0,padding:0

},
btninput:{
  width:'15%',
  height:hp(5),
  minHeight:35,
  alignItems:'center',
  justifyContent:'center',
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
  marginLeft:50,
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
btnmodal:{
  marginVertical:wp(5),
  alignItems:'center',
  width:'85%',
  backgroundColor:'white'
}

  
});
