
function TodoCounter({total, completed}) {
  return (
    <h1 style={{
      textAlign: 'center'
    }}>
      Has completado {completed} de {total} TODOS
    </h1>
  );
}

export { TodoCounter };
