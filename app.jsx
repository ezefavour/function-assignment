import React, { useState } from 'react';

const Game = () => {
  const [power, setPower] = useState(1000);
  const [coins, setCoins] = useState(19.91);

  const boostPower = () => {
    setPower((prev) => prev + 10);
    setCoins((prev) => parseFloat((prev + 0.1).toFixed(2)));
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-4">
      {/* Header */}
      <header className="flex justify-between items-center w-full max-w-md mb-6">
        <h1 className="text-lg font-bold">TapSwap</h1>
        <button className="bg-blue-500 px-4 py-2 rounded-md text-sm">
          Connect Wallet
        </button>
      </header>

      {/* Main Card */}
      <div className="bg-purple-800 p-6 rounded-lg shadow-lg text-center max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Legendary</h2>
        <div className="mb-4">
          <img
            src="https://via.placeholder.com/100"
            alt="Coin"
            className="mx-auto mb-4"
          />
          <p className="text-sm">Powered by Community</p>
        </div>
        <p className="text-xl font-bold mb-2">{coins}M</p>
        <p className="text-sm text-gray-300 mb-6">Coins</p>
        <div className="flex justify-center items-center space-x-4 mb-4">
          <span className="text-yellow-400 font-bold">⚡ {power}/1000</span>
          <button
            onClick={boostPower}
            className="bg-orange-500 px-4 py-2 rounded-md text-sm font-bold"
          >
            Boost
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed bottom-4 bg-gray-800 w-full max-w-md flex justify-around py-3 rounded-lg shadow-lg">
        {['Earn', 'Tasks', 'Town', 'Swap', 'Account', 'Drop'].map((item) => (
          <button key={item} className="text-sm">
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Game;