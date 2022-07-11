import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/todos/';

export default function useJsonServer() {
  const [todos, setTodos] = useState(null);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  function post(payload) {
    axios
      // change url to '/badRequest' to test error toast
      .post('/badRequest', payload)
      .then((json) => {
        setTodos([...todos, json.data]);
        setToast(true);
      })
      .catch((error) => setError(error.message));
  }

  function put(payload) {
    const id = payload.id;
    const url = `/${id}`;

    axios
      .put(url, payload)
      .then((json) => {
        const nextTodos = todos.map((todo) => {
          if (todo.id === id) {
            return json.data;
          }
          return { ...todo, editing: false };
        });
        setTodos(nextTodos);
      })
      .catch((error) => setError(error));
  }

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    axios
      .get()
      .then((json) => {
        if (!ignore) {
          setTimeout(() => setTodos(json.data), 500);
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setTimeout(() => setLoading(false), 500));
    return () => {
      ignore = true;
    };
  }, []);

  return [todos, error, toast, setToast, loading, post, put];
}
