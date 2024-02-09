import Main from './mainpage/Main'
import Product from './productpage/Product'
import Cart from './cartpage/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './login/Login'
import Register from './register/Register'
import { useContext } from 'react'
import Context from './contexts/GlobalContext'
import { CookieProvider } from './contexts/CookieContext'

function App() {
  const { cookies } = useContext(Context)
  return (
    <>
      <CookieProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/register" replace />}></Route>
          <Route path="/main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CookieProvider>
    </>
  )
}

export default App
