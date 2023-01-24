import { FC } from 'react'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import Header from './components/header/Header'
import Home from './pages/home/Index'

const App: FC = () => {
  return (
    <>
      <ResetCSS />
      <GlobalCSS />
      <Header />
      <Home />
    </>
  )
}

export default App
