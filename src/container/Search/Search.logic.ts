import Picker from 'react-native-picker'
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {GETALLPROFILE} from '../../redux/action/action.form'

import * as Datajson from '../../data/dist/quan-huyen/10.json'
export const SearchLogic = (props: any) => {
  
  let datacity:any=require('../../data/dist/tinh_tp.json')
  let datadistric:any = []
  let dataphuongxa:any = []

  const [open, setopen] = useState(false)
  datacity=Object.values(datacity)
  const [data, setData] = useState(datacity);
  const [datadist, setDatadist] = useState([]);
  datadistric=Object.values(datadist)
  const [dataphuong, setDataphuong] = useState([]);
  dataphuongxa=Object.values(dataphuong)

  // setDatadist(datadistric)
  let b=   useSelector((state:any)=>{ if(state.profile.profile!=null) {return(state.profile.profile) } else return;})

  const dispatch=useDispatch()

  const [profile, setprofile] = useState({
    name:'',
    cmnd: '',
    gender: '',
    hokhau: '',
    birthday: '',
    sonhatenduong: '',
    tokhupho: '',
    phuongxa: '',
    quanhuyen: b?.quanhuyen,
    congviec: '',
    noilamviec: '',
    nhom: '',
    sotien:'',
    codetinhthanhpho:b?.codetinhthanhpho,
   tinhthanhpho:b?.tinhthanhpho||''
   ,codequan:b?.codequan||''
  })
  const selectoptions=(item:any)=>{
    setprofile({...profile,quanhuyen:item})
  }
  const select=(item:any,string:any)=>{
    console.log('item',item)
    if(string=='tinh'){
      dispatch(GETALLPROFILE({...profile,tinhthanhpho:item.name_with_type,codetinhthanhpho:item.code}))
      props.navigation.navigate('Home')
    }
    if(string=='quan'){
      dispatch(GETALLPROFILE({...profile,quanhuyen:item.name_with_type,codequan:item.code}))
      props.navigation.navigate('Home')
    }
    if(string=='phuong'){
      dispatch(GETALLPROFILE({...profile,phuongxa:item.name_with_type}))
      props.navigation.navigate('Home')
    }
    
  }
  const [valuesearch, setvaluesearch] = useState('')

  const search=(string:string)=>{
    const dataa:any=[]
    console.log(valuesearch,string)
    if(string=='tinh'){
    for(var i=0;i<datacity.length;i++){
      if (datacity[i].name_with_type.toLowerCase().indexOf(valuesearch.toLowerCase()) !== -1){
        dataa.push(datacity[i])
      }
    }
    setData(dataa)}
    if(string=='quan'){
      for(var i=0;i<datadistric.length;i++){
        if (datadistric[i].name_with_type.toLowerCase().indexOf(valuesearch.toLowerCase()) !== -1){
          dataa.push(datadistric[i])
        }
      }
      setDatadist(dataa)}
      if(string=='phuong'){
        for(var i=0;i<dataphuongxa.length;i++){
          if (dataphuongxa[i].name_with_type.toLowerCase().indexOf(valuesearch.toLowerCase()) !== -1){
            dataa.push(dataphuongxa[i])
          }
        }
        setDataphuong(dataa)}

  }
  
  
  

  return {datadistric,profile,selectoptions,open,setopen,select,datacity,
    data,setData,search,valuesearch, setvaluesearch,setDatadist,datadist,dataphuong, setDataphuong
    
  };
}