import React, {useContext, Fragment} from 'react';
import {Link} from "react-router-dom"
import {DataContext} from '../App';
import './AllEmployee.css';

function Details({data}){
    return <>
        {data.map((item)=>{

            return <Fragment key={item.mobile}>
                <tr>
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
        <table className="table table-hover">
            <tbody>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
            </tr>
            <Details data={info.data}/>
            </tbody>
        </table>
        </div>
    )
}

export default AllEmployee
