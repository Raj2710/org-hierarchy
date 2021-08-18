import React ,{useState} from 'react'
import {Link} from 'react-router-dom';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SearchIcon from '@material-ui/icons/Search';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
function ModifySideBar() {
    let [l1,setl1]=useState(true);
    let [l2,setl2]=useState(false);
    let [l3,setl3]=useState(false);
    let [l4,setl4]=useState(false);
    let [l5,setl5]=useState(false);
    return (
        <div className='side-bar-wrapper'>
            <ul>
                <li className={l1?`list active`:`list`} onClick={()=>{setl1(true);setl2(false);setl3(false);setl4(false);setl5(false)}}><SupervisorAccountIcon/><Link to='/modify/' className='link'>All Employees</Link></li>
                <li className={l2?`list active`:`list`} onClick={()=>{setl1(false);setl2(true);setl3(false);setl4(false);setl5(false)}}><PersonAddIcon/><Link to='/modify/add-team-member' className='link'>Add Team Member</Link></li>
                <li className={l3?`list active`:`list`} onClick={()=>{setl1(false);setl2(false);setl3(true);setl4(false);setl5(false)}}><GroupAddIcon/><Link to='/modify/create-team' className='link'>Create Team</Link></li>
                <li className={l4?`list active`:`list`} onClick={()=>{setl1(false);setl2(false);setl3(false);setl4(true);setl5(false)}}><SearchIcon/><Link to='/modify/search-employee' className='link'>Search Employee</Link></li>
                <li className={l5?`list active`:`list`} onClick={()=>{setl1(false);setl2(false);setl3(false);setl4(false);setl5(true)}}><TransferWithinAStationIcon/><Link to='/modify/update-employee' className='link'>Update Employee</Link></li>
            </ul>
        </div>
    )
}

export default ModifySideBar