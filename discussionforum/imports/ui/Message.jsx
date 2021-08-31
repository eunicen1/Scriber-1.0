import React from 'react';

export const Message = ({ chat }) => (
    <div className="box boxg">
        <div>
            <h3 className="email">{ chat.email }:</h3>
        </div>
        <div>
            <h3 className="message">{ chat.message }</h3>
        </div>
    </div>
);