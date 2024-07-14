import React from 'react';
import Link from 'next/link';


export default function Home() {
    const weekTwo = "/week-2";
    const weekThree = "/week-3";
    const weekFour = "/week-4";
    const weekFive = "/week-5";
    const weekSix = "/week-6";
    const weekSeven = "/week-7";
    const weekEight = "/week-8";
    const weekTen = "/week-10";

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
                    <Link href={weekTen}>
                        <div className="block p-4 bg-blue-600 text-white text-lg rounded-lg text-center transition duration-300 ease-in-out hover:bg-blue-700">
                            Week-10
                        </div>
                    </Link>
                </div>
            </div>
      </main>
    );
  };
