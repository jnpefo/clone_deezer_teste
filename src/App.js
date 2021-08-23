import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getChart } from './redux/actions';
import styled from 'styled-components';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChart());
  }, [dispatch]);

  const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

Button.defaultProps = {
  theme: {
    main: "red"
  }
}
  return (
    <div>
      <h1>Clone Deezer - jnpefo</h1>
      <Button>Normal</Button>
      <Button>Themed</Button>
      {/* <footer>
      <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/1479458365" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
      </footer> */}
    </div>
  );
}

export default App;
