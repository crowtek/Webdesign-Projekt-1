import React from 'react';
import "./trennstrich.css";

export function Trennstrich({ width }) {
    return <div className="trennstrich" style={{ width: `${width}%` }}></div>;
}

Trennstrich.defaultProps = {
    width: 20
};
