import React, {useEffect} from "react";
import { useParams, Link } from "react-router-dom";


const ResourceDisk = (props) =>{

    const {path} = useParams(); //используется вместо withRouter
    const athResource = props.userDisk.userDisk[path];
    console.log(props.resourceDisk.resourceDisk);
    useEffect(()=>{
        props.getResourceDisk(athResource);
    },[])

    return(
        <div>
            <Link to={'/'}>Назад</Link>
            {props.resourceDisk.resourceDisk.map(r=>
                <div>
                    {r.name}
                </div>)}
        </div>
    )
};


export default ResourceDisk;