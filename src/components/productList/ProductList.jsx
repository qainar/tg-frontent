import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { useTg } from '../../hooks/useTg';
import ProductItem from '../productItem/ProductItem';
import './productList.css'

const products = [
    {id: '1', title: 'Джинсы', price: 5000, description: 'Синего цвета, прямые'},
    {id: '2', title: 'Куртка', price: 12000, description: 'Зеленого цвета, теплая'},
    {id: '3', title: 'Джинсы 2', price: 5000, description: 'Синего цвета, прямые'},
    {id: '4', title: 'Куртка 8', price: 122, description: 'Зеленого цвета, теплая'},
    {id: '5', title: 'Джинсы 3', price: 5000, description: 'Синего цвета, прямые'},
    {id: '6', title: 'Куртка 7', price: 600, description: 'Зеленого цвета, теплая'},
    {id: '7', title: 'Джинсы 4', price: 5500, description: 'Синего цвета, прямые'},
    {id: '8', title: 'Куртка 5', price: 12000, description: 'Зеленого цвета, теплая'},
]
const price = (items = []) =>{
    return items.reduce((acc,item) => {
        return acc += item.price
    }, 0)
}
const ProductList = () => {
    const [addedItems, setAddedItems] = useState([])
    const {tg,query_id} = useTg()

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems,
            totalPrice: price(addedItems),
            query_id
        }
        
        fetch('https://telegramtest1zxczxczxczxcx.herokuapp.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }, [addedItems, query_id])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])


    const onAdd = (product) => {
        const isAdded = addedItems.find(item => item.id === product.id)
        let newItems = []
        if(isAdded) {
            newItems = addedItems.filter(item => item.id !== product.id)
        }else{
            newItems = [...addedItems, product]
        }

        setAddedItems(newItems)

        if(newItems.length === 0){
            tg.MainButton.hide()
        }else {
            tg.MainButton.show()
            tg.MainButton.setParams({
                text: `Купить: ${price(newItems)}`
            })
        }

    }
    return (
        <div className={'list'}>
            {products.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;