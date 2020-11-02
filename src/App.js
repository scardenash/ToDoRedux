import React from 'react';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

//MaterialUI
import Container from '@material-ui/core/Container';

//Main
import './App.css';

///Easy Peazy
import model from './model';
import { StoreProvider, createStore } from 'easy-peasy';

//Init Store
const store = createStore(model);

//App
const App = () => {
  return (
    <StoreProvider store={store}>
      <Container maxWidth='sm' style={mainStyle}>
        <Todos />
        <AddTodo />
      </Container>
    </StoreProvider>
  );
};

export default App;

///Styling
const mainStyle = {
  boxShadow: '-3px 3px 5px rgba(104, 104, 104, 0.8)',
  marginTop: '1rem',
  paddingBottom: '1.5rem',
  paddingTop: '1rem',
  backgroundColor: '#fff',
};
