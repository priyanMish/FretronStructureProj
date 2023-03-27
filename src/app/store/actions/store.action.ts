import { Action, createAction, props } from "@ngrx/store";


export const getData = createAction("[Dashboard] Get Data")

export const getDataSuccess = createAction("[Dashboard] Get Data Success", props<{data:any}>())

export const getDataFailure = createAction ("[Dashboard] Get Data Failure")

export const addToCart = createAction("[Dashboard] Add To Cart", props<{item:any}>())
export const deleteFromCart = createAction("[Dashboard] Delete From Cart", props<{item:any}>())

export const getJsonData = createAction("[Dashboard] Get Data from JSON")
export const getJsonDataSuccess = createAction("[Dashboard] Get Data Success", props<{data:any}>())

export const getLazyList = createAction("[LazyListComponent] Get Lazy List")
export const getLazyListSuccess = createAction("[LazyListComponent] Get Lazy List Success", props<{data:any}>())
  


