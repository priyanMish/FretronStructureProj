import { Action, createAction, props } from "@ngrx/store";

// export enum ActionTypes {
//     GET_DASHBOARD_ITEMS_ACTION = "[Dashboard] getDashboardItemsAction",
//     GET_DASHBOARD_ITEMS_SUCCESS = "[Dashboard] getDashboardItemsSuccessAction",
//     GET_DASHBOARD_ITEMS_FAILED = "[Dashboard] getDashboardItemsFailedAction",
// }


// export class GetDashboardItemsAction implements Action {
//     readonly type = ActionTypes.GET_DASHBOARD_ITEMS_ACTION;
//     constructor() {}
//   }

//   export class GetDashboardItemsSuccessAction implements Action {
//     readonly type = ActionTypes.GET_DASHBOARD_ITEMS_SUCCESS;
//     constructor(public payload: any) {}
//   }

//   export class GetDashboardItemsFailedAction implements Action {
//     readonly type = ActionTypes.GET_DASHBOARD_ITEMS_FAILED;
//     constructor(public payload: any) {}
//   }

//   export type Actions = 
//     | GetDashboardItemsAction 
//     | GetDashboardItemsSuccessAction 
//     | GetDashboardItemsFailedAction 
  
// export const getMovies = createAction("[Movie] Get Movie")
// export const getMoviesSuccess = createAction("[Movie] Get Movie Success", 
// props<{movies:ReadonlyArray<Movie>}>())


export const getData = createAction("[Dashboard] Get Data")

export const getDataSuccess = createAction("[Dashboard] Get Data Success", props<{data:any}>())

export const getDataFailure = createAction ("[Dashboard] Get Data Failure")

export const addToCart = createAction("[Dashboard] Add To Cart", props<{item:any}>())
export const deleteFromCart = createAction("[Dashboard] Delete From Cart", props<{item:any}>())
  


