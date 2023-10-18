import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodoCompleted } from '../store/todoSlice';

const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleTodoCompleted({ id }))}
            />
            <span>{text}</span>
            <span
                onClick={() => dispatch(removeTodo({ id }))}
                style={{ color: 'red', cursor: 'pointer' }}
            >
                &times;
            </span>
        </li>
    );
};

export default TodoItem;
