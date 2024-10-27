/* eslint-disable react/prop-types */
import { useState } from 'react';
import { MyContext } from './myContext';

export function MyState({ children }) {
    const [loading, setLoading] = useState(false)
    return (
        <MyContext.Provider value={{
            loading,
            setLoading
        }}>
            {children}
        </MyContext.Provider>
    )
}
