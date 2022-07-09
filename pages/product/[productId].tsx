// React
import React, { useState, useEffect } from "react";

// NextJS
import { useRouter } from "next/router";
import Image from "next/image";

function ProductId() {
  const [product, setProduct] = useState<TProductAttributes | null>(null);

  const {
    query: { productId },
  } = useRouter();

  useEffect(() => {
    window
      .fetch(`/api/avo/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error);
  }, [productId]);

  return (
    <div>
      <h1>{product?.name}</h1>
      <img width={60} height={60} src={product?.image} alt={product?.name} />
      <strong>{product?.price}</strong>
    </div>
  );
}

export default ProductId;
