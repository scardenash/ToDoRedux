import React, { useEffect } from 'react';

///Classes
import TodoItem from './TodoItem';

// Styles
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

// Redux
import { useStoreState, useStoreActions } from 'easy-peasy';

const Todos = () => {
  ///Get Todos
  const todos = useStoreState((state) => state.todos);
  const fetchTodos = useStoreActions((actions) => actions.fetchTodos);

  ///Simulate Did Mount
  //Activate only once.
  useEffect(() => {
    fetchTodos();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography color='secondary' variant='h3' align='center'>
        ToDo's List
      </Typography>
      <LineSeparator />
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

export default Todos;

//Stlyes
const LineSeparator = styled.hr`
  border: red 1px solid;
  margin-bottom: 0.5rem;
`;
