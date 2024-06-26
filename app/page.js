import React from 'react';
import Link from 'next/link';


export default function Home() {
    const weekTwo = "http://localhost:3000/week-2";
    const weekThree = "http://localhost:3000/week-3";
    const weekFour = "http://localhost:3000/week-4";
    const weekFive = "http://localhost:3000/week-5";
    const weekSix = "http://localhost:3000/week-6";
    const weekSeven = "http://localhost:3000/week-7";
    const weekEight = "http://localhost:3000/week-8";

    return (
      <main className="min-h-screen bg-black-100 flex flex-col items-center">
        <div className='text-4xl m-6 text-center font-bold text-blue-800'>
            CPRG 306: Web Development 2 - Assignments
        </div>
        <div className="w-full max-w-4xl mx-auto bg-black shadow-md rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href={weekTwo}>
                        <div className="block p-4 bg-blue-600 text-white text-lg rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-700">
                            Week-2
                        </div>
                    </Link>
                    <Link href={weekThree}>
                        <div className="block p-4 bg-blue-600 text-white text-lg rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-700">
                            Week-3
                        </div>
                    </Link>
                    <Link href={weekFour}>
                        <div className="block p-4 bg-blue-600 text-white text-lg rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-700">
                            Week-4
                        </div>
                    </Link>
                    <Link href={weekFive}>
                        <div className="block p-4 bg-blue-600 text-white text-lg rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-700">
                            Week-5
                        </div>
                    </Link>
                    <Link href={weekSix}>
                        <div className="block p-4 bg-blue-600 text-white text-lg rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-700">
                            Week-6
                        </div>
                    </Link>
                    <Link href={weekSeven}>
                        <div className="block p-4 bg-blue-600 text-white text-lg rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-700">
                            Week-7
                        </div>
                    </Link>
                    <Link href={weekEight}>
                        <div className="block p-4 bg-blue-600 text-white text-lg rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-700">
                            Week-8
                        </div>
                    </Link>
                </div>
            </div>
      </main>
    );
  };
