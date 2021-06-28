
import axios from 'axios'

import React, { useEffect } from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'
import { styles } from './Search.style';
import { SearchLogic } from './Search.logic';
import Icon from 'react-native-vector-icons/Feather'
export const Search = (props: any) => {
    const { selectoptions,valuesearch,datadist,setDatadist, setvaluesearch, datadistric, open,search, data,setData,setopen,select ,dataphuong, setDataphuong
    ,datacity} = SearchLogic(props)
        const value =props.route.params
        const valuestring=value.string
        console.log(value)
        let codecity:any=79
        
        if(valuestring=='quan'){
            codecity=value.codecity
            
            useEffect(() => {
                fetch(`https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/quan-huyen/${codecity}.json`)
                  .then((response) => response.json())
                  .then((json:any)=>setDatadist(Object.values(json)))
                  .catch((error) => console.error(error))
              }, []);

        }
        if(valuestring=='phuong'){
            codecity=value.codecity
            
            useEffect(() => {
                fetch(`https://raw.githubusercontent.com/madnh/hanhchinhvn/master/dist/xa-phuong/${codecity}.json`)
                  .then((response) => response.json())
                  .then((json:any)=>setDataphuong(Object.values(json)))
                  .catch((error) => console.error(error))
              }, []);

        }
        
        
        
        if(valuestring=='tinh')
        {
            return (
                <View style={styles.container}>
                    <View style={styles.viewinput}>
                        <TextInput style={styles.txinput}
                        value={valuesearch}
                        onChangeText={text=>setvaluesearch(text)}></TextInput>
                        <TouchableOpacity style={styles.btninput} onPress={()=>search('tinh')}><Icon name='search' color='black' size={20}/></TouchableOpacity>
                    </View>
                    
                    <ScrollView>
                        <View style={{ alignItems: 'center' }}>
                            {data.map((item, index) => {
                                return (<TouchableOpacity key={index} style={styles.btnmodal} onPress={()=>{select(item,valuestring)}}>
                                    <Text style={styles.txmodal}>{item.name_with_type}</Text>
                                </TouchableOpacity>);
                            })}
                        </View>
                    </ScrollView>
                    
                </View>
        
        
            );
        }else if(valuestring=='quan')
        {   
            return (
                <View style={styles.container}>
                    <View style={styles.viewinput}>
                        <TextInput style={styles.txinput}
                        value={valuesearch}
                        onChangeText={text=>setvaluesearch(text)}></TextInput>
                        <TouchableOpacity style={styles.btninput} onPress={()=>search('quan')}><Icon name='search' color='black' size={20}/></TouchableOpacity>
                    </View>
                    
                    <ScrollView>
                        <View style={{ alignItems: 'center' }} >
                            {datadist?.map((item, index) => {
                                return (<TouchableOpacity key={index} style={styles.btnmodal} onPress={()=>{select(item,valuestring)}}>
                                    <Text style={styles.txmodal}>{item.name_with_type}</Text>
                                </TouchableOpacity>);
                            })}
                        </View>
                    </ScrollView>
                    
                </View>
        
        
            );
                        }
                        else {
                            return (
                                <View style={styles.container}>
                                    <View style={styles.viewinput}>
                                        <TextInput style={styles.txinput}
                                        value={valuesearch}
                                        onChangeText={text=>setvaluesearch(text)}></TextInput>
                                        <TouchableOpacity style={styles.btninput} onPress={()=>search('phuong')}><Icon name='search' color='black' size={20}/></TouchableOpacity>
                                    </View>
                                    
                                    <ScrollView>
                                        <View style={{ alignItems: 'center' }} >
                                            {dataphuong?.map((item, index) => {
                                                return (<TouchableOpacity key={index} style={styles.btnmodal} onPress={()=>{select(item,valuestring)}}>
                                                    <Text style={styles.txmodal}>{item.name_with_type}</Text>
                                                </TouchableOpacity>);
                                            })}
                                        </View>
                                    </ScrollView>
                                    
                                </View>
                        
                        
                            );
                        }
};

