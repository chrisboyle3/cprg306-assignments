import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <main className="flex w-1/4 justify-between items-center p-4 border rounded-lg">
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-yellow-600">{category}</p>
      </div>
      <span className="text-lg font-bold">{quantity}</span>
    </main>
  );
};

export default Item;