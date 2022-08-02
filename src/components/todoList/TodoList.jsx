import { useSelector } from 'react-redux';
import { selectTodos } from '../todoItem/todosSlice';
import { TodoItem } from '../index';

export default function TodoList() {
  const todos = useSelector(selectTodos);
  return (
    <div className="mt-16 grid grid-cols-ram place-content-center gap-8">
      {todos.map((todo, index) => {
        /*
            this feels really bad to write,  but it seems like something is broken
            with tailwindcss & react when it comes to animation delay...

            for example, the following doesn't work:
            let animationDelay = `[animation-delay:${index * 500}ms]`
            */
        let animationDelay = '';
        if (index === 0) {
          animationDelay = '[animation-delay:0ms]';
        }

        if (index === 1) {
          animationDelay = '[animation-delay:200ms]';
        }

        if (index === 2) {
          animationDelay = '[animation-delay:300ms]';
        }

        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
}
