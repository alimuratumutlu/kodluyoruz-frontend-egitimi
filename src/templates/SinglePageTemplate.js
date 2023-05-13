import React from 'react'
import Header from '../../components/organisms/Header/Header';

export default function SinglePageTemplate({ children }) {
    return (
        <div  >
            <Header />
            {children}
        </div>
    )
}
