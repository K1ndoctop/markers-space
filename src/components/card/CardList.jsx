import React from "react";

const CardList = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products.map((products) => (
          <ProductItem key={products.id} product={products} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
