import React from 'react'
import {IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
function Header({showhide, setShowHide}) {
    return (
        <div className="header">
            <IconButton onClick={()=>setShowHide(prev=>!prev)}>
                <MenuIcon style={{color:"white"}}/>
            </IconButton>
            Employee Hierarchy
        </div>
    )
}

export default Header;
