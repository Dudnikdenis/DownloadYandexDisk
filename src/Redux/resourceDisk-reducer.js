import { diskAPI } from "../API/api";

const SET_RESOURCE_DISK = "SET_RESOURCE_DISK";
const DELITE_RESOURCE_DISK = "DELITE_RESOURCE_DISK"

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
            
        case DELITE_RESOURCE_DISK: 
            return{
                ...state,
                resourceDisk: []
            }; 
        default:
            return state;    
    }
}
export const setResourceDiskCreator=(resourceDisk)=> ({type: SET_RESOURCE_DISK, resourceDisk});
export const deliteResourceDiskCreator=(i)=> ({type: DELITE_RESOURCE_DISK,i});


export const getResourceDisk = (path) => { 
    return (dispatch) => {
        dispatch(deliteResourceDiskCreator());
        diskAPI.GetResources(path).then(response => {
        dispatch (setResourceDiskCreator(response))
      });
    };
};
export default resourceDiskReducer;