import { getData,getDataSuccess ,getDataFailure, addToCart, deleteFromCart} from "../actions/store.action";
import { createReducer,on } from "@ngrx/store";
import { binarySearch } from "./functions";





export const initialState:any = []

export const storeReducer = createReducer(
    initialState,
    on(getDataSuccess,(state,{data})=>{
        return [...data]}
        ) 
    )
 

export const cartState:any =[] 


export const cartReducer = createReducer(
    cartState,
    on(addToCart,(state,{item})=>{


    // for distinct add or remove to cart
        // return [...state,item]


    // for same and distinct add to cart or remove from cart   
      if(state.length == 0){
        return [...state,item]
      } else{
        let bool = false
        state = state.map((s:any) => {
            s = JSON.parse(JSON.stringify(s))
            if(s.id == item.id){
                s.quantity = s.quantity+1
                bool = true
                
            }
            return s
        })

        if(bool){
            return [...state]
        } else{
            return [...state,item]
        }
      }
    }),
    on(deleteFromCart,(state,{item})=>{
         // for same and distinct add to cart or remove from cart  
         if(state.length == 0){
            return [...state]
         } else{
            let bool = false
            state = state.map((s:any)=>{
                s = JSON.parse(JSON.stringify(s))
                if(s.id== item.id && s.quantity>=1){
                    bool = true
                   s.quantity = s.quantity -1
                }
                return s
            }).filter((s:any)=>s.quantity>0)
            
            if(bool==false){
                return [...state]
            }

            return [...state]

         }
           

        // for distinct add or remove to cart
        // if(state.length>0){
        //     return [...state.filter((data:any)=>data.id!=item.id)]
        // } else {
        //     return [...state]
        // }
        
    })
)