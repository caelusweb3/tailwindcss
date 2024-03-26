import Image from "next/image";
import Dice from "./dice";

export default function Home() {
  return (
    <>
      <main className="bg-[#0B2434] min-h-screen flex justify-center">
        <div className="bg-[#F5F5F5] h-[320px] w-[320px] rounded-xl mt-8 flex flex-col">
          <h1 className="text-[#2B283A] text-center mt-8 font-bold text-[25px]">Tenzies</h1>
          <p className="text-[#4A4E74] text-xs font-thin text-center w-[60%] mx-auto leading-tight">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="grid grid-cols-5 gap-4 mt-4 mx-auto">
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
          </div>
          <button className="bg-[#5035FF] text-white font-bold text-2xl w-[95px] h-[40px] mx-auto mt-4 rounded-lg">
            Roll
          </button>
        </div>
      </main>
    </>
  );
}
