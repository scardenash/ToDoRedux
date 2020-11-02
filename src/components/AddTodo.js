import React, { useState } from 'react';

// Utils
import { validateString } from '../utils/Utils';

// Styling
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Redux
import { useStoreActions, useStoreState } from 'easy-peasy';

const AddTodo = () => {
  // Redux Actions
  const todosLength = useStoreState((state) => state.todos.length);
  const add = useStoreActions((actions) => actions.add);

  // Form on Submit
  const [todoToAdd, setTodoToAdd] = useState('');
  const [isError, setIsError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    ///Add new todo
    //Show error if null or empty
    if (!validateString(todoToAdd)) {
      const newTodo = {
        id: todosLength + 1,
        title: todoToAdd,
        completed: false,
      };

      setIsError(false);
      add(newTodo);

      setTodoToAdd('');
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <AddTodoForm onSubmit={onSubmit}>
        <TextField
          variant='outlined'
          margin='normal'
          fullWidth
          label='Add a ToDo...'
          autoFocus
          error={isError}
          value={todoToAdd}
          onChange={(e) => setTodoToAdd(e.target.value)}
        />
        <Button type='submit' fullWidth variant='contained' color='primary'>
          Add ToDo
        </Button>
      </AddTodoForm>
    </>
  );
};

export default AddTodo;

// Styles
const AddTodoForm = styled.form`
  display: flex;
  flex-direction: column;
`;
