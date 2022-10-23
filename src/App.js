import './App.css';
import {useEffect} from "react";
import {useTg} from "./hooks/useTg"
import Header from "./components/header/Header";

function App() {
    const {tg, toggleButton} = useTg()

    useEffect(()=> {
        tg.ready()


    }, [tg])

    return(
        <div className="App">
            <Header/>
            <button onClick={toggleButton}>toggle</button>
        </div>
      );
}

export default App;
