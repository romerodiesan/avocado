// ReactJS
import { useEffect, useState } from "react";

// NextJS
import Image from 'next/image'

// Components
import NavbarComponent from "../components/Navbar";

function HomePage () {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch("/api/avo")
      .then(res => res.json())
      .then(({ data }) => setProductList(data))
      .catch(console.error)
  })

  return (
    <div>
      <NavbarComponent />
      <h1>Hello 🥑</h1>
      <ul>
        {
          productList.map(product => (
            <li key={product?.id}>
              {product?.name}
              <Image src={product?.image} alt={product?.name} />
            </li>

          ))
        }
      </ul>
    </div>
  );

};

export default HomePage;
