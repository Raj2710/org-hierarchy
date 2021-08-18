import React,{useState} from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import "./styles.css";
import Chart from "./Chart";
import d from './data.json';
import Modify from './components/Modify'
import Header from './components/Header'
export const DataContext = React.createContext()
export default function App() {
  let [data,setData]=useState(d);
  let [showhide,setShowHide]=useState(true);
  let last = 131025;
  return (
    <DataContext.Provider value={{data,setData,last}}>
    <Router>
              <Header showhide={showhide} setShowHide={setShowHide}/>
              <Switch>
                  <Route path='/modify'>
                    <Modify showhide={showhide}/>
                  </Route>
                  <Route path='/'>
                    <Chart data={data} setData={setData}/>  
                  </Route>
              </Switch>
    </Router>
    </DataContext.Provider>
  );
}