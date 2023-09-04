import useTodo from "./useTodo";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const Todo = () => {
  const [data] = useTodo(url);

  return (
    <>
      <h2>Custom Hook</h2>
      <h3>{data}</h3>
    </>
  );
};
