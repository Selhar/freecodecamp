import React from 'react';
import Pad from './padComponent';
import Controls from './controlsComponent';

export default () => (
    <div  className="board">
        <h1>Freecodecamp drum kit</h1>
        <Controls />
        <Pad/>
    </div>
)
