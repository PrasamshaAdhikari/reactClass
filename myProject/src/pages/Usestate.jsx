import { useState } from "react";

function UseState() {
  // const returnData = useState("Prasu")
  // const returndigit = useState(0)

  const [counter, setCounter] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <div
        className="h-screen bg-cover"
        style={{ backgroundImage: "url('./image.png')" }}
      >
        {/* <h1>{counter}</h1>
        <button onClick={increaseCounter}>+</button>
        <button onClick={decreaseCounter}>-</button> */}
        <br />
        <br />

        <h1 className="text-2xl text-white font-extrabold bg-blue-800 p-2 rounded-md w-fit mx-auto">
          {counter === 0 ? "Count starts from" : "Present count is"}
        </h1>

        <br />
        <h1 className="text-8xl font-bold text-center">{counter}</h1>

        <br />
        <br />
        <br />
        <br />

        <div className="max-w-lg mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row md:mt-8 lg:mt-10">
          <button
            onClick={increaseCounter}
            className="w-full sm:w-auto border border-green-600 focus:outline-none bg-green-500 text-white px-4 py-2 font-bold uppercase text-sm rounded-md hover:bg-green-700 transition-colors"
          >
            Increase Count(+)
          </button>
        </div>

        <div className="max-w-lg mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row md:mt-8 lg:mt-10">
          <button
            onClick={decreaseCounter}
            className="w-full sm:w-auto border border-green-600 focus:outline-none bg-red-500 text-white px-4 py-2 font-bold uppercase text-sm rounded-md hover:bg-red-700 transition-colors"
          >
            Decrease Count(-)
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseState
