import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../common/components/Navbar'
import ProductCard from './components/ProductCard';
import { useCookieContext } from '../contexts/CookieContext';
import Context from '../contexts/GlobalContext';

function MainPage() {
    const { cookies } = useCookieContext();
    const { currentCategory, filteredProducts, filterProducts, getProducts, products } = useContext(Context)
    
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <div className="md:px-20 lg:px-28">

                <Navbar />
                <div className="px-6 ">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-light py-14 px-5">
                            {currentCategory}
                        </h1>
                    </div>
                    <div className="my-10 flex flex-col justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-[100px] sm:gap-x-[10px]">
                    {filteredProducts.length ? filteredProducts.map((product) => (<ProductCard key={product.id} id={product.id} data={product} />)) 
                        : products.length ? products.map((product) => (<ProductCard key={product.id} id={product.id} data={product} />)) 
                        : <p className='col-span-3 text-center font-bold'>No Products Found</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage