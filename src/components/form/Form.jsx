import React, {useCallback, useEffect, useState} from 'react';
import './form.css'
import {useTg} from "../../hooks/useTg";
const Form = (callback, deps) => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')
    const {tg} = useTg()
    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [country, street, subject, tg])

    useEffect(()=> {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg])





    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    return (
        <div className={'form'}>
            <h3>Введите данные</h3>
            <input
                type="text"
                className={'input'}
                placeholder={'Страна'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                type="text"
                className={'input'}
                placeholder={'Улица'}
                value={street}
                onChange={onChangeStreet}
            />
            <select className={'select'} value={subject} onChange={onChangeSubject}>
                <option value={'phisical'}>Физическое лицо</option>
                <option value={'legal'}>Юридическое лицо</option>
            </select>
        </div>
    );
};

export default Form;