import './App.css';
import {useEffect} from "react";
import {useTg} from "./hooks/useTg"
import Header from "./components/header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/productList/ProductList";
import Form from "./components/form/Form";

function App() {
    const {tg} = useTg()

    useEffect(()=> {
        tg.ready()


    }, [tg])

    return(
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path='/form' element={<Form/>}/>
            </Routes>
        </div>
      );
}

export default App;
