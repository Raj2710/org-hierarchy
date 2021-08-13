import React, { Fragment } from "react";
import randomcolor from "randomcolor"
import faker from "faker"
import {useState} from "react";
import data from "./data.json";

const Card = (props) => {
  const levelColor = randomcolor();
  let [collapse,setCollapse]=useState(true);
  let handleCollapse = ()=>{
    setCollapse(e=>!e);
  }
  return (
    <ul>
      {props.data.map((item) => {


        return <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  src={faker.image.avatar()}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
              <button onClick={handleCollapse}>Show/Hide</button>
            </div>
            {item.children?!collapse?<Card data={item.children}/>:"":""}
          </li>
        </Fragment>
      })}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;