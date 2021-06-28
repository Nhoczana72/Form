import {createReducer} from '@reduxjs/toolkit'
import { GETALLPROFILE } from '../action/action.form';
export type profileState = {
  profile:Object 
};
const INITIAL_STATE = {
  profile:[]
};

export const profileReducer = createReducer(INITIAL_STATE, (builder) =>
  builder
    .addCase(GETALLPROFILE, (state, action) =>
      Object.assign( state,{profile: action.payload}),
    )
 
);
