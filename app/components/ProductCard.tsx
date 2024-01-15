"use client";
import React, { useState } from "react";
import AddToCart from "./AddToCart";
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  ssr: false, // to disable pre-rendering on the server
  loading: () => <p>Loading component...</p>,
});

const sortWithLodash = async () => {
  const _ = (await import("lodash")).default;
  const users = [{ name: "c" }, { name: "a" }, { name: "b" }];
  const sorted = _.orderBy(users, ["name"]);
  console.log(sorted);
};

const ProductCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <AddToCart
        setIsVisible={() => setIsVisible(true)}
        showSortedArray={sortWithLodash}
      />
      {isVisible && <HeavyComponent />}
    </div>
  );
};

export default ProductCard;
