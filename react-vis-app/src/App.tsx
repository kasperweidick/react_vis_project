import React from 'react';
import './App.css';
import Header from './components/Header';
import Plot from './components/Plot';
import '../node_modules/react-vis/dist/style.css';
// import fetchData from './helperfunctions/fetchData';
import {useState,useEffect} from "react";



const App: React.FC = () => {
    const [data, setData] = useState<{ x: number; y: number; }[]>()
    
    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch("https://kasperweidick.pythonanywhere.com/api/data/all")
            const result = await response.json()
            setData(result)
          }
      
          fetchMyAPI()

    }, []);
    
    return (
    <div className='container'>
        <Header title='React-vis'/>
        <Plot data={data} height={800} width={800} />
    </div>
    )
}

export default App;
