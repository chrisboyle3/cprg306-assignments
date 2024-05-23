import React from 'react';
import Link from 'next/link';

export default function Home() {
    const weekTwo = "http://localhost:3000/week-2";
    const weekThree = "http://localhost:3000/week-3";

    return (
      <main>
        <div className="text-4xl m-6 text-center">
            CPRG 306: Web Development 2 - Assignments
        </div>
        <div className="text-lg mx-5">
        <Link href={weekTwo}>Week-2</Link>
        </div>
        <div className="text-lg mx-5">
        <Link href={weekThree}>Week-3</Link>
        </div>
      </main>
    );
  }
