import React from 'react';
import Link from 'next/link';


export default function Home() {
    const weekTwo = "http://localhost:3000/week-2";
    const weekThree = "http://localhost:3000/week-3";
    const weekFour = "http://localhost:3000/week-4";
    const weekFive = "http://localhost:3000/week-5";
    const weekSix = "http://localhost:3000/week-6";

    return (
      <main>
        <div className="text-4xl m-6 text-center">
            CPRG 306: Web Development 2 - Assignments
        </div>
        <div style={{ marginLeft: '100px' }}>
          <div className="text-lg mx-5">
          <Link href={weekTwo}>Week-2</Link>
          </div>
          <div className="text-lg mx-5">
          <Link href={weekThree}>Week-3</Link>
          </div>
          <div className="text-lg mx-5">
          <Link href={weekFour}>Week-4</Link>
          </div>
          <div className="text-lg mx-5">
          <Link href={weekFive}>Week-5</Link>
          </div>
          <div className="text-lg mx-5">
          <Link href={weekSix}>Week-6</Link>
          </div>
        </div>
      </main>
    );
  };
