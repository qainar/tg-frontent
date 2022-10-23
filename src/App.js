import './App.css';
import {useEffect} from "react";
import {useTg} from "./hooks/useTg"

function App() {
    const {tg, toggleButton} = useTg()

    useEffect(()=> {
        tg.ready()


    }, [tg])

    return(
        <div className="App">
            <button onClick={toggleButton}></button>
        </div>
      );
}

export default App;
