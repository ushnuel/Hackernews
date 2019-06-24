import React from 'react'

const Button = ({ children, onClick, className = '' }) => (
    <button type="button" onClick={onClick} className={className}>
        {children}
    </button>
);

export { Button };