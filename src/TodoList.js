import './TodoList.css'

function TodoList({children}) {
  return (
    <ul className='list-container'>
      {children}
    </ul>
  );
}

export { TodoList };

