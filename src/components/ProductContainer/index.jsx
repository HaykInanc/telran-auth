import React from 'react'
import { useState } from 'react'
import Product from '../Product';
import s from './style.module.sass'

export default function ProductContainer() {

  const data = [
    {
        id: 1,
        title: 'велосипед',
        marks: [9, 8, 9, 7, 8],
        price: 45000,
        discount: 0
    },
    {
        id: 2,
        title: 'ролики',
        marks: [5, 6, 6, 5, 4, 7],
        price: 20000,
        discount: 5
    },
    {
        id: 3,
        title: 'сноуборд',
        marks: [],
        price: 25000,
        discount: 7
    }
  ]

  const [products, setProduct] = useState(data);

  const all_marks = products.reduce((prev, item) => [...prev, ...item.marks], []);
  const marks_avg = all_marks.reduce((prev, item) => prev + item, 0) / all_marks.length;
  const marks_row = all_marks.length === 0 
    ? 'оценок пока нет' 
    : `${marks_avg.toFixed(2)}/10 (${all_marks.length} голосов)`;

  return (
    <div className={s.container}>
        {
            products.map(product => <Product key={product.id} {...product}/>)
        }
        <p>{marks_row}</p>
    </div>
  )
}


