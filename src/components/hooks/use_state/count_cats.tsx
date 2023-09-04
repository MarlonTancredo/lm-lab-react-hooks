import { useState } from "react";

const catsArr: string[] = ["🐈"];

export function CountCats() {
  const [cats, setCats] = useState(catsArr);

  const incrementCats = () => {
    setCats([...cats, "🐈"]);
  };

  return (
    <>
      <h2>useState</h2>

      <p>{cats.length}</p>

      <button onClick={incrementCats}>There are ... cats 🥳</button>
    </>
  );
}
