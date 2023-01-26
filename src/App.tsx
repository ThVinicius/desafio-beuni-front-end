import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { TokenProvider } from './context/useToken'
import { CartProvider } from './context/useCart'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import Header from './components/header/Header'
import Home from './pages/home/Index'
import SignIn from './pages/signIn/Index'
import SignUp from './pages/signUp/Index'

const App: FC = () => {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <ToastContainer />
      <TokenProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </CartProvider>
      </TokenProvider>
    </BrowserRouter>
  )
}

export default App
