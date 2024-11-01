import React from 'react';
import Mine from "../assets/icons/Mine";
import Friends from "../assets/icons/Friends";
import Coins from "../assets/icons/Coins";
import { Link } from "react-router-dom";
import binanceLogo from "../assets/images/binance-logo.png";
import lovecoin from "../assets/images/lovecoin.png";

const earn = () => {
  return (
    <div className='fixed w-full bg-hero bg-contain text-white  min-h-screen px-6 py-3'>
       {/* Bottom Navbar */}
       <div className=" fixed bottom-5 left-1/2 max-w-xl bg-[#f046af00] flex justify-around items-center z-50 rounded-2xl w-[calc(100%-2rem)] transform -translate-x-1/2 text-sm font-lato p-3">
                    <div className="hover:bg-[#30bcf3e1]">
                        <img
                        src={binanceLogo}
                        alt="Exchange"
                        className="w-8 h-8 mx-auto"
                        />
                        <p className="mt-1">Exchange</p>
                    </div>
                    <Link className="text-center w-1/5" to="/">
                        <Mine className="w-8 h-8 mx-auto pb-1 text-gray-500" />
                        Mine
                    </Link>
                    <Link className="text-center w-1/5" to="/friends">
                        <Friends className="w-8 h-8 mx-auto pb-1 text-gray-500" />
                        Friends
                    </Link>
                    <Link className="text-center w-1/5" to="/earn">
                        <Coins className="w-8 h-8 mx-auto pb-1 text-gray-500" />
                        Earn
                    </Link>
                    <Link className="text-center  w-1/5 " to="/airdrop">
                        <img
                        src={lovecoin}
                        alt="Exchange"
                        className="w-10 h-10 mx-auto"
                        />
                        <p className="mt-1">AirDrop</p>
                    </Link>
                    </div>
    </div>
  )
}

export default earn