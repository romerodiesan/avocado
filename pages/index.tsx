// ReactJS
import React, { Fragment, useEffect, useState } from "react";

// NextJS
import Image from "next/image";
import Link from "next/link";

// Components
import NavbarComponent from "../components/Navbar";

function HomePage () {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window.fetch("/api/avo")
      .then(res => res.json())
      .then(({ data }) => setProductList(data))
      .catch(console.error)
  }, [])

  return (
    <Fragment>
      <NavbarComponent />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-3 p-5">
        {
          productList.map(product => (
            <li className="container p-5 border border-green-700 grid hover:shadow-md hover:cursor-pointer" key={product?.id}>
              <figure>
                <Image width={100} height={100} src={product?.image} alt={product?.name} />
                <figcaption className="space-y-3">
                  <Link href={`/product/${product?.id}`}>
                    <a className="hover:text-green-900 hover:cursor-pointer hover:underline hover:underline-offset-2">{product?.name}</a>
                  </Link>

                  <hr />
                  
                  <section className="space-y-1 w-72 md:w-96">
                    <p className="truncate"><span className="font-semibold">Description: </span> {product?.attributes.description}</p>
                    <p className="truncate"><span className="font-semibold">Hardiness: </span> {product?.attributes.hardiness}</p>
                    <p className="truncate"><span className="font-semibold">Price: </span> {product?.price}</p>
                  </section>
                </figcaption>
              </figure>
            </li>
          ))
        }
      </ul>
    </Fragment>
  );

};

export default HomePage;
