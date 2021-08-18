import React from 'react'
import {Link} from "react-router-dom"
import {IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
function Header({showhide, setShowHide}) {
    return (
        <div className="header">
            <div className="header-left">
                <IconButton onClick={()=>setShowHide(prev=>!prev)}>
                    <MenuIcon style={{color:"white"}}/>
                </IconButton>
                Employee Hierarchy
            </div>
            <div className="header-right">
                <button><Link to="/modify/" className="link">Employee Management</Link></button>
                <button><Link to="/" className="link">Home</Link></button>
            </div>

        </div>
    )
}

export default Header;
