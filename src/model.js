import { action, thunk } from 'easy-peasy';

export default {
  // States
  todos: [],

  //   Thunks - Middleware
  fetchTodos: thunk(async (actions) => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    );
    const todos = await res.json();
    actions.setTodos(todos);
  }),

  //   Actions & Reducers
  setTodos: action((state, todos) => {
    state.todos = todos;
  }),
  toggle: action((state, id) => {
    state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter((filtered) => filtered.id !== id);
  }),
  add: action((state, todo) => {
    state.todos = [...state.todos, todo];
  }),
};
