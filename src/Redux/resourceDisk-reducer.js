import { diskAPI } from "../API/api";

const SET_RESOURCE_DISK = "SET_RESOURCE_DISK";

let initialState = {
    resourceDisk: []
};
 const resourceDiskReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_RESOURCE_DISK: 
                return{
                    ...state,
                    resourceDisk: [...state.resourceDisk, ...action.resourceDisk]
                }; 
        default:
            return state;    
    }
}
export const setResourceDisk=(resourceDisk)=> ({type: SET_RESOURCE_DISK, resourceDisk});


export const getResourceDisk = (path) => {   // Thunk
    return (dispatch) => {
        diskAPI.GetResources(path).then(response => {
        dispatch (setResourceDisk(response))
      });
    };
};
export default resourceDiskReducer;