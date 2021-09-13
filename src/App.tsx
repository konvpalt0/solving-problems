import React from 'react';
import TwoSum from "./problem-sets/easy/two-sum/TwoSum";
import ReverseInteger from "./problem-sets/easy/reverse-integer/ReverseInteger";
import {NavLink, Route} from "react-router-dom";
import ContainerMostWater from "./problem-sets/medium/container-with-most-water/ContainerMostWater";

function App() {
  return (
    <div>
      <div>
        <div>
          <NavLink to={"/reverse-integer"}>Reverse Integer</NavLink>
          <br/>
          <NavLink to={"/two-sum"}>Two Sum</NavLink>
          <br/>
          <NavLink to={"/contain-most-water"}>Contain Most Water</NavLink>
        </div>
      </div>
      <Route path={"/maxArea-integer"}>
        <ReverseInteger/>
      </Route>
      <Route path={"/two-sum"}>
        <TwoSum/>
      </Route>
      <Route path={"/contain-most-water"}>
        <ContainerMostWater/>
      </Route>
    </div>
  );
}

export default App;
