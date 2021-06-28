import { GETDIST } from '../action/action.dist';
import axios from 'axios'
import { Epic, combineEpics } from 'redux-observable';

import { ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { github, api } from '../../utils/api'
//api.post('/create')

const getquan = ($action: any) => {

  return $action.pipe(
    ofType(GETDIST),
    mergeMap((act: any) => {
      console.log(act)
      return github
        .get(
          `xa-phuong/${act.payload.codecity}.json`
        )
        .then((rs: any) => {
          const data = rs.data.results;
          const refesh = act?.payload?.page == 1;
          return GETDIST({ data, refesh });
        }).catch((error: any) => {
          console.log(error);
        });
    }),

  );
}
export const dataEpic = combineEpics(getquan);
