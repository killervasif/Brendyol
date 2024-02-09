import { Link, useNavigate } from "react-router-dom";
import LetterIcon from "../assets/Letter.svg";
import LockIcon from "../assets/Lock.svg";
import { useContext, useState } from "react";
import { useCookieContext } from "../contexts/CookieContext";

function Login() {
    const { setCookie, cookies } = useCookieContext()
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()
    const login = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                body: JSON.stringify(formData),
                headers:
                {
                    "Content-type": "application/json"
                }
            })

            if (response.ok) {
                const data = await response.json();
                const token = data.user.token;
                setCookie('accessToken', token, { path: '/' });
                console.log(data);
                navigate("/main")
            }
            else {
                console.log(response.status)
                console.log(response.json())
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevForm) => ({
            ...prevForm,
            [name]: value
        }))

        console.log(formData)
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        login();
    }
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h2 className="text-3xl font-bold">Hello Again!</h2>
            <p className="text-2xl mb-4">Welcome Back</p>
            <form className="flex flex-col items-center justify-center w-full max-w-[850px] mt-6 px-10" action="">
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                    <img
                        className="w-[24px] h-[24px] text-[#C2C2C2]"
                        src={LetterIcon}
                        alt="letterIcon"
                    />
                    <input onChange={(e) => handleChange(e)} name='email' className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Email Address' type="email" />
                </div>
                <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
                    <img
                        className="w-[24px] h-[24px] text-[#C2C2C2]"
                        src={LockIcon}
                        alt="letterIcon"
                    />
                    <input onChange={(e) => handleChange(e)} name='password' className=" px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Password' type="password" />
                </div>
                <div className="w-full flex col-span-2 justify-center">
                    <button onClick={(e) => handleLogin(e)} className="bg-green-400 w-full sm:max-w-[400px]  mt-4 text-white py-2 " type="submit">Login</button>
                </div>
            </form>
            <div className="text-teal-800 mt-3">
                <span>Don't have any account? </span>
                <Link to="/register" className="underline">Register</Link>
            </div>
        </div>
    )
}

export default Login