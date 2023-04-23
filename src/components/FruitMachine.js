import React, { useState } from "react";
import classNames from "classnames";

const FruitMachine = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePlay = async () => {
    if (result && result.remainingMoney === 0) {
      alert("You have no remaining money to play.");
      return;
    }
  
    setLoading(true);
    const response = await fetch("http://localhost:8080/api/game/play", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ money: result ? result.remainingMoney : 100 }),
    });
  
    const data = await response.json();
    console.log(data);
    setResult(data);
    setLoading(false);
  };
  

  const renderResultMessage = () => {
  if (!result) {
    return null;
  }

  if (result.jackpot) {
    return (
      <div className="font-bold text-green-500">
        You won the jackpot!
      </div>
    );
  } else {
    return (
      <div className="font-bold text-red-500">
        You lost this round.
      </div>
    );
  }
};

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-500 to-purple-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Virtual Fruit Machine</h1>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {result &&
            result.slots.map((color, index) => (
              <div
                key={index}
                className={classNames(
                  "h-20 w-20 flex items-center justify-center rounded-lg text-white font-bold text-2xl",
                  {
                    "bg-red-600": color === "red",
                    "bg-blue-600": color === "blue",
                    "bg-green-600": color === "green",
                    "bg-yellow-400": color === "yellow",
                  }
                )}
              >
                {color[0].toUpperCase()}
              </div>
            ))}
        </div>
        <div className="flex justify-between mb-2">
          <div>
            Remaining money:{" "}
            <span className="font-bold">
              {result ? result.remainingMoney : 100}
            </span>
          </div>
          {renderResultMessage()}
        </div>
  
        <button
          onClick={handlePlay}
          disabled={loading}
          className={classNames(
            "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
            { "opacity-50 cursor-not-allowed": loading }
          )}
        >
          {loading ? "Spinning..." : "Play"}
        </button>
      </div>
    </div>
  );
  
    
  };

  export default FruitMachine;
