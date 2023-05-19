function TodoCounter({ total, completed, isLoading }) {
  return (
    <h1
      style={{
        textAlign: "center",
      }}
    >
      {isLoading
        ? "Bienvenido"
        : `Has completado ${completed} de ${total} TODOS`}
    </h1>
  );
}

export { TodoCounter };
