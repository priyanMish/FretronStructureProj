import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of, forkJoin } from "rxjs";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError, tap ,exhaustMap} from "rxjs/operators";
import { DataService } from "src/app/data.service";
import { getData,getDataSuccess,getDataFailure,getJsonData,getJsonDataSuccess,getLazyList,getLazyListSuccess } from "../actions/store.action";


@Injectable()
export class StoreEffects{
    constructor(private dataService : DataService, private actions$: Actions){

    }


    getStoreData$:Observable<Action> = createEffect(()=>
    this.actions$.pipe(
        ofType(getData),
        exhaustMap(()=> this.dataService.onGetData().pipe(
            map((data:any)=>{
                return getDataSuccess({data})}),
    
        )) ,
        
    )
    )
    getJsonData$:Observable<Action> = createEffect(()=>{
       return this.actions$.pipe(
            ofType(getJsonData),
            exhaustMap(()=> this.dataService.onGetJsonData().pipe(
                map((data:any)=>{
                    console.log(data, "effect triggered")
                    return getJsonDataSuccess({data})
                })
            ))
        )
    })

    getLazyData$:Observable<Action> = createEffect(()=>{
        return this.actions$.pipe(
            ofType(getLazyList),
            exhaustMap(()=>this.dataService.onGetJsonData().pipe(
                map((data:any)=>{
                    return getLazyListSuccess({data})
                })
            ))
        )
    })

}