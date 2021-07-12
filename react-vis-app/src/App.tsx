import React from 'react';
import logo from './logo.svg';
import './App.css';
import { readConfigFile } from 'typescript';
import Header from './components/Header';

const App: React.FC = () => {
    return (
    <div className='container'>
        <Header title='React-vis'/>
    </div>
    )
}

export default App;
