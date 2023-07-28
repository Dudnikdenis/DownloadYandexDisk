import React, {useEffect} from "react";
import { Link,useLocation } from "react-router-dom";
import cs from './resourceDisk.module.css'

const ResourceDisk = (props) =>{

    const location = useLocation()
    const { from } = location.state

    useEffect(()=>{
        props.getResourceDisk(from);
    },[from])

    return(
        <div className={cs.li_disk}>
            <Link to={'/'}>Назад</Link>
            <li >
                {props.resourceDisk.resourceDisk.map(r=>r.type==="dir"? 
                <ul>
                    <Link to = {"/resource"} state={{ from: r.path }}>{r.name}</Link> 
                </ul>:
                <ul>
                    <a href={r.file}>{r.name}</a>
                </ul>)}
            </li>
        </div>
        
    )
};


export default ResourceDisk;