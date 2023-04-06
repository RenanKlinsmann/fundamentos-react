import  './App.css'
import React from "react";
import Card from './layout/Card';
import Primeiro from './components/Primeiro'

export default () => (
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className='Cards'>
            <Card titulo='#01 - Primeiro' color='#E94'>
                <Primeiro/>
            </Card>
            <Card titulo='#2 - Segunda aula' color='#00B718'>
               
            </Card>
        </div>
    </div>
);