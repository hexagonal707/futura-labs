import { useMemo, useState } from "react";

const UseMemo = () => {
  const [buttonOne, setButtonOne] = useState(0);
  const [buttonTwo, setButtonTwo] = useState(0);

  const even = useMemo(() => {
    for (let i = 1; i <= 2000000000; i++) {}
    return buttonOne % 2 === 0;
  }, [buttonOne]);

  return (
    <>
      <div>
        <h1>{even ? "Even" : "Odd"}</h1>
        <div>
          <h3>{buttonOne}</h3>
          <button onClick={() => setButtonOne(buttonOne + 1)}>Button 1</button>
        </div>

        <div>
          <h3>{buttonTwo}</h3>
          <button onClick={() => setButtonTwo(buttonTwo + 1)}>Button 1</button>
        </div>
      </div>
    </>
  );
};

export default UseMemo;
