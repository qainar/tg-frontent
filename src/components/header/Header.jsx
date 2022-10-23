import React from 'react';
import Button from "../button/Button";
import {useTg} from  '../../hooks/useTg'
const Header = () => {
    const {user, onClose} = useTg()
    return (
        <div className={'header'}>
            <Button onClose={onClose}>Закрыть</Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    );
};

export default Header;