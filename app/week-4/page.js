'use client';

import React from "react";
import NewItem from "./new-item"
import Link from "next/link";

const Page = () => {
    return (
      <div>
        <NewItem />
        <Link href="/">Back</Link>
      </div>
      
    );
  };
  
  export default Page;