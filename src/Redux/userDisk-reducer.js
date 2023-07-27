import { diskAPI } from "../API/api";

const SET_USER_DISK = "SET_USER_DISK";

let initialState = {
    userDisk: {}
};
 const userDiskReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_USER_DISK: 
                return{
                    ...state,
                    userDisk: {...state.userDisk, ...action.userDisk}
                }; 
        default:
            return state;    
    }
}
export const setUserDisk=(userDisk)=> ({type: SET_USER_DISK, userDisk});


export const getUserDisk = () => {   // Thunk
    return (dispatch) => {
        diskAPI.GetDisk().then(response => {
        dispatch (setUserDisk(response))
      });
    };
};
export default userDiskReducer;