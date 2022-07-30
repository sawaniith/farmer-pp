export const initialState = 0;

export const reducer = (state,action)=>{
    if(action.type === "PARTNER"){
        return action.payload;
    }
   return state;
}