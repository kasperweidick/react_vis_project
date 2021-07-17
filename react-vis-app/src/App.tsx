import React from 'react';
import './App.css';
import Header from './components/Header';
import Plot from './components/Plot';
import Data from './components/Data';
import '../node_modules/react-vis/dist/style.css';
import fetchData from './helperfunctions/fetchData';
import {useEffect} from "react";


const App: React.FC = () => {
    useEffect(() => {
      fetchData();
      }, []);
    return (
    <div className='container'>
        <Header title='React-vis'/>
        <Plot data={Data} height={200} width={200} barwidth={0.5} />
    </div>
    )
}

export default App;
