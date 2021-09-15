import React from "react";
import easy from "./easy/Easy";
import medium from "./medium/Medium";
import {NavLink, Route} from "react-router-dom";
import styled from "styled-components";

const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 0.1rem;
  
  & > * {
    margin-bottom: 0.1rem;
  }
`

const ProblemSets: React.FC = () => {
  return (
    <div>
      <LinkList>
        {easy.map(it => <NavLink key={it.url} to={it.url}>{it.title}</NavLink>)}
        {medium.map(it => <NavLink key={it.url} to={it.url}>{it.title}</NavLink>)}
      </LinkList>
      <div>
        {easy.map(it => <Route key={it.url} path={it.url} render={() => <it.component/>}/>)}
        {medium.map(it => <Route key={it.url} path={it.url} render={() => <it.component/>}/>)}
      </div>
    </div>

  )
}

export default ProblemSets