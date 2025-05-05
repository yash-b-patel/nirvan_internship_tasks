import { useState } from 'react'
import useProductcat from './useProductcat'
import './App.css'
const categoryname = 'electronics'
function App() {

  const categorydata = useProductcat(categoryname)

  return (
    <>
      {categorydata.map((product) => (
        //console.log(product.title),
        <p key={product.id}>
          
          {product.title}
        </p>    
      ))}
    </>
  )
}

export default App
