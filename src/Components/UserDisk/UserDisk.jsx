import React, {useEffect, useState} from "react";

const UserDisk = (props) =>{

  useEffect(()=>{
    props.getUserDisk();
    
  },[])
  
    return (
        <div>
            {/* {Object.keys(props.userDiskdisk).map(key => <a href={props.userDiskdisk[key]} key={key}>{props.userDiskdisk[key]}</a>)} */}
        </div>
    )
};

export default UserDisk;