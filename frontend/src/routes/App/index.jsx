import React from 'react';
import { Switch, Route } from 'react-router';
import Home from 'routes/Home';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default App;