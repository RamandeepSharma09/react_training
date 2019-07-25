import React from 'react';

export default ({list}) => {
    return (<ul>
        {
            list.map((value, index) => 
         
            <li key={index}>{value}</li>
        
    )}
    </ul>);
};