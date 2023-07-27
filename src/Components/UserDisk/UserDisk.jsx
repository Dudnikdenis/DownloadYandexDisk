import React, {useEffect, useState} from "react";
import cs from './userDisk.module.css';
import { Link } from "react-router-dom";

const UserDisk = (props) =>{

  useEffect(()=>{
    props.getUserDisk();
    
  },[])
  
    return (
        <li className={cs.user_disk}>
            {Object.keys(props.userDisk.userDisk).map(key => 
            <ul>
              <Link className={cs.userLink} to={"/resource/"+key}>{props.userDisk.userDisk[key]}</Link>
            </ul>
            )}
        </li>
    )
};

export default UserDisk;