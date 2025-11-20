'use client';
import Link from 'next/link';
import { useProducts } from '@/context/ProductContent';

export default function Cart() {
  const { cart } = useProducts();
  const numProducts = Object.keys(cart).reduce((acc, curr, currIndex) => {
    // const numProduct = cart[curr]; // cart内のcurrキーの値 = 個数
    const numProduct = cart[curr].quantity; // cart内のcurrキーのquantity値
    const sum = acc + numProduct;
    return sum;
  }, 0);

  return (
    <div>
      <Link className="unstyled-button" href={'/cart'}>
        <i className="fa-solid fa-bag-shopping"></i>
        {numProducts > 0 && (
          <div className="cart-num">
            <p>{numProducts}</p>
          </div>
        )}
      </Link>
    </div>
  );
}
