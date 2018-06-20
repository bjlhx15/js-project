import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import IndexPage2 from './routes/IndexPage2';
import Products from './routes/Products';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        <Route path="a" exact component={IndexPage2}/>
        {/*访问地址：localhost:8000/#/prodcuts*/}
        <Route path="/products" exact component={Products}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
