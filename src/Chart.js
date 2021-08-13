import React, { Fragment } from "react";
import randomcolor from "randomcolor"
import {useState} from "react";
import d from "./data.json";
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
const Card = (props) => {
  const levelColor = randomcolor();
  let [collapse,setCollapse]=useState(false)
  let collapsee=false;
  let handleCollapse = ()=>{
      setCollapse(collapse=>!collapse)
      collapsee=!collapsee;
  }
  return (
    <ul>
      {props.data.map((item) => {

        return <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  src={item.image}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
              {item.children?<button onClick={handleCollapse} className={collapse?"collapseBtn Btn":"expandBtn Btn"}>{collapse?<RemoveRoundedIcon/>:<AddRoundedIcon/>}</button>:""}
            </div>
            {item.children?collapse?<Card data={item.children}/>:"":""}
          </li>
        </Fragment>
      })}
    </ul>
  );
};

const Chart = () => {
  let [data]=useState(d);
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;