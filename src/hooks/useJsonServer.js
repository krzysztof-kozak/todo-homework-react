import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/todos';
const defaultTodo = { title: '', description: '' };

export default function useJsonServer() {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function post(payload) {
    axios.post('/', payload).then((json) => setTodos([...todos, json.data]));
  }

  function put(payload) {
    const id = payload.id;
    const url = `/${id}`;

    axios.put(url, payload).then((json) => {
      const nextTodos = todos.map((todo) => {
        if (todo.id === id) {
          return json.data;
        }
        return todo;
      });
      setTodos(nextTodos);
    });
  }

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    axios
      .get()
      .then((json) => {
        if (!ignore) {
          setTodos(json.data);
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
    return () => {
      ignore = true;
    };
  }, []);

  return [todos, error, loading, post, put];
}
