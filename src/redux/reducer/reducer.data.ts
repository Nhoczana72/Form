import {createReducer} from '@reduxjs/toolkit'
import { GETDIST } from '../action/action.dist';
export type districtState = {
  district:Object 
};
const INITIAL_STATE = {
  district:[]
};

export const dataReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(GETDIST, (state, action) =>
    
    {console.log(action)
        return Object.assign( state,{district: action.payload})}
      ,
    )
 
);
