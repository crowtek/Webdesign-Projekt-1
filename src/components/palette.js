import React from 'react';
import "./palette.css";

export function Palette({ color }) {
    return (
        <div className="palette">
            <div className='palette-color' style={{backgroundColor: `${color}`}}></div>
            <div className='palette-name'><p>{color}</p></div>

        </div>);
}

//default values style={{ width: `${width}%` }
Palette.defaultProps = {
    width: 20
};
