import { useMemo, useState, useEffect } from "react";
import lovecoin from "./assets/images/lovecoin.png";
import SkullImage from "./assets/images/Skull.png";
import binanceLogo from "./assets/images/binance-logo.png";
import heart from "./assets/images/Blue-heart.png";
import React from "react";
import Mine from "./assets/icons/Mine";
import Friends from "./assets/icons/Friends";
import Coins from "./assets/icons/Coins";


function App() {
  const levelNames = [
    "Bronze",
    "Silver",
    "Gold",
    "Platinum",
    "Diamond",
    "Epic",
    "Legendary",
    "Master",
    "GrandMaster",
    "Lord",
  ];

  const levelMinPoints = useMemo(
    () => [
      0, 5000, 25000, 100000, 1000000, 2000000, 10000000, 50000000, 100000000,
      1000000000,
    ],
    []
  );

  const [levelIndex, setLevelIndex] = useState(1);
  const [points, setPoints] = useState(0);
  const pointsToAdd = 1;
  const profitPerHour = 110000;
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const [energy, setEnergy] = useState(6500);
  const energyToReduce = 29;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (energy - energyToReduce < 0) {
      return;
    }
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints(points + pointsToAdd);
    setEnergy(energy - energyToReduce < 0 ? 0 : energy - energyToReduce);
    setClicks([...clicks, { id: Date.now(), x, y }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  const calculateProgress = () => {
    if (levelIndex >= levelNames.length - 1) {
      return 100;
    }
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    const progress =
      ((points - currentLevelMin) / (nextLevelMin - currentLevelMin)) * 100;
    return Math.min(progress, 100);
  };

  useEffect(() => {
    const currentLevelMin = levelMinPoints[levelIndex];
    const nextLevelMin = levelMinPoints[levelIndex + 1];
    if (points >= nextLevelMin && levelIndex < levelNames.length - 1) {
      setLevelIndex(levelIndex + 1);
    } else if (points < currentLevelMin && levelIndex > 0) {
      setLevelIndex(levelIndex - 1);
    }
  }, [points, levelIndex, levelMinPoints, levelNames.length]);

  return (
    <div className="bg-sky-200 text-black  min-h-screen px-6 py-3">
      <div className="w-full  z-10 min-h-screen flex flex-col items-center text-red-500">
        <div className="fixed top-0 left-0 w-full px-4 pt-8 z-10 flex flex-col items-center text-black">
          ....
          <div className="w-full cursor-pointer text-center">
            <p className="text-2xl ">
              <svg
                width="40px"
                height="40px"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-28 pt-1"
              >
                <path
                  opacity="0.5"
                  d="M12 5.50098L14 7.5004"
                  stroke="#1C274C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z"
                  fill="#1C274C"
                />
              </svg>{" "}
              LoveCoin
            </p>

            <div
              id="Levels"
              className="flex items-center justify-between space-x-4 mt-10"
            >
              <div id="Progessbar" className=" flex items-center w-1/3">
                <div className="w-full">
                  <div className="flex justify-between">
                    <p className="text-sm"> {levelNames[levelIndex]} </p>
                    <p className="text-sm">
                      {" "}
                      {levelIndex + 1} <span className="text-gray-500">/</span>{" "}
                      {levelNames.length}
                    </p>
                  </div>

                  <div className="w-full h-2 bg-[#43433b]/[0.6] rounded-full">
                    <div
                      className="h-2 rounded-full"
                      style={{ width: `${calculateProgress()}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="Coin"
              className="mt-12 text-5xl font-bold flex flex-col items-center justify-center"
            >
              <div className="px-4 pt-2 flex items-center space-x-2">
                <img src={lovecoin} alt="lovecoin" width={50} height={40} />
                <span>{points.toLocaleString()}</span>
              </div>

              <div
                className="relative cursor-pointer pt-14"
                onClick={handleClick}
              >
                <img src={heart} alt="heart icon" width={250} height={100} />
              </div>
            </div>
          </div>
          {/* Bottom Feed */}
          <div className="fixed bottom-24 left-0 w-full px-6 py-4 z-10">
            <div className=" w-full flex justify-between gap-2">
              <div className="w-1/3 flex items-center justify-start max-w-32">
                <div className="flex items-center justify-center">
                  <img src={SkullImage} alt="Skull" width={60} height={60} />
                  <div>
                    <span className="font-bold text-2xl block">{energy}</span>
                    <span className="text-large opacity-75">/ 6500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navbar */}
            <div className=" fixed bottom-2 left-1/2 max-w-xl bg-[#30bcf391] flex justify-around items-center z-50 rounded-2xl w-[calc(100%-2rem)] transform -translate-x-1/2 text-sm">
              <div className="text-center  w-1/5 bg-[#2ca8da] m-2 p-2 rounded-2xl">
                <img
                  src={binanceLogo}
                  alt="Exchange"
                  className="w-8 h-8 mx-auto"
                />
                <p className="mt-1">Exchange</p>
              </div>
              <div className="text-center w-1/5">
                <Mine className="w-8 h-8 mx-auto pb-1 text-gray-500" />
                Mine
              </div>
              <div className="text-center w-1/5">
                <Friends className="w-8 h-8 mx-auto pb-1 text-gray-500" />
                Friends
              </div>
              <div className="text-center w-1/5">
                <Coins className="w-8 h-8 mx-auto pb-1 text-gray-500" />
                Earn
              </div>
              <div className="text-center  w-1/5 ">
                <img
                  src={lovecoin}
                  alt="Exchange"
                  className="w-10 h-10 mx-auto"
                />
                <p className="mt-1">AirDrop</p>
              </div>
            </div>
          </div>
          
          <div className="flex-grow flex items-center justify-center">
            <div className="relative mt-4" onClick={handleClick}>
              {clicks.map((click) => (
                <div
                  key={click.id}
                  className="absolute text-5xl font-bold"
                  style={{
                    top: `${click.y - 42}px`,
                    left: `${click.x - 28}px`,
                    animation: `float 1s ease-out`,
                  }}
                  onAnimationEnd={() => handleAnimationEnd(click.id)}
                >
                  {pointsToAdd}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
