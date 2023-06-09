import { type NextPage } from "next";

import Head from "next/head";
import { getRandomHex } from "./helper/hexHelper";
import { useEffect, useState } from "react";

const Home: NextPage = () => {

  const [hexValues, setHexValues] = useState<string[]>([])

  const [wrongButtonClick, setWrongButtonClick] = useState<boolean>(false)
  const [randomIndex] = useState<number>(Math.floor(Math.random() * hexValues.length))

  useEffect(() => {
    if (hexValues.length < 4) setHexValues((prev) => [...prev, getRandomHex()])
  }, [hexValues.length])
  console.log('randomIndex', randomIndex)

  const resetGame = () => {
    setHexValues([]) 
    setWrongButtonClick(false)
  };

  return (
    <>
      <Head>
        <title>Likkle Hex GameGuesser</title>
        <meta name="Guess the Hex Code" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <main style={{ backgroundColor: hexValues[randomIndex] }} className="h-screen">
      <div className="max-w-3xl mx-auto py-12" >
        <div className="w-full flex flex-col items-center">
          <p className="mb-3">{hexValues[randomIndex]}</p>

         {wrongButtonClick && <p className="text-md font-bold text-red-600 mb-2">Wrong option</p>}
          <div className="w-[15rem] grid grid-cols-2 gap-8">
            {hexValues.map((value, i) => (
              <button onClick={() => {
                if (i === randomIndex) resetGame(); else setWrongButtonClick(true);
              }} key={value} type="button" className="bg-blue-300 hover:bg-gray-400 | p-2 border-4 rounded-sm">{value}</button>
              ))}
          </div>
        </div>
      </div>
     </main>
    </>
  );
};

export default Home;
