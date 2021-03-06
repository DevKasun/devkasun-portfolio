import React from 'react';

const Card = ({ children }) => {
    return (
        <div className="card">
            <div className="card-content-wrap">
                {children}
            </div>
        </div>
    )
}

export default Card;