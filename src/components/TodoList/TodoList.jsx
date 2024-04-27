import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todos/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <>
      {!todos.length ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {todos.map((todo, index) => (
            <GridItem key={todo.id}>
              {' '}
              <Todo {...todo} counter={index + 1} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};
