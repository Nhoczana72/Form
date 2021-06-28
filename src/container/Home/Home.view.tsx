

import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'
import { styles } from './Home.style';
import RadioButtonRN from "radio-buttons-react-native";
import { HometLogic } from './Home.logic'
import { useSelector } from 'react-redux';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';

export const Home = (props: any) => {
   const { profile, date, show, setShow, onChange,submit, datagender, datahokhau,value, setValue,items, setItems,open,setopen,setprofile } = HometLogic(props)
   let b = useSelector((state: any) => { if (state.profile.profile != null) { return (state.profile.profile) } else return; })
   return (
      <View style={styles.container}>
         <ScrollView >
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Họ Tên</Text>
               <TextInput
                  placeholder={'Nguyen van A'}
                  value={profile.name}
                  onChangeText={text=>setprofile({...profile,name:text})}
                  style={styles.viewinput}
                  autoCapitalize={'characters'}
               />
            </View>
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Năm Sinh</Text>
               <TouchableOpacity
                  onPress={() => setShow(!show)}
                  style={styles.viewinput}
               >
                  <Text>{moment(date).format("MMMM Do YYYY")}</Text>
                  {
                     show ?
                        <DateTimePicker
                           testID="dateTimePicker"
                           value={date}
                           onChange={onChange}
                           mode={"date"}
                           display="spinner"
                        />
                        : <></>
                  }
               </TouchableOpacity>

            </View>
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>CMND/CCCD</Text>
               <TextInput
                  placeholder={''}
                  style={styles.viewinput}
                  value={profile.cmnd}
                  onChangeText={text=>setprofile({...profile,cmnd:text})}
                  autoCapitalize={'characters'}
                  keyboardType={'numeric'}
               />
            </View>
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Giới Tính</Text>
               <RadioButtonRN
                  data={datagender}
                  style={styles.viewrow}
                  deactiveColor={'black'}
                  box={true}
                  boxStyle={styles.boxstyle}
                  textStyle={styles.txbox}
                  selectedBtn={(e) => setprofile({...profile,gender:e.label})}
                  circleSize={10}
                  initial={1}
               />
            </View>
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Hộ Khẩu</Text>
               <RadioButtonRN
                  data={datahokhau}
                  style={styles.viewrow}
                  deactiveColor={'black'}
                  box={true}
                  boxStyle={styles.boxstylehokhau}
                  textStyle={styles.txbox}
                  selectedBtn={(e) => setprofile({...profile,hokhau:e.label})}
                  circleSize={10}
                  initial={1}

               />
            </View>
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Địa chỉ cư trú hiện nay</Text>
               <View style={styles.viewcontent}>
                  <Text style={styles.txtitleaddress}>Số nhà/tên đường</Text>
                  <TextInput style={styles.viewinput}
                  value={profile.sonhatenduong}
                  onChangeText={text=>setprofile({...profile,sonhatenduong:text})}
                  />
                  <View style={styles.viewcontent}>
                     <Text style={styles.txtitleaddress}>Khu phố/ấp</Text>
                     <TextInput style={styles.viewinput}
                  value={profile.khupho}
                  onChangeText={text=>setprofile({...profile,khupho:text})}
                  />
                  </View>

               </View>
               <View style={styles.viewcontent}>
                  <Text style={styles.txtitleaddress}>Tỉnh/Thành Phố</Text>
                  <TouchableOpacity style={styles.viewinput} onPress={() => props.navigation.navigate('Search', { string: 'tinh', profile })}
                  >
                     <Text>{b ? b.tinhthanhpho : 'TP HCM'}</Text>
                  </TouchableOpacity>
                  <Text></Text>

               </View>
               <View style={styles.viewcontent}>
                  <Text style={styles.txtitleaddress}>Quận/Huyện</Text>
                  <TouchableOpacity style={styles.viewinput} onPress={() => props.navigation.navigate('Search', { string: 'quan', codecity: b.codetinhthanhpho })}>
                     <Text>{b ? b.quanhuyen : ''}</Text>

                  </TouchableOpacity>

               </View>
               <View style={styles.viewcontent}>
                  <Text style={styles.txtitleaddress}>Phường/xã,thị trấn</Text>
                  <TouchableOpacity style={styles.viewinput}
                     onPress={() => props.navigation.navigate('Search', { string: 'phuong', codecity: b.codequan })}
                  >
                     <Text>{b ? b.phuongxa : ''}</Text>

                  </TouchableOpacity>

               </View>


            </View>
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Tên Công Việc</Text>
               <TextInput
                  placeholder={''}
                  style={styles.viewinput}
                  value={profile.congviec}
                  onChangeText={text=>setprofile({...profile,congviec:text})}
                  
               />
            </View>
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Nơi Làm Việc</Text>
               <TextInput
                  placeholder={''}
                  value={profile.noilamviec}
                  onChangeText={text=>setprofile({...profile,noilamviec:text})}
                  
                  style={styles.viewinput}
               />
            </View>
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Nhóm ngành nghề bị tạm dừng hoạt động</Text>
               <DropDownPicker
                   style={styles.viewinputdropdown}
                  listItemContainerStyle={styles.viewinputdropdown}
                  containerStyle={{width:'85%',marginLeft:'7.5%',position:"relative",height : open? 200:35 }}
                   disableBorderRadius={true}
                   dropDownDirection="BOTTOM"
                   scrollViewProps={{scrollEnabled:false}}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setopen}
                  setValue={setValue}
                  setItems={setItems}
                  onChangeValue={(value)=>setprofile({...profile,nhom:value.toString()})}
               />
            </View>
           
            <View style={styles.viewcontent}>
               <Text style={styles.txtitle}>Số tiền hỗ trợ</Text>
               <TextInput
                  placeholder={''}
                  style={styles.viewinput}
                  value={profile.sotien}
                  onChangeText={text=>setprofile({...profile,sotien:text})}
                  
               />
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>submit()}>
               <Text style={styles.txbtn}>Gửi thông tin</Text>
            </TouchableOpacity>

         </ScrollView>

      </View>
   );
};

