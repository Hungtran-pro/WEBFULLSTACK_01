import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Main";
import Pokemon from "./Pokemon";
import UploadPost from "./UploadPost";

export default function Navigation() {
  const [post, setPost] = useState([]);

  const addList = (item) => {
    
    setPost([ ...post,item]);
  };

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" render={()=>
          <Main post={post} />}
        />
        <Route>
          <Pokemon path="/pokemon" />
        </Route>
        <Route path="/uploadPost" render={()=>
          <UploadPost addList={addList} />}
        />
      </Switch>
    </Router>
  );
}
