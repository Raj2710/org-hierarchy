import React from 'react'
import {Route, Switch} from 'react-router-dom';
import ModifySideBar from './ModifySideBar'
import AddTeamMember from './AddTeamMember'
import ChangeTeam from './ChangeTeam'
import CreateTeam from './CreateTeam'
import SearchEmployee from './SearchEmployee'
import UpdateEmployee from './UpdateEmployee'
import AllEmployee from './AllEmployee';
import './Modify.css';
function Modify({showhide}) {
    return (
            <div className="modify-container">
                {showhide?<div className="modify-sidebar-wrapper">
                    <ModifySideBar/>
                </div>:<></>}
                <div className={`modify-main-wrapper ${!showhide?` main-width`:""}`}>
                    <>
                        <Switch>
                            <Route path ='/modify/add-team-member' component={AddTeamMember}/>
                            <Route path ='/modify/change-team' component={ChangeTeam}/>
                            <Route path ='/modify/create-team' component={CreateTeam}/>
                            <Route path ='/modify/search-employee' component={SearchEmployee}/>
                            <Route path ='/modify/update-employee' component={UpdateEmployee}/>
                            <Route path = '/' component={AllEmployee}/>
                        </Switch>
                    </>
                </div>
            </div>
    )
}

export default Modify
