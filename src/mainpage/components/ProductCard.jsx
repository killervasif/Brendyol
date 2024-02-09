import React, { useContext } from 'react'
import CartIcon from "../../assets/Cart_white.svg";
import { useNavigate } from 'react-router-dom';
import Context from '../../contexts/GlobalContext';

function ProductCard({ id, data }) {
    const { setOrders } = useContext(Context)
    const navigate = useNavigate()
    return (
        <div onDoubleClick={() => navigate(`/product/${id}`)} className="flex w-full transition-shadow ease-in-out sm:max-w-[385px] group hover:shadow-2xl hover:shadow-slate-900 flex-col p-[16px]">
            <div className="w-full relative sm:max-w-[356px] h-[340px]">
                <img
                    className="object-cover w-full sm:max-w-[356px] h-[340px]"
                    src={data.gallery[0]}
                    alt="hehe"
                />
                <button onClick={()=>setOrders((prev)=>[...prev,data])} className="hidden group-hover:flex justify-center items-center border border-[#5ECE7B] bg-[#5ECE7B] rounded-full w-[50px] h-[50px] absolute right-5 -bottom-[25px]">
                    <img
                        className="w-[24px] h-[24px] mr-1"
                        src={CartIcon}
                        alt="cart_white"
                    />
                </button>
            </div>
            <p className="font-light mt-[24px] mr-1">{data.title}</p>
            <p className="font-semibold">
                <span>$</span>{data.price}
            </p>
        </div>
    )
}

export default ProductCard