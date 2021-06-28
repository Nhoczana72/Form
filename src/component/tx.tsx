import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';

export interface ViewForm {
  containerStyle?: StyleProp<ViewStyle>;
    text?: string;
    

}

export const ViewForm: React.FC<ViewForm> = (props) => {
  const {
    containerStyle,
    text}=props;

  

  return (
    <View style={[_styles.container]}>
      <View style={_styles.line}>
      </View>
      <Text style={_styles.tx}>{text}</Text>
      <View style={_styles.line} />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {flexDirection:'row',height:30,justifyContent:'center'},
  divider: {
    height: 1,
    marginTop: 8,
    width: '100%',
    backgroundColor: '#F1F3F8',
  },
  line: {
    width:100,height:0,borderWidth:0.5,marginVertical:10,marginHorizontal:10,borderColor:'#114A69'
  },
  line2: {
    width:100,height:1,borderWidth:1,marginVertical:10,marginHorizontal:10
  },
  tx: {
color:'gray' ,
textAlign:'center' },
});
