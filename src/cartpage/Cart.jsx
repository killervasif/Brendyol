import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../common/components/Navbar'
import ProductInfo from './components/ProductInfo'
import Context from '../contexts/GlobalContext';
import { useCookieContext } from '../contexts/CookieContext';

function Cart() {
  const { cookies } = useCookieContext();
  const { orders, getOrders } = useContext(Context);
  const [productsInfo, setProductsInfo] = useState([])

  async function sendOrders() {
    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "PUT",
        body: JSON.stringify({ orderItems: orders }),
        headers:
        {
          "Content-type": "application/json",
          "Authorization": `Bearer ${cookies.accessToken}`
        }
      })
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
      else {
        console.log(response.status)
        console.log(response.json())
      }
    } catch (error) {
      console.log(error)
    }
  }

  // function calculateTotal() {
  //   let sum = 0;
  //   productsInfo.map((p) => sum += (p.price * p.quantity));
  //   return sum;
  // }

  return (
    <div className="md:px-20 lg:px-28">
        <Navbar></Navbar>
      <div className="mx-10 lg:mx-0">
        <h1 className="text-5xl font-semibold mt-[80px] mb-[40px]">CART</h1>
        <div className="border border-zinc-200 w-full mt-[75px]"></div>
        <div>
          {orders.length ? orders.map((product) => (<ProductInfo productsInfo={productsInfo} setProductsInfo={setProductsInfo} key={product.id} data={product} />)) : null}
        </div>
        <div className="flex flex-col text-2xl font-light">
          <label>Tax 18%: <span className="ml-2 font-bold"><span>$</span>18.00</span></label>
          <label>Quantity: <span className="ml-2 font-bold">{orders.length}</span></label>
          <label>Total: <span className="ml-2 font-bold"><span>$</span>100</span></label>
        </div>
        <button onClick={() => sendOrders()} className="bg-[#5ECE7B] my-9 text-white w-full max-w-[300px] py-4 font-medium">
          ORDER
        </button>
      </div>
    </div>
  )
}

export default Cart