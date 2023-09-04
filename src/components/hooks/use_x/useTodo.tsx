import { useEffect, useState } from "react";
import { isError } from "../../../helpers/is_error";

interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useTodo = (url: string) => {
  const [data, setData] = useState<TodoResponse | undefined>(undefined);
  const [isFetching, setIsFetching] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      setIsFetching(false);
      if (response.status === 200) {
        const json = await response.json();
        setData(json);
      }
    } catch (e: unknown) {
      setIsFetching(false);

      console.log(isError(e) ? e.message : "Unknown error!");
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return isFetching ? "Fetching..." : [data?.title];
};

export default useTodo;
