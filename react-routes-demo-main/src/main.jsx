import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router'
import './index.css'
import App from './App.jsx'
import About from './Components/Hero/About.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Pricing from './Components/Hero/Pricing.jsx'
import ProdCat from './Components/Products/ProdCat.jsx'
import Resource from './Components/Hero/Resource.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<App/>}>
      <Route path = '' element = {<Hero/>}/>
      <Route path = 'About' element = {<About/>}/>
      <Route path = 'Resource' element = {<Resource/>}/>
      <Route path = 'Pricing' element = {<Pricing/>}/>
      <Route path = 'ProdCat/:categoryName' element = {<ProdCat/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>
)
