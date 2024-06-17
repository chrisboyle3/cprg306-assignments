import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';

const Page = () => {
  return (
    <main className="p-6  min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
      <Link href="/">Back</Link>
    </main>
  );
};

export default Page;
