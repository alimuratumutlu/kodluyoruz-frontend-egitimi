import React from 'react'
import "./FilterElement.css"

export default function FilterElement({ filterTitle, children }) {
    return (
        <div className="element-container" >
            <h3>{filterTitle}</h3>
            {children}
        </div>
    )
}
