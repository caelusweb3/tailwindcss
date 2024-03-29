"use client";
import Image from "next/image";
import Dice from "./dice";
import { use, useEffect, useState } from "react";
import Hook from "./hook";
interface DiceNumbers {
  id: number
  number: number
  isSelected: boolean

}

type DiceArray = Array<DiceNumbers>;

export default function Home() {

  const [diceNumbers, setDiceNumbers] = useState<DiceArray>(allDiceNumbers())
  const [win, setWin] = useState(false)

  // [1, 2, 3, 4, 5, 6, 1, 2, 3, 4]
  
  function allDiceNumbers() {
    const newDiceNumbers = [];
    for (let i = 0; i < 10; i++){
      newDiceNumbers.push(
        { 
        id: i, 
        number: Math.ceil(Math.random() * 6 ),
        isSelected: false
        }
        )
    }
    return newDiceNumbers;
  }

  console.log("diceNumbbers", diceNumbers)
  
  function reRoll(){
    console.log("reRoll")
    setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(die => die.isSelected ? die : {id: die.id, number: Math.ceil(Math.random() * 6 ), isSelected: die.isSelected } ))
  }

  function toggleSelected(event: any, id:any) {
    setDiceNumbers(prevDiceNumbers => prevDiceNumbers.map(die => die.id === id ? {...die, isSelected: !die.isSelected} : die))
  }


  function diceElements () {
    return diceNumbers.map(die => {
       return  <Dice key={die.id} id={die.id} number={die.number} isSelected={die.isSelected} toggle={toggleSelected} />
     })
   }

   function checkForWin() {
    console.log("checkForWin", diceNumbers)
    diceNumbers.forEach(die => {
        if(die.number !== diceNumbers[0].number){
          return false
        }
        else if(die.number === diceNumbers[0].number){
          if(die.isSelected === true){
            console.log("You win")
            setWin(true)
          }
        }
    })

   }

   useEffect(() => {
    checkForWin()
   },[diceNumbers]) // this is dependency array 

  return (
    <>
      <main className="bg-[#0B2434] min-h-screen flex justify-center">
        <div className="bg-[#F5F5F5] h-[320px] w-[320px] rounded-xl mt-8 flex flex-col">
          <h1 className="text-[#2B283A] text-center mt-8 font-bold text-[25px]">Tenzies</h1>
          <p className="text-[#4A4E74] text-xs font-thin text-center w-[60%] mx-auto leading-tight">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="grid grid-cols-5 gap-4 mt-4 mx-auto">
           {diceElements()}
           
           
           {/*  <Dice number={1} isSelected={true}/>
            <Dice number={5} isSelected={false} />
            <Dice number={2} isSelected={true} />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />
            <Dice />*/}
          </div>
          <button className="bg-[#5035FF] text-white font-bold text-2xl w-[95px] h-[40px] mx-auto mt-4 rounded-lg" onClick={() => reRoll()}>
            Roll {win ? "You won": "Yo did not win"}
          </button>
        </div>
        {/*<Hook /> counter app with useEffect hook*/}
      </main>
    </>
  );
}
