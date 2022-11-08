import React from 'react'
import s from './style.module.sass';

export default function Product({title, marks, price, discount}) {
  const avg_marks = marks.reduce((prev, item) => prev + item, 0) / marks.length;
  const marks_row = marks.length === 0 
    ? 'оценок пока нет' 
    : `${avg_marks}/10 (${marks.length} голосов)`;

    // в случае наличии скидки необходимо вывести старую цену (зачеркнутую) и через пробел новую
    // если скидка равна нулю то вывести только цену (без зачеркивания)

  const with_discount = <div>
    <span style={{textDecoration: 'line-through'}}>{price}</span> {price - price * discount/100}
  </div>;

  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{marks_row}</p>
        {discount === 0 ? <div>{price}</div> : with_discount}
    </div>
  )
}


