import React from 'react';
import TwoSum from "./problem-sets/easy/two-sum/TwoSum";
import ReverseInteger from "./problem-sets/easy/reverse-integer/ReverseInteger";
import {NavLink, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <div>
          <NavLink to={"/reverse-integer"}>Reverse Integer</NavLink>
          <br/>
          <NavLink to={"/two-sum"}>Two Sum</NavLink>
        </div>
      </div>
      <Route path={"/reverse-integer"}>
        <ReverseInteger/>
      </Route>
      <Route path={"/two-sum"}>
        <TwoSum/>
      </Route>
    </div>
  );
}

export default App;
