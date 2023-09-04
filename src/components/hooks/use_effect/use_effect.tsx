import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const APICall = () => {
  const [json, setJson] = useState<Todo | null>(null);

  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();

    setJson(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Title: {json?.title}</h2>
      <p>User id: {json?.userId}</p>
      <p>Id: {json?.id}</p>
      <p>Completed: {JSON.stringify(json?.completed)}</p>
    </>
  );
};
