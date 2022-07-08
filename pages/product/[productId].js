import { useRouter } from "next/router";

function ProductId() {
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      <h1>Product {productId}</h1>
    </div>
  );
}

export default ProductId;
