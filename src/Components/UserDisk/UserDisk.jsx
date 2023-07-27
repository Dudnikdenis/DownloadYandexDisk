import React, {useEffect, useState} from "react";

const UserDisk = (props) =>{

    let [fileName,setFile] = useState("");
  let [dir,setDir] = useState([]);
  let [disk,setDisk] = useState({});

  useEffect(()=>{
    
  },[])
  
    return (
        <div>
            {Object.keys(props.userDiskdisk).map(key => <a href={props.userDiskdisk[key]} key={key}>{props.userDiskdisk[key]}</a>)}
        </div>
    )
};

export default UserDisk;