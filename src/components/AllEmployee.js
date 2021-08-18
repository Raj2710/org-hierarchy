import React, {useContext, Fragment} from 'react';
import {Link} from "react-router-dom"
import {DataContext} from '../App';
import './AllEmployee.css';

function Details({data}){
    return <>
        {data.map((item)=>{

            return <Fragment key={item.id}>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.role}</td>
                    <td>{item.mobile}</td>
                    <td>{item.email}</td>
                </tr>
                {item.children?<Details data={item.children}/>:<></>}
            </Fragment>
        })}
    </>

}



function AllEmployee() {
    let info = useContext(DataContext);
        console.log(info);

    return (
        <div className="all-emp-wrapper">
        <table>
            <tbody>
            <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Mobile</th>
                <th>Email</th>
            </tr>
            <Details data={info.data}/>
            </tbody>
        </table>
        </div>
    )
}

export default AllEmployee
