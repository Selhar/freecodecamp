import React from 'react';
import Display from './display';
import Button from './button';

export default () => (
    <div className="board">     
        <Display />   
        <Button label="C"/>  
        <Button label="±"/>  
        <Button label="%"/>  
        <Button label="÷"/>
        <Button label="7"/>
        <Button label="8"/>        
        <Button label="9"/>  
        <Button label="X"/>  
        <Button label="4"/>  
        <Button label="5"/>
        <Button label="6"/>
        <Button label="−"/>
        <Button label="1"/>  
        <Button label="2"/>
        <Button label="3"/>
        <Button label="+"/>
        <Button label="0"/>  
        <Button label="●"/>
        <Button label="="/>
    </div>
)
