import React, { useEffect, useState } from 'react'
import Navbar from '../common/components/Navbar'
import { useParams } from 'react-router-dom'

function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [activeIMG, setActiveIMG] = useState('');

    const getProductById = async () => {
        const response = await fetch(`http://localhost:5000/api/products/${id}`);
        if (response.ok) {
            const data = await response.json();
            const { product } = data;
            setProduct(product);
            setActiveIMG(product.gallery.length ? product.gallery[0] : '')
        }
        else {
            console.log(response.status)
            console.log(response.json())
        }
    }

    useEffect(() => {
        getProductById()
    }, [])

    return (
        <div className='md:px-20 lg:px-28'>
            <Navbar></Navbar>
            <div className="flex flex-col justify-start gap-14 lg:flex-row mt-[80px] ">
                <div className="flex lg:flex-col mx-14 lg:mx-0 order-2 lg:order-1 gap-[30px]">
                    {product.gallery && product.gallery.map((src) =>
                    (<div onClick={() => setActiveIMG(src)} className="border border-transparent hover:border-zinc-300 hover:shadow-xl hover:shadow-slate-600 w-[90px] h-[90px]">
                        <img
                            className="object-cover w-full h-full"
                            src={src}
                            alt="hehe"
                        />
                    </div>))}
                </div>
                <div className="flex justify-start px-4 order-1 lg:order-2 w-full max-w-[800px] h-[600px]">
                    <img
                        className="object-fill lg:object-cover w-full h-full"
                        src={activeIMG}
                        alt="product IMG"
                    />
                </div>
                <div className="flex flex-col mx-14 lg:mx-0 order-3">
                    <h1 className="text-3xl font-semibold">{product.brand}</h1>
                    <h2 className="text-3xl font-light">{product.title}</h2>
                    <div className="mt-10">
                        <p className="text-[18px] font-bold">SIZE:</p>
                        <div className="flex gap-3">
                            {product.size && product.size.map((size) =>
                            (<button className="border-[1.9px] border-zinc-900 py-2 w-[65px] hover:text-white hover:bg-black">
                                {size}
                            </button>))}
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="text-[18px] font-bold">COLOR:</p>
                        <div className="flex gap-3">
                            {product.colors && product.colors.map((color) =>
                            (<button className="w-[32px] h-[32px] border-2 hover:border-[#5ECE7B]" style={{ backgroundColor: color }}></button>))}
                        </div>
                    </div>
                    <div className="mt-10">
                        <p className="text-[18px] font-bold">PRICE:</p>
                        <p className="text-[18px] font-bold mt-3">
                            <span>$</span>{product.price}
                        </p>
                    </div>
                    <div className="mt-10">
                        <button className="bg-[#5ECE7B] text-white w-full max-w-[300px] py-4 font-medium">
                            ADD TO CART
                        </button>
                    </div>
                    <div className="mt-10">
                        <p className="w-full max-w-[300px] font-medium">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product

// brand
// :
// "Apple"
// category
// :
// "Tech"
// colors
// :
// (4) ['Natural', 'Blue', 'White', 'Black']
// createdAt
// :
// "2024-02-07T10:59:51.097Z"
// description
// :
// "Best phone we have ever made"
// gallery
// :
// (2) ['https://store.storeimages.cdn-apple.com/4982/as-im…d=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009283359', 'https://store.storeimages.cdn-apple.com/4982/as-im…US?wid=728&hei=666&fmt=png-alpha&.v=1693346851451']
// id
// :
// "65c362a7532d246ff111a4ae"
// inventory
// :
// 15
// price
// :
// 1199
// size
// :
// (2) ['256GB', '512GB']
// title
// :
// "iPhone 15 Pro Max"
// updatedAt
// :
// "2024-02-07T10:59:51.097Z"