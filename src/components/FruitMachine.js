import React, { useState } from "react";

const FruitMachine = () => {
    const [result, setResult] = useState(null);
    const API_BASE_URL = "http://localhost:8080/api/game/play";

    const handlePlay = async () => {
        const response = await fetch(API_BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ money: 100 }), // Fixed amount of money for the player
        });
      
        const data = await response.json();
        setResult(data);
      };
      

      return (
        <div>
          {result && (
            <>
              <div>
                Slots: {result.slots.map((color) => <span>{color} </span>)}
              </div>
              <div>Remaining money: {result.remainingMoney}</div>
              {result.isJackpot ? (
                <div className="text-green-500">You won the jackpot!</div>
              ) : (
                <div className="text-red-500">You lost this round.</div>
              )}
            </>
          )}
          <button onClick={handlePlay}>Play</button>
        </div>
      );
      
};

export default FruitMachine;
