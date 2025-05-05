import {Outlet} from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
