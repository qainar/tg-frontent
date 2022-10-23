import './App.css';
import {useEffect} from "react";

function App() {
    const tg = window.Telegram.WebApp
    useEffect(()=> {
        tg.ready()
    }, [])
    return(
        <div className="App">
        </div>
      );
}

export default App;
