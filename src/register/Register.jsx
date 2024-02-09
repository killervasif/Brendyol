import { Link, useNavigate } from "react-router-dom";
import LetterIcon from "../assets/Letter.svg";
import LockIcon from "../assets/Lock.svg";
import UserIcon from "../assets/User.svg";
import { useContext, useState } from "react";
import { useCookieContext } from "../contexts/CookieContext";

function Register() {
  const { setCookie, cookies } = useCookieContext()
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const register = async () => {
    try {
      console.log(formData)
      const response = await fetch("http://localhost:5000/api/auth/register", {
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
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value
    }))

    console.log(formData)
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    register();
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold">Hello Again!</h2>
      <p className="text-2xl">Welcome Back</p>
      <form className="flex flex-col items-center justify-center sm:grid grid-cols-2 sm:gap-4 w-full max-w-[850px] mt-6 px-10" action="">
        <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
          <img
            className="w-[24px] h-[24px] text-[#C2C2C2]"
            src={UserIcon}
            alt="letterIcon"
          />
          <input onChange={(e) => handleChange(e)} name='name' className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Name' type="text" required />
        </div>
        <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
          <img
            className="w-[24px] h-[24px] text-[#C2C2C2]"
            src={UserIcon}
            alt="letterIcon"
          />
          <input onChange={(e) => handleChange(e)} name='surname' className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Surname' type="text" required />
        </div>
        <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
          <img
            className="w-[24px] h-[24px] text-[#C2C2C2]"
            src={LetterIcon}
            alt="letterIcon"
          />
          <input onChange={(e) => handleChange(e)} name='email' className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Email Address' type="email" required />
        </div>
        <div className='flex items-center my-2 rounded-[30px] w-full sm:max-w-[400px] border border-zinc-100 h-fit px-3'>
          <img
            className="w-[24px] h-[24px] text-[#C2C2C2]"
            src={LockIcon}
            alt="letterIcon"
          />
          <input onChange={(e) => handleChange(e)} name='password' className="px-3 py-3 mx-1 h-full w-full outline-none" placeholder='Password' type="password" required />
        </div>
        <div className="w-full flex col-span-2 justify-center">
          <button onClick={(e) => handleRegister(e)} className="bg-green-400 w-full sm:max-w-[400px]  mt-4 text-white py-2 " type="submit">Register</button>
        </div>
      </form>
      <div className="text-teal-800 mt-3">
        <span>Do you have account? </span>
        <Link to="/login" className="underline">Log In</Link>
      </div>
    </div>
  )
}

export default Register