import React from 'react'
import Button from '../button/Button'
import './productItem.css'

const ProductItem = ({className, product,onAdd}) => {
  const onAddHandler = () =>{
      onAdd(product)
  }
  return (
    <div className={'product' + className}>
        <img className={'img'} alt='dasdsa'/>
        <div className={'title'}>{product.title}</div>
        <div className={'description'}>{product.description}</div>
        <div className={'price'}>
            <span> Стоимость: <b>{product.price}</b></span>
        </div>
        <Button className={'add-btn'} onClick={onAddHandler}>
            Добавить в корзину
        </Button>
    </div>
  )
}

export default ProductItem