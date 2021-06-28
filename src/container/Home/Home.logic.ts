import Picker from 'react-native-picker'
import { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {GETALLPROFILE} from '../../redux/action/action.form'
import moment from 'moment';

export const HometLogic = (props: any) => {
  let datadistric:any = require('../../data/dist/quan-huyen/79.json')

  let datadist:any=[] ;
  datadist=Object.values(datadistric)
  const dispatch = useDispatch();
  let a= useSelector((state:any)=>{ if(state.profile.profile!=null) {return(state.profile.profile) } else return;})



    // Update the document title using the browser API
    console.log('a',a)


  const [open, setopen] = useState(false)
  const [profile, setprofile] = useState({
    name:'',
    cmnd: '',
    gender: '',
    hokhau: '',
    birthday: 'dd/mm/yy',
    sonhatenduong: '',
    khupho: '',
    phuongxa: a?.phuongxa||'',
    quanhuyen: a?.quanhuyen||'',
    congviec: '',
    noilamviec: '',
    nhom: '',
    sotien:'',
    codetinhthanhpho:a?.codetinhthanhpho||'',
   tinhthanhpho:a?.tinhthanhpho||'â'
   ,codequan:a?.codequan
  })
  const selectoptions=(item:any)=>{
    setprofile({...profile,quanhuyen:item})
  }
  
  const [message, setmessage] = useState({
    messages: ''
  })
  const [date, setDate] = useState(new Date())
   const [show, setShow] = useState(false);
   const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false)
      setprofile({...profile,birthday:moment(currentDate).format("MMM Do YY") })
      console.log(moment(currentDate).format("MMMM Do YYYY"))
      setDate(currentDate);
   };
   const datagender = [
    {
       label: 'Nam'
    },
    {
       label: 'Nữ'
    },


 ];
   const [value, setValue] = useState(null);
   const [items, setItems] = useState([
      { label: 'Nhóm 1', value: 'nhom1' },
      { label: 'Nhóm 2', value: 'nhom2' },
      { label: 'Nhóm 3', value: 'nhom3' },
      { label: 'Nhóm 4', value: 'nhom4' },
      { label: 'Nhóm 5', value: 'nhom5' },
      
      
   ]);
 const datahokhau = [
  {
     label: 'Có Hộ Khẩu TPHCM'
  },
  {
     label: 'Có Hộ Khẩu tỉnh tạm trú TPHCM'
  },

];
const submit=()=>{
  dispatch(GETALLPROFILE(profile))

}

  return {datadist,profile,selectoptions,open,setopen,a,date ,show,setShow,onChange
    ,datagender,datahokhau,value, setValue,items, setItems,setprofile,submit
  };
}