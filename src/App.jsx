import { Section, Container, Header, Text, TodoList } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'reduxTodo/todos/operations';
import {
  selectError,
  selectLoading,
  selectTodos,
} from 'reduxTodo/todos/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {error && <Text textAlign="center">Something went wrong!</Text>}
          {loading && <Text textAlign="center">Loading...</Text>}
          {!todos.length ? (
            <Text textAlign="center">Create your first todo😉</Text>
          ) : (
            <TodoList />
          )}
        </Container>
      </Section>
    </>
  );
};
