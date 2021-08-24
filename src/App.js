import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getChart } from './redux/actions';
import Inicio from './pages/Inicio';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChart());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" component={ Inicio } />
    </Switch>
      
      // {/* <footer>
      // <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/1479458365" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
      // </footer> */}
  );
}

export default App;
