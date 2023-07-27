import { diskAPI } from "../API/api";

const SET_USER_DISK = "SET_USER_DISK";

let initialState = {
    userDisk: {}
};
 const userDiskReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_USER_DISK: 
            if(state.assortBlock.length===0 || state.assortBlock.toString() !== action.assortBlock.toString())
            {
                return{
                    ...state,
                    assortBlock: [...state.assortBlock, ...action.assortBlock]
                };
            }
            else return{...state};  
        default:
            return state;    
    }
}
export const setUserDisk=(UserDisk)=> ({type: SET_USER_DISK, UserDisk});


export const getUserDisk = () => {   // Thunk
    return (dispatch) => {
        diskAPI.GetDisk().then(response => {
        dispatch (setUserDisk(response.UserDisk))
      });
    };
};
export default userDiskReducer;