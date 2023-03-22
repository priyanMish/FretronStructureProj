import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of, forkJoin } from "rxjs";
import { Action } from "@ngrx/store";
import { switchMap, map, catchError, tap ,exhaustMap} from "rxjs/operators";
import { DataService } from "src/app/data.service";
import { getData,getDataSuccess,getDataFailure,getJsonData,getJsonDataSuccess } from "../actions/store.action";


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
        // switchMap((res)=>[
        //     getJsonData()
        // ])
        
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

//     getVehicleCount$: Observable<Action> = createEffect(() =>
//     this.actions$.pipe(
//       ofType(VehicleActionTypes.FETCH_VEHICLE),
//       switchMap((action: any) =>
//         this.vehicleService.getVehicleList(action.payload, true).pipe(
//           map((action: any) =>
//             action["status"] == 200
//               ? new VehicleCountSuccessAction(action.data)
//               : new VehicleCountFailedAction(action.error)
//           ),
//           catchError((_) =>
//             of(new VehicleCountFailedAction("Unexpected error occurred"))
//           )
//         )
//       )
//     )
//   );


}