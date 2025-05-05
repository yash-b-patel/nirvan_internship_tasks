import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router'

function ProdCat() {
    const { categoryName } = useParams()
    const [data, setdata] = useState([]);

    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((res) => {
        const formattedData = res.map(product => ({
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          image: product.image,
        }));
        setdata(formattedData);
      });
  }, [categoryName]);


  return (
    <div style={{ overflowX: 'auto' }}>
      <h1>Category : {categoryName}</h1>
        <table style={{ border: '1px solid black', width: '100%', minWidth: '600px', padding: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: 'lightgray', border: '1px solid black' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Price</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Description</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr key={product.id} style={{ border: '1px solid black' }}>
                <td style={{ padding: '10px' }}>{product.title}</td>
                <td style={{ padding: '10px' }}>{product.price}</td>
                <td style={{ padding: '10px' }}>{product.description}</td>
                <td style={{ padding: '10px' }}>
                  <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default ProdCat